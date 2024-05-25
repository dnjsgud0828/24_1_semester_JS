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
    static showOrderList(){
        console.log(`주문목록${this.list}`);
    }
}
function getPrice(menu, num, ice){ //가격을 구하는 함수, ice시 500원 추가
    let price = menu * num;
    if(ice>=1) price+=500;
    return price;
}
function getMenu(category){
    rl.on("close", function(){
        let menu = orderList[0];
        let num = orderList[1];
        let ice = orderList[2];
        let shot = orderList[3]

        if(A>=1&&A<=3){
            const coffee = coffee.makeCoffee(menu, num, ice, shot);
            getPrice(coffee.price, coffee.num, coffee.ice);
        }
        else if(A>=4&&A<=6){
            const tea = tea.makeTea(menu, num, ice);
            getPrice(tea.price, tea.num, tea.ice);
        }
        else{
            const smoothie = smoothie.makeSmoothie(menu, num, ice);
            getPrice(smoothie.price, smoothie.num, smoothie.ice);
        }
        console.log("주문완료!");
        menu.showOrderList();//주문목록 출력
    })
}
//순서때문, 1. 목록선택, 2. 메뉴선택, 3. 해당 메뉴 생성 4. 가격계산
// 새로 클래스 생산?
//함수: 목록/주문목록을 보여주는 메소드, 가격을 구하는 함수, 주문을 받는 함수, 
//커피를 만들고 값을 계산하는 함수
//주문을 다루는 클래스: 주문목록 출력 메소드, 주문을 받는 함수, 