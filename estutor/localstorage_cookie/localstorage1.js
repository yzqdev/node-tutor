$(document).ready(() => {
  for (let i = 0; i < localStorage.length; i++) {
    $(`#showCookie`).append(`<pre>${localStorage.key(i)}</pre>`);
  }

  if (getLocalstorge(`localflag`)) {
    $(`#exampleCheck1`).prop(`checked`, true);
    $(`#exampleInputEmail1`).val(localStorage.useremail);
    $(`#exampleInputPassword1`).val(localStorage.userpass);
  } else {
    $(`#exampleCheck1`).prop(`checked`, false);
    localStorage.clear();
  }

  //点击添加cookie
  $(`#submit`).click(() => {
    const checkFlag = $(`#exampleCheck1`).is(`:checked`);
    if (checkFlag) {
      const objN = {
        useremail: $(`#exampleInputEmail1`).val(),
        userpass: $(`#exampleInputPassword1`).val(),
        localflag: true
      };
      addLocalstorge(objN);
    } else {
      const objn = [`useremail`, `userpass`, `localflag`];
      delLocalstorge(objn);
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
function addLocalstorge({ useremail, userpass, localflag }) {
  //添加cookie
  localStorage.useremail = useremail;
  localStorage.userpass = userpass;
  localStorage.localflag = localflag;
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
function getLocalstorge(objName) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === objName) {
      return localStorage.key(i);
    }
  }
}
function delLocalstorge([useremail, userpass, localflag]) {
  //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
  localStorage.removeItem(useremail);
  localStorage.removeItem(userpass);
  localStorage.removeItem(localflag);
  // 或者localStorage.clear();
}
