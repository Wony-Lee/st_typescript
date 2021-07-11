let count = 0;
count += 1;
// count = '문자열' 에러 발생
const message: string = "hello world"; // string
const done: boolean = false; // boolean
const numbers: number[] = [1, 2, 3]; // number array
const messages: string[] = ["hello", "world"]; // string array

// messages.push(1) // 문자열 배열이기때문에 에러 발생

let mightBeUndefined: string | undefined = undefined; // undefined 일 수도 있고 문자열일 수도 있다라는 것을 명시
let nullableNumber: number | null = null; // 널일수도있고 숫자일수도있다.

let color: "red" | "orange" | "yellow" = "red";
color = "red"; // 자동완성이 되어서 red,orange,yellow 가 나온다.
// color = 'green' 을 할 경우 에러가 발생. 없는 값이기 때문에
