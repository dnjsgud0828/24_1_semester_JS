class coffee{//커피
    constructor(menu, num, ice, shot){
        this.menu =menu;
        this.num = num; //커피 개수
        this.ice = ice; //얼음의 양
        this.shot = shot; //샷 횟수
    }
    static makeCoffee(menu, num, ice, shot){
        switch(menu){
        case 1: return new expresso(num); 
        case 2: return new americano(num, ice, shot);
        case 3: return new lattee(num, ice, shot);
        }
    }
}
class expresso extends coffee{
    constructor(num){
        this.num = num;
        this.price = 1000;
    }
}
class americano extends coffee{
    constructor(num, ice, shot){
        this.num = num;
        this.ice = ice;
        this.shot = shot;
        this.price = 1500;
    }
}
class lattee extends coffee{
    constructor(num, ice, shot){
        this.num = num;
        this.ice = ice;
        this.shot = shot;
        this.price = 2500;
    }
}

class tea{ //차
    constructor(teaLeaf, num, ice, price){
        this.teaLeaf = teaLeaf;
        this.num = num;
        this.ice = ice; 
        this.price = price;
    }
    static makeTea(teaLeaf, num, ice){
        switch(teaLeaf){
            case 1: return new hibiscus(num, ice);
            case 2: return new earlgray(num, ice);
            case 3: return new iceTea(num, ice);
        }
    }
}
class hibiscus extends tea{
    constructor(num, ice){
        this.num= num;
        this.ice = ice;   
        this.price = 2500; 
    }
}
class earlgray extends tea{
    constructor(num, ice){
        this.num= num;
        this.ice = ice;
        this.price = 2500; 
    }
}
class iceTea extends tea{
    constructor(num, ice){
        this.num= num;
        this.ice = ice;
        this.price = 1500; 
    }
}

class smoothie{ //스무디
    constructor(fruit, num, ice, price){
        this.fruit = fruit;
        this.num = num;
        this.ice = ice; 
        this.price = price; 
    }
    static makeSmoothie(){
        switch(fruit){
            case 1: new blueSmoothie(num);
            case 2: new straSmoothie(num);
            case 3: new mangoSmoothie(num);
        }
    }
}
class blueSmoothie extends smoothie{
    constructor(num){
        this.num=num;
        this.price = 3500; 
    }
}
class straSmoothie extends smoothie{
    constructor(num){
        this.num=num;
        this.price = 3500; 
    }
}
class mangoSmoothie extends smoothie{
    constructor(num){
        this.num=num;
        this.price = 3500; 
    }
}

class menu{ //주문목록 확인 클래스
    constructor(){
        //this.price;
        //this.num;
    }

    static showCategory(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴는 제외)\n\
        1. 커피\n\
        2. 차\n\
        3. 스무디\n\
        4. 취소");
    }

    static showCoffee(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴는 제외)\n\
        1. 에스프레소 1000원\n\
        2. 아메리카노 1500원\n\
        3. 라떼 2500원\n\
        4. 주문종료");
    }

    static showTea(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴는 제외)\n\
        1. 히비스커스 1000원\n\
        2. 얼그레이 1500원\n\
        3. 아이스티 2500원\n\
        4. 주문종료");
    }
    static showSmoothie(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴는 제외)\n\
        1. 블루베리 스무디 1000원\n\
        2. 딸기 스무디 1500원\n\
        3. 망고 스무디 2500원\n\
        4. 주문종료");
    }
    static showOrderList(list){
        console.log(`주문목록`);
        list.forEach((menu, num) => {
            console.log(`${menu}: ${num}개`);
        });
    }
}
function getPrice(menu, num, ice){ //가격을 구하는 함수, ice시 500원 추가
    let price = menu * num;
    if(ice>=1) price+=500;
    return price;
}

//main 실행문
const readline = require('readline'); //콘솔창에서 입출력을 받기위한 코드, 모듈 import
const rl = readline.createInterface({ //입출력을 위한 인터페이스 객체
  input: process.stdin,
  output: process.stdout,
});
let orderList=[]; //주문목록

rl.on('line', (line) => { //목록 선택
    console.log("메뉴를 선택해 주세요");
    menu.showCategory();
    let input = line;
    rl.close()
});

rl.on('close', (line) => {
    switch(line){
        case 1: menu.showCoffee();
        case 2: menu.showTea();
        case 3: menu.showSmoothie();
        default : console.log("주문을 종료합니다.");
    }
});

rl.on('line', (line) => {
    console.log("주문은 어떻게 하시겠습니까?");
    console.log("(음료와 수량, 얼음, 샷추가 횟수를 각각 띄어쓰기로 입력)");
    let list = line.split(' ').map((el) => parseInt(el));

    if(Math.floor(list[0])<1 || Math.floor(list[0])>10){ //주문이 올바르지 않을때
        console.log("올바른 메뉴를 입력해 주세요");
    }
    else{
        while(list[0]!=4){
            orderList.push(list[0], list[1]);
        }
        rl.close();
    } 
})

rl.on("close", function(){
    let menu = list[0];
    let num = list[1];
    let ice = list[2];
    let shot = list[3];

    if(list[0]>=1&&list[0]<=3){
        const coffee = coffee.makeCoffee(menu, num, ice, shot);
        getPrice(coffee.price, coffee.num, coffee.ice);
    }
    else if(list[0]>=4&&list[0]<=6){
        const tea = tea.makeTea(menu, num, ice);
        getPrice(tea.price, tea.num, tea.ice);
    }
    else{
        const smoothie = smoothie.makeSmoothie(menu, num, ice);
        getPrice(smoothie.price, smoothie.num, smoothie.ice);
    }
})
console.log("주문완료!");
menu.showOrderList();//주문목록 출력
// 주문하신 금액은  ~입니다. 출력후 종료
/* 메뉴(아이스 변경 시 500원 추가/아이스메뉴 제외)*/