$(document).ready(() => {
  $(`#showCookie`).append(`<pre>${document.cookie}</pre>`);
  if (getCookie(`cookieflag`)) {
    $(`#exampleCheck1`).prop(`checked`, true);
    $(`#exampleInputEmail1`).val(getCookie(`useremail`));
    $(`#exampleInputPassword1`).val(getCookie(`userpass`));
  } else {
    $(`#exampleCheck1`).prop(`checked`, false);
    delCookie(`cookieflag`);
  }

  //点击添加cookie
  $(`#submit`).click(() => {
    let cookieflag = false;
    const checkFlag = $(`#exampleCheck1`).is(`:checked`);
    if (checkFlag) {
      cookieflag = true;
      addCookie(`cookieflag`, cookieflag, 24);
      addCookie(`useremail`, $(`#exampleInputEmail1`).val(), 24);
      addCookie(`userpass`, $(`#exampleInputPassword1`).val(), 36);
    } else {
      delCookie(`cookieflag`);
      delCookie(`useremail`);
      delCookie(`userpass`);
    }
  });
});
/**
 * @Author  yanni
 * @Description    //TODO
 * 获取指定名称的cookie的值
 * @Date  14:03 2019/7/14
 * @Modified By:
 * @param  {string} objName  - cookiename
 * @param  {number} objValue  - cookie 值
 * @param  {number} objHours  - cookie 过期时间
 * @returns {void}
 */
function addCookie(objName, objValue, objHours) {
  //添加cookie
  let str = `${objName}=${escape(objValue)}`;
  if (objHours > 0) {
    //为0时不设定过期时间，浏览器关闭时cookie自动消失
    const date = new Date();
    const ms = objHours * 3600 * 1000;
    date.setTime(date.getTime() + ms);
    str += `; expires=${date.toGMTString()}`;
  }
  document.cookie = str;
  alert(`添加cookie成功`);
}
/**
 * @Author  yanni
 * @Description    //TODO
 * 获取cookie
 * @Date  14:35 2019/7/14
 * @Modified By:
 * @param  {string} objName  - cookie name
 * @returns  {string}
 */
function getCookie(objName) {
  const arrStr = document.cookie.split(`; `);
  for (let i = 0; i < arrStr.length; i++) {
    const temp = arrStr[i].split(`=`);
    if (temp[0] === objName) {
      return unescape(temp[1]);
    }
  }
}
function delCookie(name) {
  //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
  const date = new Date();
  date.setTime(date.getTime() - 10000);
  document.cookie = `${name}=a; expires=${date.toGMTString()}`;
}
//读取出来所有的cookie字筗串了
function allCookie() {
  //读取所有保存的cookie字符串
  let str = document.cookie;
  if (str === ``) {
    str = `没有保存任何cookie`;
  }
  alert(str);
}
