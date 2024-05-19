class Menu{//해당 클래스는 사용자가 접근가능하지 못하게 끔
    constructor(price){
        this.price = price;
    }
}

class coffee extends Menu{
    constructor(coffeeBeanType, ice, shotNum){
        this.coffeeBeanType = coffeeBeanType; //원두 종류
        this.ice = ice; //얼음의 양
        this.shotNum = shotNum; //샷 횟수
    }
}

class americano extends coffee{
    constructor(water){
        this.water = water;
    }
}

class lattee extends coffee{
    constructor(milk, options){
        this.milk = milk;
        this.options = options;
    }
}

class vanillaLatte extends lattee{
    constructor(syrup, whippedCream){
        this.syrup = syrup;
        this.whippedCream = whippedCream;
    }
}

class tea extends Menu{
    constructor(ice, teaLeaf){
        this.ice = ice; 
        this.teaLeaf = teaLeaf;
    }
}

class smoothie extends Menu{
    constructor(ice, milk, fruit){
        this.ice = ice; 
        this.milk = milk; 
        this.fruit = fruit;
    }
}

class juice extends Menu{
    constructor(ice, fruit){
        this.ice = ice; 
        this.fruit = fruit;
    }
}

//주문목록 확인 클래스들
class menu{
    constructor(list, price, num){
        this.list = list;
        this.price = price;
        this.num = num;
    }
}

class handleMenu{
    getMenu(){

    }
    deleteMenu(){

    }
    increaseMenu(){

    }
    decreaseMenu(){

    }
}

