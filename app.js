const firstname = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const uID = document.getElementById('UserID')
const email = document.getElementById("Email");
const country = document.getElementById("Countries");
const phone = document.getElementById("PhoneNumber");
const RefCode = document.getElementById('RefCode');
const State = document.getElementById('States');
const Cities = document.getElementById('Cities');

const btnreset = document.getElementById('reset');
const Submit = document.getElementById('Continue');

const fnIcon = document.getElementById('fnCheck');
const form = document.getElementById('Login');
const lnIcon = document.getElementById('lnCheck');
const emIcon = document.getElementById('emCheck');
const pnIcon = document.getElementById('pnCheck');
const uIdIcon = document.getElementById('fdLock');

const AllChecks = document.querySelectorAll('.fa.fa-check');


console.log('hi');

btnreset.addEventListener('click', function() {
  firstname.setCustomValidity('');
  lastName.setCustomValidity('');
  email.setCustomValidity('');
  phone.setCustomValidity('');
  country.setCustomValidity('');
  uID.setCustomValidity('');
  RefCode.setCustomValidity('');
  State.setCustomValidity('');
  Cities.setCustomValidity('');
  
  for (let i = 0; i < AllChecks.length; i++) {
    AllChecks[i].style.visibility = 'hidden';
  }
  uIdIcon.style.visibility = 'hidden';
 firstname.focus();
})


function fnValidity()
{
  const name = document.getElementById("FirstName");
  const letters = /^[a-zA-Z]+$/;
  const hasNumber = /\d/;
  let fName = name.value ;
 
if (fName=='') 
{
alert('Cannot be left blank')
firstname.setCustomValidity("This field cannot be left blank");
fnIcon.style.visibility = 'hidden';
return false;
}
else
{  
 if (!letters.test(fName)) 
 {
  alert("First Name can only contain letters");
  firstname.setCustomValidity("First Name can only contain letters");
  fnIcon.style.visibility = 'hidden';
  return false;
       
 }
 else
 {
   firstname.setCustomValidity("");
   fnIcon.style.visibility = 'visible';
  return true; 
 }
 
 
}
}


firstname.addEventListener('focusout', function()
{
  fnValidity();
});

function lnValidity()
{

    const letters = /^[a-zA-Z]+$/;
    const hasNumber = /\d/;
    let fLastName = document.getElementById("LastName").value ;
   
    if (fLastName=='') 
{
alert("Last Name cannot be blank")
lastName.setCustomValidity('Last name cannot be blank');
lnIcon.style.visibility='hidden';
return false;
}
else
{
   if (!letters.test(fLastName)) 
   {
    alert("Last Name can only contain letters");
    lastName.setCustomValidity('Last Name can only contain letters');
    lnIcon.style.visibility='hidden';
    return false;
        
   }
   lastName.setCustomValidity('');
   lnIcon.style.visibility='visible';
   return true;  
}
};

lastName.addEventListener('focusout', function()
{
lnValidity();
});

// function CheckCode()
// {
//     const hasNumber = /\d/;
//     const code = document.getElementById("RefCode");
//     let EnteredCode = code.value;
//     if (hasNumber.test(EnteredCode)) 
//     {
//      alert("Reference code cannot contain a number");
//      return false;    
//     }
//     return true;
// };

function emValidity() 
{  
var x=email.value; 

console.log(x);
if (x=='') 
{
alert("Email required");
email.style.borderBottom = '2px solid rgb(233, 14, 14,0.5)';
emIcon.style.visibility='hidden';
return false;
} 
else
{
  email.style.borderBottom = '2px solid rgba(190, 188, 188,.3)'
} 
 };

email.addEventListener('focusout',function()
{  
 emValidity();
 });
// else
// if (atPosition==-1) 
// {
// alert(`Email requires an @ symbol`);
// return false;  
// }
// else
// if (dotPosition==-1) 
// {
// alert(`Email requires a '.'`);
// return false;
// }
// else
// if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=x.length)
// {  
//   console.log("works");
//   console.log(false);
//   alert("Please enter a valid e-mail address");  
//   return false;  

// }  
// };

function pValidity()
{
  let Tel = phone.value;
  let letter = /[a-zA-Z]/;  

  if (Tel=='') 
  {
    alert("Phone Number is required");
    phone.setCustomValidity('Phone number is required');
    pnIcon.style.visibility='hidden';
    return false;
  }
  
  else
  if (letter.test(Tel)) 
  {
    alert("Phone Number cannot contain letters");
    phone.setCustomValidity('Phone number cannot contain letters');
    pnIcon.style.visibility='hidden';
    return false;
  }
  else
  {
    phone.setCustomValidity('');
    pnIcon.style.visibility='visible';
    return true;
  } 
};

phone.addEventListener('focusout',function()
{
  pValidity();
});

function cunValidity() {
 
  if (country.value=='Default') 
  {
   country.setCustomValidity('Cannot be default');
   return false;  
  }
  else
  {
    country.setCustomValidity('');
    return true;
  }
};

country.addEventListener('focusout',function() {
 
  cunValidity();
}
);

 
Submit.addEventListener('click',(e)=> {
if (fnValidity()===false || lnValidity()===false || emValidity()===false || cunValidity()===false || pValidity()===false )
{
e.preventDefault();
}


});



form.addEventListener('submit', function()
{
  form.style.visibility='hidden';
 
}

);


