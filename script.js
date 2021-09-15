const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber= document.querySelector("#lucky-number");
const checkNumberButton= document.querySelector("#check-button");

function compareValues(sum,luckyNumber)
{
     if (sum % luckyNumber === 0) 
     {
         outputBox.innerText = "Yippie !Your birthday is lucky! 😁";
     }else{
            outputBox.innerText = "Sorry! Your birthday isn't lucky,😟";
          } 
}


function checkBirthdayIsLucky(){
    const dob= dateOfBirth.value;
    const sum= calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value)
    else 
    outputBox.innerText="please enter both the fields"
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index =0; index < dob.length ; index++)
    {
        sum =sum+ Number(dob.charAt(index));
    }
    return sum;
}


checkNumberButton.addEventListener("click", checkBirthdayIsLucky)