const dob_input = document.querySelector("#dob-input");
const luckynum = document.querySelector("#lucky-number");
const chckbtn = document.querySelector(".chck-btn");
const message = document.querySelector(".msg");
var sum = 0;
chckbtn.addEventListener('click', function() {
    var dob = dob_input.value;
    calculatSum(dob);
    if (sum && dob) {
        checkLuck(sum, luckynum);
    } else {
        message.innerText = "Enter both the fields";
    }
    console.log("Check btn")

});

function calculatSum(dob) {
     dob = dob.replaceAll("-", "");
    
    for (i = 0; i < dob.length; i++) {
        sum += Number(dob.charAt(i));
    }
    console.log(sum);
    return sum;
}

function checkLuck(sum, luckynum) {
    if (sum % luckynum == 0) {
        console.log("Birthday is lucky");
        message.innerText = "Your birthday is lucky"
    } else {
        console.log("Your birthday is not lucky")
        message.innerText = "Your birthday is unlucky, cheer up! you can make your luck"
    }
}