// 타입의 호환을 맞춰야할 때 사용한다.
/* 사용 전 
function merge(a: any, b: any) {
    return {
        ...a,
        ...b,
    };
}

// 제너릭스를 사용 안한다면 어떤 타입을 넣어야할지 헷갈릴 수 있음.
const merged = merge({ foo: 1 }, { bar: 2 });
merged. 확인 되지 않음.
*/

function merge<T1, T2>(a: T1, b: T2) {
    return {
        ...a,
        ...b,
    };
}
const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });
// merged. 확인 가능

function wrap<T>(param: T) {
    return {
        param,
    };
}

const wrapped = wrap(10); // "10" 을 입력하게되면 타입이 string 으로 추론
// wrapped.param 타입을 확인 가능
