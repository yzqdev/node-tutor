import _ from "lodash"
import  './style/index.css'
function createDomElement() {
  var dom=document.createElement('div');
  dom.innerHTML=_.join(['htst1',"test2",'test3']);
  dom.classList.add('box')
    return dom
}
let divDom=createDomElement()
document.body.appendChild(divDom)
