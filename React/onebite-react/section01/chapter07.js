// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;

// 덧셈과 뺄셈 연산자보다 우선순위가 높다.
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6); // 21;
num6 = (1 + 2) * 10; // 우선순위가 낮은 연산을 먼저 수행시키고 싶다면 소괄호로 묶어줘~
console.log(num6); // 30

// 3. 복합 대입 연산자 : 산술 연산자와 대입 연산자가 복합되어있다~
let num7 = 10;
//num7 = num7 + 20;

// 복합 대입 연산자
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
console.log(num8++); // 10      // 후위 연산
console.log(++num8); // 11      // 전위 연산

// 5. 논리 연산자
let or = true || false; // 둘 중 하나만 참이어도 참

let and = true && false; // 둘 다 참이어야 참

let not = !true; // true라면 false로, false라면 true로 반전

console.log(or, and, not); // true false false

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);
