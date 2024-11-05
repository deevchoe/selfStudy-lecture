// 1. Number Type : 존재할 수 있는 모든 숫자값들 다 포함
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 기본적인 사칙연산 모두 지원 + %연산자를 이용한 나머지를 구하는 연산도 가능
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

// 숫자로 보이지 않는 독특한 값들도 포함이 되어있다.
let inf = Infinity; // 양의 무한대를 의미
let mInf = -Infinity; // 음의 무한대를 의미
let nan = NaN; // NaN : Not a Number : 수치 연산이 실패했을 때 결과값으로 보통 사용
console.log(1 * "hello"); // 자바스크립트는 연산이 실패했을 경우에 반환하는 NaN과 같은 값이 있기 때문에 불가능한 수치연산을 시키더라도 프로그램이 완전히 종료되거나 하지 않는다.

// 2. String Type : 문자열 값들을 모두 포함하는 타입
// 홑따옴표나 쌍따옴표 필수 사용
let myName = "익명";
// 덧셈 연산 지원
let myLocation = "서울";
let introduce = myName + myLocation;
console.log(introduce); // 익명서울

// `` 백틱으로도 사용 가능 : 변수의 값을 동적으로 문자열 안에 포함시킬 수 있다.
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);
// 이를 템플릿 리터럴 문법 이라 함.

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다) : 개발자가 명시적으로 이 변수에 어떠한 값도 없다는 걸 표현할 때 사용
let empty = null;

// 5. Undefined Type : 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값  -> 변수를 미쳐 초기화하지 못했거나, 존재하지 않는 어떤 값을 불러오려고 할 때 쓰는 그런 값
let none;
console.log(none);
