// 함수 선언
function greeting() {
  // 함수가 실행해야 하는 코드들을 작성
  console.log("안녕하세요!");
}

// 함수 호출
greeting(); // 소괄호와 함께 호출해야 한다.

function getArea(width, height) {
  // 2) 전달된 인수는 함수의 매개 변수에 순서대로 저장
  let area = width * height; // 3) 내부에서 값 사용

  //console.log(area);
  return area; // 반환값
}

getArea(10, 20); // 1) 10, 20 이라는 인수를 전달

let area1 = getArea(10, 20); // return 200    area1이라는  변수에 200이 저장됨
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

// 호이스팅
// -> 끌어올리다 라는 뜻
// -> 선언문을 호출문보다 아래 두어도 내부적으로 끌어올려져서 선언문이 먼저 실행되기 때문에 문제없이 실행된다.

// 함수 내부에 또 다른 함수 만들기 가능
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
