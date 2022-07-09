import {deps} from "./dep/index";
import {getPixiv} from "./dep/spider";


function  bootstrap() {
  // deps.getDeps()
  getPixiv().then(r => {
    console.log(r)
  })
}
bootstrap()
