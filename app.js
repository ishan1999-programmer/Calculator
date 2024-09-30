let calci = document.querySelector(".calci");
let result_screen = document.querySelector(".result_screen");
let input_screen = document.querySelector(".input_screen");
let buttons = document.querySelectorAll(".buttons_grid > *");
let equals = document.querySelector("button[data-operator=equals]");
let dark_light_switch = document.querySelector(".dark_light_switch");
let circle = document.querySelector(".circle");

buttons.forEach((button)=>{
    button.addEventListener("click" , action);
    button.addEventListener("mousedown" , ()=>{
        button.classList.add("press");
    });
    button.addEventListener("mouseup" , ()=>{
        button.classList.remove("press");
    });
});

let result = "";
function action(e){
    if(e.target.dataset.operator=="all_clear"){
        input_screen.innerText = "";
        result_screen.innerText = "";
        result = "";
    }
    else if(e.currentTarget.dataset.operator=="backspace"){
        input_screen.innerText = input_screen.innerText.substring(0,input_screen.innerText.length-1);
        result = result.substring(0,result.length-1);
    }
    else if(e.target.dataset.operator=="equals"){
        let final_result = eval(result);
        if(Number.isInteger(final_result)){
            result_screen.innerText = String(final_result);
        }
        else{
            result_screen.innerText = String(parseFloat(String(final_result.toFixed(3))));
        }
    }
    else if(e.target.dataset.operator=="square_root"){
        console.log("hiii");
    }
    else{
        if(e.target.dataset.operator=="divide"){
            if(result_screen.innerText == ""){
                input_screen.innerText += e.target.innerText;
                result += '/';
            }
            else{
                input_screen.innerText = result_screen.innerText + e.target.innerText;
                result = result_screen.innerText + '/';
                result_screen.innerText = "";
            }
        }
        else if(e.target.dataset.operator=="multiply"){
            if(result_screen.innerText == ""){
                input_screen.innerText += e.target.innerText;
                result += '*';
            }
            else{
                input_screen.innerText = result_screen.innerText + e.target.innerText;
                result = result_screen.innerText + '*';
                result_screen.innerText = "";
            }
        }
        else if(e.target.dataset.operator=="plus"){
            if(result_screen.innerText == ""){
                input_screen.innerText += e.target.innerText;
                result += '+';
            }
            else{
                input_screen.innerText = result_screen.innerText + e.target.innerText;
                result = result_screen.innerText + '+';
                result_screen.innerText = "";
            }
        }
         else if(e.target.dataset.operator=="minus"){
            if(result_screen.innerText == ""){
                input_screen.innerText += e.target.innerText;
                result += '-';
            }
            else{
                input_screen.innerText = result_screen.innerText + e.target.innerText;
                result = result_screen.innerText + '-';
                result_screen.innerText = "";
            }
        }
        else{
            input_screen.innerText += e.target.innerText;
            result += e.target.innerText;
        }
    }
}

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