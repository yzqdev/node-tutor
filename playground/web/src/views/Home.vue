<template>
  <div class="container-home" :class="{ noAside: !isShowAside }">
    <aside>
      <button
        class="btn-toggle"
        @click="isShowAside = !isShowAside"
        :class="{ open: !isShowAside, close: isShowAside }"
      ></button>
      <h1 class="title">Playground</h1>
      <ul class="list-project">
        <li
          class="item-project"
          :class="{ current: dp.id === currentId }"
          v-for="(dp, index) in dataProject"
          @click="loadCode(dp.id)"
        >
          {{ index + 1 }}、{{ dp.title }}
          <img
            src="../assets/image/icon-share.png"
            class="btn-share"
            alt="分享"
            @click="share(dp.id)"
          />
          <i class="iconfont icon-launch text-sm"></i>
        </li>
      </ul>
      <el-button class="btn-add" @click="add()"></el-button>
    </aside>
    <div class="box-editor">
      <div class="box-code" :style="{ height: boxCodeHeight + 'px' }">
        <Nav></Nav>
        <monaco-editor
          :receive-code="receiveCode"
          active-tab="javascript"
          @change="getCode"
          @get-editor="getEditor"
          ref="codeEditorRef"
        ></monaco-editor>
      </div>
      <div class="box-control">
        <div class="box-right">
          <label class="text-title">{{ currentTitle }}</label>
          <button @click="popSaveOpen = true">保存</button>
          <button class="btn-save" @click="removeData">删除</button>
          <button @click="clearConsole">清空</button>
          <button @click="run">运行</button>
        </div>
      </div>
      <div class="box-console">
        <ul class="list-console">
          <li class="item-console" v-for="dc in dataConsole">
            <label>{{ dc.time }}&nbsp;&nbsp;:&nbsp;&nbsp;</label>
            {{ dc.msg }}
          </li>
        </ul>
      </div>
    </div>
    <pop-save :open="popSaveOpen" @close="popSaveOpen = false" @sutmit="submit">
    </pop-save>
    <pop-alert :text="alertText" @close="alertClose()"></pop-alert>
    <pop-share :cid="shareCodeId" @close="shareClose()"></pop-share>
  </div>
</template>

<script setup lang="ts">
import PopSave from "@/components/PopSave.vue";
import PopAlert from "@/components/PopAlert.vue";
import PopShare from "@/components/PopShare.vue";
import {onMounted, reactive, ref, toRefs} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import MonacoEditor from "@/components/MonacoEditor.vue";
import dayjs from "dayjs";
import Nav from "@/components/Nav.vue";
import {useLocalStorage, useStorage} from "@vueuse/core";
import {initialEditorValue, StorageName} from "@/utils";
import {getCodeListApi, homeAddApi, removeDataApi} from "@/utils/home";

let boxCodeHeight = $(useStorage("boxCodeHeight", 300));
let state = reactive({
  editor: null,
  dataConsole: [],
  dataProject: [],
  preY: 0,

  currentId: "",
  currentTitle: "",
  isShowAside: true,
  popSaveOpen: false,
  alertText: "",
  receiveCode: "",
  shareCodeId: "",
  code: "",
});
let codeEditorRef = ref();
let {
  editor,
  dataConsole,
  dataProject,
  preY,
  receiveCode,
  currentId,
  currentTitle,
  isShowAside,
  popSaveOpen,
  alertText,
  shareCodeId,
  code,
} = toRefs(state);
let store = useStore();
let router = useRouter();
let route = useRoute();

onMounted(async () => {


  window.onmousedown = ctrlMouseDown;
  window.onmousemove = ctrlMouseMove;
  window.onmouseup = ctrlMouseUp;
  document.addEventListener("mouseleave", mouseLeaveWindow);
  console.log = log;
 await setCodeList()

  const cid = route.query.Cid;
  if (cid) {
    loadCode(cid);
  }
});
async function setCodeList() {
  let {data} = await getCodeListApi()
  if (data.success) {
    dataProject.value = data.list;
  }
}
function mouseLeaveWindow(e) {
  state.preY = 0;
}

function ctrlMouseDown(e) {
  let el = e.target || e.srcElement;
  while (el) {
    if (el.className && el.className.indexOf("box-control") >= 0) {
      state.preY = e.clientY;
    }
    el = el.parentNode;
  }
}

function ctrlMouseMove(e) {
  const nowY = e.clientY;
  if (state.preY <= 0) {
    return;
  }
  e.preventDefault();

  boxCodeHeight += nowY - state.preY;
  if (boxCodeHeight < 50) {

    boxCodeHeight = 50;
  } else if (boxCodeHeight > document.body.clientHeight - 100) {
    //@ts-ignore
    boxCodeHeight = document.body.clientHeight - 100;
  } else {
    state.preY = nowY;
  }
}

function getEditor(payload: any) {
  state.editor = payload;
}

function getCode(payload: Record<string, any>) {
  state.code = payload.javascript;
}

function ctrlMouseUp(e) {
  state.preY = 0;
}

function evil(fn) {
  let Fn = Function; //一个变量指向Function，防止有些前端编译工具报错
  return new Fn("return " + fn)();
}

function run() {
  eval(state.code);
}

function log(text: any) {
  state.dataConsole.unshift({
    type: "log",
    time: dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    msg: text,
  });
}

async function removeData() {
  if (!state.currentId) {
    state.alertText='没有选择!'
    return
  }
  let res = removeDataApi(state.currentId)
  await setCodeList()
  state.alertText = '删除成功'

}

