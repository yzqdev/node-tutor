<template>
  <div ref="container" style="height: calc(100% - 2.5rem)"></div>
</template>

<script setup lang="ts">
import {onMounted, ref, onUnmounted, watch, toRefs, reactive, defineExpose} from 'vue';
import {useResizeObserver, useStorage, useDebounceFn} from '@vueuse/core';
import {initialEditorValue, StorageName, useDarkGlobal} from '../utils';
// Import monaco
// https://github.com/vitejs/vite/discussions/1791
import * as monaco from 'monaco-editor';
import './useWorkder'

const container = ref<HTMLDivElement | null>(null);

let editor: monaco.editor.IStandaloneCodeEditor;
const isDark = useDarkGlobal();

const props = defineProps<{
  activeTab: string;
  receiveCode:string
}>();

const {activeTab,receiveCode} = toRefs(props);

const editorState = $(useStorage<Record<string, any>>(
  StorageName.EDITOR_STATE,
  {}
));
 const editorValue = $(useStorage<Record<string, any>>(
  StorageName.EDITOR_VALUE,
  initialEditorValue
));

const emit =
  defineEmits<{ (e: 'change', payload: typeof editorValue ): void, }>();
onMounted(() => {
  editor = monaco.editor.create(container.value!, {
    language: activeTab.value,
    theme: isDark.value ? 'vs-dark' : 'vs',
  });

  emit('change', editorValue );

  editor.onDidChangeModelContent(
    useDebounceFn(() => {
      if (editorValue[activeTab.value] !== editor.getValue()!) {
        editorValue[activeTab.value] = editor.getValue()!;
        emit('change', editorValue );
      }
    }, 500)
  );

  // Set values from storage on load
  if (editorValue[activeTab.value]) {
    editor.setValue(editorValue[activeTab.value]);
    editor.restoreViewState(editorState[activeTab.value]);
  }
});
function clearEditor(){
  editor.setValue('')
}
watch(activeTab, (currentTab, prevTab) => {
  monaco.editor.setModelLanguage(editor.getModel()!, currentTab);

  editorState[prevTab] = editor.saveViewState();

  if (editorValue[currentTab]) {
    editor.setValue(editorValue[currentTab]);
  } else {
    editor.setValue('');
  }

  if (editorState[currentTab]) {
    editor.restoreViewState(editorState[currentTab]!);
    editor.focus();
  }
});
watch(receiveCode,(newVal,oldVal) => {
  editor.setValue(newVal)
})
watch(isDark, (value) => {
  editor.updateOptions({
    theme: value ? 'vs-dark' : 'vs',
  });
});

const editorObserver = useResizeObserver(container, () => {
  editor.layout();
});

onUnmounted(() => {
  editor?.dispose();
  editorObserver.stop();
});
defineExpose({
  clearEditor
})
</script>
