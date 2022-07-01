import { createGlobalState, useDark } from '@vueuse/core';

export const generateHTML = (
  payload: Record<string, any>,
  isDark?: boolean
) => {
  return `<html class="${isDark ? 'dark' : ''}">
        <head>
            <style id="_style">${payload.css}</style>
            <script type="module" id="_script">
                ${payload.javascript}

                window.addEventListener('message', function(event) {
                    console.log(event)
                    if (event.data === 'theme-dark') {
                        document.documentElement.classList.add('dark')
                    } else if (event.data === 'theme-light') {
                        document.documentElement.classList.remove('dark')
                    }
                })
            </\script>
        </head>
        <body>
            ${payload.html}
        </body>
    </html`;
};

export const useDarkGlobal = createGlobalState(() => useDark());

export const initialEditorValue = {
  html: `<!DOCTYPE html>
<html lang="zh"  >
<head>
    <meta charset="UTF-8"/>
    <title>系统配置</title>
    <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
    <script src="https://cdn.jsdelivr.net/npm/element-plus"></script>
</head>
<body>
<div id="app">
     <el-button>哈哈哈</el-button>

</div>



</body>
</html>`,
  javascript:
    ` const app=Vue.createApp({
        data(){
            return{
                msg:'hhhhh'
            }
        }
    })
    app.use(ElementPlus);
    app.mount("#app")`,
  css: '',
};