function clearConsole() {
  codeEditorRef.value.clearEditor();
  state.dataConsole = [];
}

async function submit(verifyData: any) {

  verifyData.content = state.code;
  let {data} = await homeAddApi(verifyData)
  if (data.success) {
    await setCodeList()
    state.alertText = "提交成功!";
  } else {
    state.alertText = data.msg;
  }
}

function loadCode(id) {
  store.dispatch("codeDetail", id).then(function (data) {
    if (data.success) {
      state.currentId = id;
      state.currentTitle = data.title;
      receiveCode.value = data.content;
    }
  });
}

function add() {
  state.currentTitle = "";

  clearConsole();
}

function alertClose() {
  state.alertText = "";
  state.currentId = "";
  state.currentTitle = "";
  codeEditorRef.value.clearEditor();
}

function share(id) {
  state.shareCodeId = id;
}

function shareClose() {
  state.shareCodeId = "";
}
</script>

<style lang="scss" scoped>
.container-home {
  height: 100%;
  background-color: #0c1021;
}

aside {
  position: fixed;
  width: 260px;
  left: 0;
  top: 0;
  height: 100%;
  box-sizing: border-box;
  background-color: #333;
  border-right: 1px solid #565656;
  z-index: 10;
  transition: transform 0.5s;
  will-change: transform;
}

.btn-toggle {
  position: absolute;
  width: 25px;
  height: 60px;
  right: -26px;
  background-color: #222;
  top: 50%;
  transform: translateY(-50%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: 1px solid #565656;
  border-right: 1px solid #565656;
  border-bottom: 1px solid #565656;
  border-left: none;
  box-shadow: 1px 0 5px #111;
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  outline: none;
  cursor: pointer;
}

.btn-toggle.close {
  background-image: url("../assets/image/arrow-close.png");
}

.btn-toggle.open {
  background-image: url("../assets/image/arrow-open.png");
}

.title {
  padding: 10px 0;
  background-color: #111;
  color: #999;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
}

.list-project,
.item-project {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item-project {
  position: relative;
  padding: 0 10px;
  color: #999;
  word-wrap: break-word;
  word-break: break-all;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}

.item-project:hover,
.item-project.current {
  background-color: #222;
}

.btn-share {
  position: absolute;
  display: block;
  right: 0;
  top: 0;
  padding: 10px;
  height: 20px;
  visibility: hidden;

  &:hover {
    height: 26px;
    padding: 7px;
    background-color: #2a2a2a;
  }
}

.item-project:hover .btn-share,
.item-project.current .btn-share {
  visibility: visible;
}

.btn-add {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  border: none;
  border-top: 1.5px solid #222;
  background-color: transparent;
  background-image: url("../assets/image/icon-add.png");
  background-repeat: no-repeat;
  background-size: 26px;
  background-position: center;
  cursor: pointer;
  outline: none;
}

.btn-add:hover {
  background-color: #222;
}

.box-editor {
  width: 100%;
  height: 100%;
  position: relative;
  padding-left: 260px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: padding-left 0.5s;
  will-change: padding-left;
}

.box-code {
  font-size: 16px;
  overflow: hidden;
  flex-shrink: 0;
}

.box-code > .CodeMirror {
  height: 100%;
}

.box-control {
  height: 50px;
  background-color: #333;
  border-top: 1px solid #565656;
  border-bottom: 1px solid #565656;
  cursor: ns-resize;
  flex-shrink: 0;
}

.box-control button {
  height: 30px;
  width: 80px;
  margin: 10px 0 10px 10px;
  box-sizing: border-box;
  border: 1px solid #565656;
  background-color: #222;
  color: #777;
  cursor: pointer;
  outline: none;
}

.box-control .box-right {
  float: right;
  margin-right: 30px;
}

.box-control button:active {
  background-color: #111;
  color: #565656;
}

.text-title {
  height: 32px;
  margin: 9px;
  box-sizing: border-box;
  outline: none;
  padding: 5px;
  font-size: 16px;
  font-family: 微软雅黑;
  width: 400px;
  color: #aaa;
  overflow: hidden;
}

.link-site {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  margin: 9px;
  font-family: 微软雅黑;
  color: #0c1021;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
  text-decoration: none;
  visibility: hidden;
}

.link-site:hover {
  text-decoration: underline;
}

.box-console {
  flex-grow: 1;
  background-color: #0c1021;
  overflow: auto;
}

.list-console,
.item-console {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 14px;
  color: #8da6ce;
}

.list-console {
  padding: 10px 0;
}

.item-console {
  padding: 3px;
  word-wrap: break-word;
  word-break: break-all;
}

.item-console:hover {
  background-color: #222;
}

.item-console label {
  user-select: none;
}

.container-home.noAside aside {
  transform: translateX(-260px);
}

.container-home.noAside .box-editor {
  padding-left: 0;
}

.CodeMirror pre {
  font: 16px/1.5 Helvetica, Arial, sans-serif !important;
}

@media screen and (max-width: 1000px) {
  aside {
    display: none;
  }

  .box-editor {
    padding-left: 0;
  }

  .btn-save {
    display: none;
  }

  .link-site {
    visibility: visible;
  }

  .box-control .box-right {
    margin-right: 10px;
  }
}
</style>

<!--webpack练习 https://juejin.im/post/58edcbda44d904005774cfb1-->
