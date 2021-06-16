import { firstName, lastName } from "./ex1.js";
import ex2 from "./ex2.js";

function setName(element) {
  element.textContent = firstName + `` + lastName;
  console.log(element);
}
console.log(firstName, lastName);
