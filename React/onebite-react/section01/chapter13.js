// 1. 콜백함수
function main(value) {
  value();
}

main(() => {
  //   console.log("I am sub");
});

// 2. 콜백함수의 활용 - 중복 코드를 발생시키지 않으면서 코드를 크게 개선 시킬 수 있다.
function repeat(count, callback) {
  // repeat 함수에다가 새로운 매개변수 callback 함수를 추가
  for (let idx = 1; idx <= count; idx++) {
    callback(idx); // callback 함수를 호출하고 인수로 idx를 넘겨주도록 설정
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// function repeatTriple(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

repeat(5, function (idx) {
  console.log(idx);
}); // repeat 함수를 호출하면서 새로운 callback 함수를 하나 더 전달을 해줄건데 어떤 함수를 전달해줄거냐면 매개변수 idx를 받아서 그냥 콘솔에 받아서 출력하는 함수를 전달해줄 것이다.
// repeatDouble(5);

repeat(5, function (idx) {
  console.log(idx * 2);
});
