const coffeeForm = document.querySelector("#coffee") ;

class handleMenu{
    getMenu(){
        let check = confirm("해당 메뉴를 담겠습니까?");
        if(check ==true){

        }
        else{

        }
    }
    deleteMenu(){

    }
    increaseMenu(){

    }
    decreaseMenu(){

    }
}

//각 메뉴들이 웹페이지에 띄어져야함
function popMenu(){

}

const userMenu = localStorage.getItem();

coffeeForm.addEventListener("click", getMenu);
