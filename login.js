let userDetail=localStorage.getItem('userData')||null;
// login btn
let loginBtn=document.getElementById('loginBtn');
loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('loginWrapper').style.opacity=1;
    document.getElementById('loginWrapper').style.zIndex=2;
})

let closBtn =document.getElementById('closeBtn');
closBtn.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('loginWrapper').style.opacity=0;
    document.getElementById('loginWrapper').style.zIndex=-1;
    document.getElementById('formWrapper').style.display='block';
    document.getElementById('verifyPage').style.display='none';
    document.getElementById('registerPage').style.display='none';
})


// slide Images

const slides = document.querySelectorAll(".slide");

var counter = 0;

slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})

const slideImage =()=>{
    counter++;
    if(counter>2){
        counter=0;
    }
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`;
    })
}
setInterval(slideImage,5000);


// mobile no. input
let MobileNo=JSON.parse(localStorage.getItem('moNo'))||[];

let mobileNo;
let xOtp;

// get Otp Button 

let getOtp=document.getElementById('loginForm');
getOtp.addEventListener('submit',function(e){
    e.preventDefault()
    mobileNo=document.getElementById('mobile').value;
    xOtp = Math.floor(Math.random()*10000);
    alert(`your OTP is ${xOtp}`);
    document.getElementById('formWrapper').style.display='none';
    document.getElementById('verifyPage').style.display='block';
    document.getElementById('varifyMob').innerText=mobileNo;
})

// edit Mob No.
let editMob=document.getElementById('editMob');
editMob.addEventListener('click',function(){
     document.getElementById('formWrapper').style.display='block';
    document.getElementById('verifyPage').style.display='none';
})

// otp submit Button 

let contBtn=document.getElementById('contBtn');
contBtn.addEventListener('click',function(){
    let inpOtp=document.getElementById('otp');
    if(inpOtp.value==xOtp){
        alert('Mobile Number verified');
        document.getElementById('verifyPage').style.display='none';
    document.getElementById('registerPage').style.display='block';
    }else{
        alert('Please enter Right OTP');
    }
})

// regiser Button

let regBtn = document.getElementById('regBtn');
regBtn.addEventListener('click',function(){
    let username=document.getElementById('name');
    let email=document.getElementById('email');
    let gender=document.getElementById('gender');
    
    let userObj={
        username:username.value,
        email:email.value,
        gender:gender.value,
        mobile:mobileNo,
    }
    localStorage.setItem('userData',JSON.stringify(userObj));
})
