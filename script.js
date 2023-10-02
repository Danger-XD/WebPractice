// let newVar = (function () {
//   let pv = 5; //private value which is directly not accessable
//   return {
//     getter: function () {
//       console.log(pv);
//     },
//     setter: function (val) {
//       pv = val;
//     },
//   };
// })();
var myLine = document.querySelector("h1");
myLine.style.color = "black";
myLine.style.backgroundColor = "white";
myLine.style.userSelect = "none";
var f = 0;
myLine.addEventListener("click", () => {
  if (f == 0) {
    myLine.innerHTML = "Hello Im changed";
    myLine.style.color = "blue";
    f = 1;
  } else {
    myLine.style.color = "red";
    f = 0;
  }
});
var bulb = document.querySelector(".bulb");
var onbtn = document.querySelector(".on-btn");
var offbtn = document.querySelector(".off-btn");
onbtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "yellow";
  console.log("onbtn");
});
offbtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "white";
  console.log("offbtn");
});
