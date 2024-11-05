// 1. 변수 : 프로그램이 실행되는 도중에 계속해서 값을 바꿔가면서 저장할 수 있는 저장소
let age;
console.log(age);

age = 30;
console.log(age);

// 2. 상수 : 변수처럼 값을 저장하는 저장소. 변수와는 달리 한 번 저장된 값을 바꿀 수 없음
const birth = "1999.11.26"; // 상수는 값을 변화시키는 거 자체가 불가능하기 때문에 초기화가 필수적이다.
// birth = "123";  // 오류!!

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
// 누가 봐도 바로 이해할 수 있는 네임으로 변수명을 정하자~
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
