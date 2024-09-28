let calci = document.querySelector(".calci");
let result_screen = document.querySelector(".result_screen");
let input_screen = document.querySelector(".input_screen");
let buttons = document.querySelectorAll(".buttons_grid > :not(:last-child)");
let dark_light_switch = document.querySelector(".dark_light_switch");
let circle = document.querySelector(".circle");

dark_light_switch.addEventListener("click" , change_mode);
circle.addEventListener("click" , change_mode);

function change_mode(){
    if(circle.classList.contains("light")){
        circle.classList.remove("light");
        circle.classList.add("dark");
        dark_light_switch.classList.remove("light_mode");
        dark_light_switch.classList.add("dark_mode");
        calci.classList.remove("calci_light");
        result_screen.classList.remove("result_screen_light");
        buttons.forEach((button)=>{
            button.classList.remove("buttons_light");
        });
    }
    else{
        circle.classList.remove("dark");
        circle.classList.add("light");
        dark_light_switch.classList.remove("dark_mode");
        dark_light_switch.classList.add("light_mode");
        calci.classList.add("calci_light");
        result_screen.classList.add("result_screen_light");
        buttons.forEach((button)=>{
            button.classList.add("buttons_light");
        });
    }
}