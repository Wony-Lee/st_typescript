// interface generics
interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    // number로 선언할 경우
    // list:[1,2,3] 으로 사용가능
    list: ["a", "b", "c"],
};

// type alias 로 구현하기

/*
type Items<T> = {
    list: T[];
}

const items: Items<number> = {
    list: [1,2,3]
} 

*/
/*
generic은 하나가 아닌 여러개 선언도 가능하다.
type Items<T, V> = {
    list: T[];
    value: V
}

const items: Items<number> = {
    list: [1,2,3]
    vallue:"aaaa"
} 

*/
