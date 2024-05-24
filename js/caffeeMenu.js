class coffee{
    constructor(menu, ice, shot, price){
        this.menu =menu;
        this.num = num; //커피 개수
        this.ice = ice; //얼음의 양
        this.shot = shot; //샷 횟수
        this.price = price; //가격   
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
class tea{
    constructor(ice, teaLeaf){
        this.ice = ice; 
        this.teaLeaf = teaLeaf;
    }
}

class smoothie{
    constructor(ice, milk, fruit){
        this.ice = ice; 
        this.milk = milk; 
        this.fruit = fruit;
    }
}

class juice{
    constructor(ice, fruit){
        this.ice = ice; 
        this.fruit = fruit;
    }
}

class price{
    constructor(){
        this.espresso= 1000;
        this.americano = 1500;
        this.latee = 2500;
        this.hibiscus = 2500;
        this.earlgray = 2500;
        this.iceTea = 1500;
        this.blueSmoothie = 3500;
        this.straSmoothie = 3500;
        this.mangoSmoothie = 3500;
    }
    static getPrice(menu, num){
        
    }
}
//목록에 메뉴와 수량을 담고, getPrice에 전달하면 총 가격을 산출하게끔...

//주문목록 확인 클래스
class menu{
    constructor(list){
        this.list = [];
        //this.price;
        //this.num;
    }
    static showMenu(){
        console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴 제외)\n\
        1. 에스프레소 1000원\n\
        2. 아메리카노 1500원\n\
        3. 라떼 2500원\n\
        4. 히비스커스 2500원\n\
        5. 얼그레이 2500원\n\
        6. 아이스티 1500원\n\
        7. 블루베리 스무디 3500원\n\
        8. 딸기 스무디 3500원\n\
        9. 망고 스무디 3500원\n\
        10. 주문종료");
    }
    static showOrderList(){

    }
}

//main 실행문
//콘솔창에서 입출력을 받기위한 코드, 모듈 import
const readline = require('readline');

//입출력을 위한 인터페이스 객체
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

menu.showMenu();
rl.on('line', (line) => {
    console.log("주문은 어떻게 하시겠습니까?");
    console.log("(음료와 수량, 얼음, 샷추가 횟수를 각각 띄어쓰기로 입력)");
    let orderList = line.split(' ').map((el) => parseInt(el));

    //주문이 올바르지 않을때
    if(Math.floor(orderList[0])<1 || Math.floor(orderList[0])>10){
        console.log("올바른 메뉴를 입력해 주세요");
    }
    else{
        rl.close();
    }
})

rl.on("close", function(){
    let A = orderList[0];
    let B = orderList[1];
    if(A>=1&&A<=3){
        coffee.makeCoffee(orderList[0], orderList[1], orderList[2], orderList[3]);

    }
    else if(A>=4&&A<=6){

    }
    else{

    }
})

// 주문하신 금액은  ~입니다. 출력후 종료
/* 메뉴(아이스 변경 시 500원 추가/아이스메뉴 제외)
에스프레소 1000원
아메리카노 1500원
라떼 2500원
히비스커스 2500원
얼그레이 2500원
아이스티 1500원
블루베리 스무디 3500원
딸기 스무디 3500원
망고 스무디 3500원
주문종료*/