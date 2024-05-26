class coffee {//커피
    constructor(menu, count, ice, shot){
        this.menu =menu;
        this.count = count; //커피 개수
        this.ice = ice; //얼음의 양
        this.shot = shot; //샷 횟수
    }
    static makeCoffee(menu, count, ice, shot){
        switch(menu){
        case 'espresso': return new expresso(count); 
        case 'americano': return new americano(count, ice, shot);
        case 'lattee': return new lattee(count, ice, shot);
        }
    }
}
class expresso extends coffee{
    constructor(count){
        this.count = count;
        this.price = 1000;
    }
}
class americano extends coffee{
    constructor(count, ice, shot){
        this.count = count;
        this.ice = ice;
        this.shot = shot;
        this.price = 1500;
    }
}
class lattee extends coffee{
    constructor(count, ice, shot){
        this.count = count;
        this.ice = ice;
        this.shot = shot;
        this.price = 2500;
    }
}

class tea{ //차
    constructor(teaLeaf, count, ice){
        this.teaLeaf = teaLeaf;
        this.count = count;
        this.ice = ice; 
    }
    static makeTea(teaLeaf, count, ice){
        switch(teaLeaf){
            case 'hibiscus': return new hibiscus(count, ice);
            case 'earlgray': return new earlgray(count, ice);
            case 'iceTea': return new iceTea(count, ice);
        }
    }
}
class hibiscus extends tea{
    constructor(count, ice){
        this.count= count;
        this.ice = ice;   
        this.price = 2500; 
    }
}
class earlgray extends tea{
    constructor(count, ice){
        this.count= count;
        this.ice = ice;
        this.price = 2500; 
    }
}
class iceTea extends tea{
    constructor(count, ice){
        this.count= count;
        this.ice = ice;
        this.price = 1500; 
    }
}

class smoothie{ //스무디
    constructor(fruit, count, ice){
        this.fruit = fruit;
        this.count = count;
        this.ice = ice; 
    }
    static makeSmoothie(){
        switch(fruit){
            case 'blueSmoothie': new blueSmoothie(count);
            case 'straSmoothie': new straSmoothie(count);
            case 'mangoSmoothie': new mangoSmoothie(count);
        }
    }
}
class blueSmoothie extends smoothie{
    constructor(count){
        this.count=count;
        this.price = 3500; 
    }
}
class straSmoothie extends smoothie{
    constructor(count){
        this.count=count;
        this.price = 3500; 
    }
}
class mangoSmoothie extends smoothie{
    constructor(count){
        this.count=count;
        this.price = 3500; 
    }
}

class orderList{
    constructor(totalPrice){
        this.orderList = []; //주문목록, 객체로 저장됨
        this.totalPrice= totalPrice; //계산 금액
    }

    getList(drink){//주문목록 추가 메소드
        orderList.push(drink);
    }

    removeMenu(drink){//목록 제거 메소드
        orderList.splice(drink, 1);
    }

    getPrice(menu, count, ice){//가격을 구하는 메소드, ice시 500원 추가
        this.totalPrice += menu * count;
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
        4. 음료제거\n\
        5. 주문종료");
    }

    static showCoffee(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴는 제외)\n\
        메뉴, 수, 아이스, 샷 추가 횟수를 순서대로 입력\n\
        1. 에스프레소 1000원\n\
        2. 아메리카노 1500원\n\
        3. 라떼 2500원\n\
        4. 목록선택");
    }

    static showTea(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴는 제외)\n\
        메뉴, 수, 아이스, 샷 추가 횟수를 순서대로 입력\n\
        1. 히비스커스 1000원\n\
        2. 얼그레이 1500원\n\
        3. 아이스티 2500원\n\
        4. 목록선택");
    }
    static showSmoothie(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴는 제외)\n\
        메뉴, 수, 아이스, 샷 추가 횟수를 순서대로 입력\n\
        1. 블루베리 스무디 1000원\n\
        2. 딸기 스무디 1500원\n\
        3. 망고 스무디 2500원\n\
        4. 목록선택");
    }
    static showOrderList(list){
        console.log('주문목록');
        list.forEach((order) => {
            console.log(`${order.menu}: ${order.count}개`);
        });
    }
}

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
