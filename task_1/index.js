import { encoded, translations } from "./data.js";

// console.log("Let's rock")
// console.log(encoded, translations)

const decoded = (encod, translations) => {
  return encod.map((elem) => {
    let newElem = {};
    for (let key in elem) {
      if (key.substr(-2) === "Id" && key != "groupId") {
        for (let keyTrans in translations) {
          if (elem[key] === keyTrans) {
            newElem[key.slice(0, -2)] = translations[keyTrans];
          }
        }
      } else {
        newElem[key] = elem[key];
      }
    }
    return newElem;
  });
};

console.log(decoded(encoded, translations));
