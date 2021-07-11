function sum(a: number, b: number): number {
    return a + b;
}

const result = sum(1, 2);

function sumArray(numbers: number[]): number {
    //numbers 를 파라미터로 받고 넘버배열이란것을 명시,
    // 리턴 값도 number 로 명시
    return numbers.reduce((acc, current) => acc + current, 0);
    // numbres.reduce를 할 경우 reduce의 값들을 number로 넣어줘야한다.
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing() {
    // 아무것도 반환하지 않을 경우 반환 타입이 void로 설정된다.
    console.log("Void");
}
returnNothing();

// function returnNothing(): void {
//     console.log("Void");
//     return true;
// }
// returnNothing();
function returnStringOrNumver(): string | number {
    return 4; // return "hello"
}
