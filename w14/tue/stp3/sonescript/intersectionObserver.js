let observerOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

// function observerCallback() {}
let observerCallback = (observingTargets) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
// // 하드코딩
// observer.observe(elems[0]);
// observer.observe(elems[1]);
// observer.observe(elems[2]);
// observer.observe(elems[3]);
// ...
// // 조금 똑똑한 코딩
// for (let idx = 0; idx < elems.length; idx++) {
//   observer.observe(elems[idx]);
// }
// 있어보이는 코딩
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});

// // new IntersectionObserver(function(){
// //   조건에 부합할때 실행시킬 문구들.
// // })

// let observeroption = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.75,
// };

// let option = {};
// // function observerCallback() {}
// let observercallback = (observingTargets) => {
//   observingTargets.forEach(
//     (eachObservingTarget) => {
//       if (eachObservingTarget.isIntersecting) {
//         eachObservingTarget.target.classList.add(
//           "triggered"
//         );
//       } else {
//         eachObservingTarget.target.classList.remove(
//           "triggered"
//         );
//       }
//     }
//   );
// };

// let observer = new IntersectionObserver(
//   observercallback,
//   observeroption
// );

// let elems = document.querySelectorAll(
//   ".animTrigger"
// );

// // // 하드코딩
// // observer.observe(elems[0]);
// // observer.observe(elems[1]);
// // observer.observe(elems[2]);
// // observer.observe(elems[3]);
// // ...
// // // 조금 똑똑한 코딩
// // for (let idx = 0; idx < elems.length; idx++) {
// //   observer.observe(elems[idx]);
// // }
// // 있어보이는 코딩
// elems.forEach((eachElem) => {
//   observer.observe(eachElem);
// });
