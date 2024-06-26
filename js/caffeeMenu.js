class coffee {//커피
    constructor(menu, num, ice, shot){
        this.menu =menu;
        this.num = num; //커피 개수
        this.ice = ice; //얼음의 양
        this.shot = shot; //샷 횟수
    }
    static makeCoffee(menu, num, ice, shot){
        switch(menu){
        case 'espresso': return new expresso(num); 
        case 'americano': return new americano(num, ice, shot);
        case 'lattee': return new lattee(num, ice, shot);
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
            case 'hibiscus': return new hibiscus(num, ice);
            case 'earlgray': return new earlgray(num, ice);
            case 'iceTea': return new iceTea(num, ice);
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
            case 'blueSmoothie': new blueSmoothie(num);
            case 'straSmoothie': new straSmoothie(num);
            case 'mangoSmoothie': new mangoSmoothie(num);
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

class orderList{
    constructor(price){
        this.orderList = []; //주문목록, 객체로 저장됨
        this.totalPrice= totalPrice; //계산 금액
    }

    getList(menu){//주문목록 추가 메소드
        orderList.push = menu;
    }

    removeMenu(){//목록 제거 메소드

    }

    getPrice(menu, num, ice){//가격을 구하는 메소드, ice시 500원 추가
        this.totalPrice += menu * num;
        if(ice>=1) totalPrice+=500;
    }
}

class showMenu{ //주문목록 확인 클래스
    constructor(price){
        this.price =price;
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
        list.forEach((order) => {
            console.log(`${order.menu}: ${order.num}개`);
        });
    }
}

/*클래스만 => main: 메뉴에 대한 클래스, 주문목록 클래스(메뉴추가, 제거, 계산 가격 측정)
            sub: 목록 출력, 메뉴 이름이 나와야 함 
            문제: 객체를 어떻게 생성해야 함? */

const readline = require('readline'); //콘솔창에서 입출력을 받기위한 코드, 모듈 import
const rl = readline.createInterface({ //입출력을 위한 인터페이스 객체
    input: process.stdin,
    output: process.stdout,
});

//main 실행문
const CATEGORY = 4;
const readline = require('readline'); //콘솔창에서 입출력을 받기위한 코드, 모듈 import
const rl = readline.createInterface({ //입출력을 위한 인터페이스 객체
  input: process.stdin,
  output: process.stdout,
});
const cart = new orderList(); //주문목록
let line =0;
showMenu.showCategory();
rl.on('line', (line)=>{
    showMenu.showCategory();
    console.log(line);
    switch(line){
        case 1: {
            showMenu.showCoffee();
            rl.on('line', (input)=>{
                while(input[0]!=CATEGORY){
                    let menu = input.split(' ').map((element)=> parseInt(element))
                    showMenu.showOrderList();
                    const coffee = coffee.makeCoffee(menu[0], menu[1], menu[2], menu[3]);
                    cart.getList(coffee);
                }
            })
            break;
        }
        case 2: {
            showMenu.showTea();
            rl.on('line', (input)=>{
                while(input[0]!=CATEGORY){
                    let menu = input.split(' ').map((element)=> parseInt(element))
                    showMenu.showOrderList();
                    const tea = tea.makeTea(menu[0], menu[1], menu[2], menu[3]);
                    cart.getList(tea);
                }
            })
            break;
        }
        case 3: {
            showMenu.showSmoothie();
            rl.on('line', (input)=>{
                while(input[0]!=CATEGORY){
                    let menu = input.split(' ').map((element)=> parseInt(element))
                    showMenu.showOrderList();
                    const smoothie = smoothie.makeSmoothie(menu[0], menu[1], menu[2], menu[3]);
                    cart.getList(smoothie);
                }
            })
            break;
        }
        case 4: {
            rl.on('line', (drink) => {
            cart.removeMenu(drink);
            rl.close();
            });
            break;
        }
        case 5: rl.close();
        
        default: console.log("오류발생");
    }
    }
)   
    
console.log("주문완료!");
