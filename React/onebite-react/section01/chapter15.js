// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자 방식. 내장 함수를 이용해서 생성하는 방법
let obj2 = {}; // 그냥 중괄호 열어서 생성하는 방법    // 객체 리터럴 방식(대부분 사용)

// 갯수 제한, 타입 제한 없음
let person = {
  // 2. 객체 프로퍼티 (객체 속성) : 객체 안에 저장되어있는 name이나 age나 hoby와 같은 객체의 정보값을 이르는 말. 객체의 실질적인 정보를 담고있는 역할을 함   key : value
  name: "익명",
  age: "26",
  hobby: "코딩",
  10: 20, // 숫자값도 키로 사용 가능
  "like cat": true,
};

// 3. 객테 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 익명

let age = person["age"]; // 대괄호 안에 문자열로 접근하고자 하는 프로퍼티의 키를 명시하는 방법
// 주의 : 쌍따옴표와 함께 문자열로 작성해야 함. 쌍따옴표 없이 쓰면 age를 변수로 인식해서 오류가 발생함.
console.log(age);

let property = "hobby";
let hobby = person[property]; // person 객체에서 변수 property의 값인 hobby 프로퍼티의 값을 꺼내오게 됨
console.log(hobby); // hobby 프로퍼티의 값인 코딩 출력.

// 동적으로 프로퍼티의 값을 변화시키면서 꺼내와야 한다하면 괄호 표기법을.
// 그게 아니라면 문법이 훨씬 간결한 .표기법을 사용하자

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person); // 새로 추가한 job과 favoriteFood가 잘 추가된 것을 확인할 수 있ㅇ므

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법 - delete 연산자 사용
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name이라는 프로퍼티가 person이라는 객체에 있냐 없냐! true나 false를 반환함
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
