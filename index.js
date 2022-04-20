const dob = document.querySelector("#dob-input");
const luckynum = document.querySelector("#lucky-number");
const chckdobbtn = document.querySelector(".chck-btn");
const message = document.querySelector(".msg");
chckdobbtn.addEventListener('click', function() {
    const dob = dob.value;
    calculatSum(dob);
    if (sum && dob) {
        checkLuck(sum, luckynum);
    } else {
        message.innerText = "Enter both the fields";
    }

});

function calculatSum(dob) {
    const bDate = dob.replaceAll("-", "");
    let sum = 0;
    for (i = 0; i < bDate.length; i++) {
        sum += Number(bDate.charAt(i));
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