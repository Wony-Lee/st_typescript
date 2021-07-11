interface Shape {
    // getArea  함수가 있어야한다는 것을 함수의 반환 타입은 number
    getArea(): number;
}
/*
// Circle에서 Shape 를 구현하기 위해 implements 해준다.
class Circle implements Shape {
    // 내용물이 아무것도 없을 경우 Circle에 빨간줄이 생긴다.
}*/

class Circle implements Shape {
    // 이니셜라지어가 없고 생성자에 할당되어 있지 않으면 에러가뜬다.
    radius: number;

    // 생성자를 생성해준다.
    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

// 응용해서 Rectangle을 만들어보자.
class Rectangle implements Shape {
    width: number; // 높이
    height: number; // 넓이

    // 생성자 생성
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}
// circle 과 rectanagle을 사용해보자
const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);

// Shape 인터페이스로 이루어진 배열
const shapes: Shape[] = [circle, rectangle];

// shape 안에 있는 모든 모양들의 넓이를 출력하고싶다면.
shapes.forEach((shape) => {
    console.log(shape.getArea());
});

/*
// interface 로 객체 타입 지정해주기
interface Person {
    name: string;
    age?: number; // ? 를 넣어줌으로써 있을수도 없을수도 있다는 것을 명시가 가능하다.
}

const person: Person = {
    name: "홍길동",
    age: 27, // 지워보고 확인해보자

    // 따로 지정하지 않은 값을 넣을 경우
    // skills:['javascript'] 이 경우에는 interface에 없는 것을 구현하려하기때문에 에러를 띄운다.
};

interface Developer {
    name: string;
    age?: number;
    skills: string[];
}

const expert: Developer = {
    name: "리누스",
    skills: ["javascript", "react", "typescript"],
    // 정상적으로 가능하다.
};
*/

// type alias
interface Person {
    name: string;
    age?: number;
}

const person: Person = {
    name: "홍길동",
    age: 27,
};

// Person을 상속받기위해 & 연산자를 넣어줘야한다.
type Developer = Person & {
    skills: string[];
};

const expert: Developer = {
    name: "리누스",
    skills: ["javascript", "react", "typescript"],
};

// type alias 를 사용하게되면 interface 로는 못하는 것을 할 수 있다.
type People = Person[];
const people: People = [person, expert];

// Color를 타입으로 별칭을 만들어주고
type Color = "red" | "orange" | "yellow";
// color 를 만들 경우 Color 의 타입이 지정된다.
const color2: Color = "orange";

// 객체에 대한 타입을 설정할 경우 interface를 써야할지 type alias를 써야할지
// 대부분의 경우 type alias 를 써도 상관없다.
// 만약 어떤 라이브러리를 위한 타입을 설정할 경우 interface 를 사용하는 것을 권장한다.
// 어떤 사용을 하던지 일관성 있게 사용하라.
// 예로 객체애 대한 타입을 interface 를 쓰기로했으면 모든 코드에서 interface 를 사용하는 것.
