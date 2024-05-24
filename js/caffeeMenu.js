// class coffee{
//     constructor(menu, ice, shot){
//         this.menu =menu;
//         this.ice = ice; //얼음의 양
//         this.shot = shot; //샷 횟수
//         this.price = price; //가격
//         this.num = num;
//     }
//     getCoffee(menu, ice, shot, num){
//         switch(menu){
//         case 1: return new expresso(num); 
//         case 2: return new americano(ice, shot, num);
//         case 3: return new lattee(ice, shot, num);
//         }
//     }
// }
// class expresso extends coffee{

// }
// class americano extends coffee{
//     constructor(water){
//         this.water = water;
//     }
// }

// class lattee extends coffee{
//     constructor(milk, options){
//         this.milk = milk;
//         this.options = options;
//     }
// }
// class tea{
//     constructor(ice, teaLeaf){
//         this.ice = ice; 
//         this.teaLeaf = teaLeaf;
//     }
// }

// class smoothie{
//     constructor(ice, milk, fruit){
//         this.ice = ice; 
//         this.milk = milk; 
//         this.fruit = fruit;
//     }
// }

// class juice{
//     constructor(ice, fruit){
//         this.ice = ice; 
//         this.fruit = fruit;
//     }
// }

// class price{
//     constructor(){
//         this.espresso= 1000;
//         this.americano = 1500;
//         this.latee = 2500;
//         this.hibiscus = 2500;
//         this.earlgray = 2500;
//         this.iceTea = 1500;
//         this.blueSmoothie = 3500;
//         this.straSmoothie = 3500;
//         this.mangoSmoothie = 3500;
//     }
//     getPrice(menu, num){
        
//     }
// }
// //목록에 메뉴와 수량을 담고, getPrice에 전달하면 총 가격을 산출하게끔...

// //주문목록 확인 클래스들
// class menu{
//     constructor(list, price, num){
//         this.list = list;
//         this.price = price;
//         this.num = num;
//     }
// }

// class print{
//     static showMenu(){
//         console.log("메뉴(아이스 변경 시 500원 추가/아이스메뉴 제외)\n\
//         1. 에스프레소 1000원\n\
//         2. 아메리카노 1500원\n\
//         3. 라떼 2500원\n\
//         4. 히비스커스 2500원\n\
//         5. 얼그레이 2500원\n\
//         6. 아이스티 1500원\n\
//         7. 블루베리 스무디 3500원\n\
//         8. 딸기 스무디 3500원\n\
//         9. 망고 스무디 3500원\n\
//         10. 주문종료");
//     }
//     static showOrderList(){

//     }
// }
// let orderList = [];
// let menu;
// while(1){
//     if(Math.floor(menu)==10){
//         let a;
//         console.log("다음과 같이 주문하시겠습니까?"); // 주문한 목록을 보여줌 예 선택시 주문완료! 출력, 아니오 선택시 다시 주문화면으로
//         print.showOrderList();
//         if(a==1){break;}
//     }
//     console.log("주문은 어떻게 하시겠습니까?"); // 음료와 해당하는 개수와 옵션을 받음, 종료까지 반복
//     print.showMenu();
//     if(menu<1 ||menu>10){
//         console.log("올바른 메뉴를 입력해 주세요");
//         continue;
//     }
// }
while(1){
    let a=0;
    if(a==0){
        break;
    }
    console.log("반복문 수행중");
}

// // 주문하신 금액은  ~입니다. 출력후 종료
// /* 메뉴(아이스 변경 시 500원 추가/아이스메뉴 제외)
// 에스프레소 1000원
// 아메리카노 1500원
// 라떼 2500원
// 히비스커스 2500원
// 얼그레이 2500원
// 아이스티 1500원
// 블루베리 스무디 3500원
// 딸기 스무디 3500원
// 망고 스무디 3500원
// 주문종료*/