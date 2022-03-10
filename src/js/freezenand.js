/*
 * @Author: your name
 * @Date: 2020-03-15 12:22:47
 * @LastEditTime: 2020-04-06 15:44:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jstutor\js\freezenand.js
 */
function deepFreeze(object) {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }
  return Object.freeze(object);
}
//? hlsdfjsdlkfs
//x dkfdlsfj k
let person = {
  name: "Leonardo",
  profession: {
    name: "developer",
  },
};
deepFreeze(person);
person.profession.name = "doctor"; // TypeError: Cannot assign to read only property 'name' of object
