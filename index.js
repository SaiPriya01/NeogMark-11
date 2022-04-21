const dob_input = document.querySelector("#dob-input");
const luckynum = document.querySelector("#lucky-number");
const chckbtn = document.querySelector(".chck-btn");
const message = document.querySelector(".msg");
const emoji = document.querySelector(".emoji");
var sum = 0;
chckbtn.addEventListener('click',function(){
    let dob=dob_input.value;
    dob=dob.replaceAll("-","");
    let sum=0;
    for(i=0;i<=dob.length;i++){
        sum+=Number(dob.charAt(i));
    }
    console.log(sum);
    if(sum%(luckynum.value)==0){
        console.log("Birthday is lucky");
        message.innerText = "Your birthday is lucky."
        emoji.innerText = "🚀"
    }
    else{
        console.log("Your birthday is not lucky")
        message.innerText = "Your birthday is unlucky, cheer up! you can make your luck."
        emoji.innerText = "🙂"
    }

});
