let age = parseInt(prompt('how old are you?'));
let gender = prompt('enter your gender');
document.getElementById("comment").innerHTML;

function ageCondition(arg1, arg2) {
    if (age >= 45) {
        document.write("Watch your health and try organics");
    } else if (age >= 25 < 45) {
        document.write("You should definetely try beer");
    }else if (age >= 25 && gender == "female") {
        document.write("You can try beer");   
    } else if (age >= 18 < 25) {
        document.write("Smoothie is recommended for you");
    } else if (age >= 18 && gender == "female") {
        document.write("Pizza is recommended for you");
    } else if (age < 18 ) {
        document.write("Juice is recommended for you");
    }
    
}

ageCondition(age, gender);

