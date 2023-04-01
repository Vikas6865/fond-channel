
let upiInp = document.getElementById("UPI")

let paymentMethod = document.getElementById("payment-method-card")

let cashOnDel=document.getElementById("cashOn")


// cash on delivery part start here

cashOnDel.addEventListener("click",(()=>{

    let cashAppend=``

    cashAppend+=`<div class="cashpage">

    <div class="cashing">
        <img src="./payment-img/cashOn.svg" alt="">
      </div>
      <div class="cashpara">
        <h3>CASH ON DELIVERY</h3>
    
        <P>You will not earn any HK Cash through COD Pay Online and earn ₹132 HK Cash</P>
      </div>
</div>

<div class="sureAdd">
    <h3>Sure about the address?</h3>
    <input type="checkbox" name="sureity" id="confirm-check"><span>Check the box here to confirm & complete your purchase through Cash On Delivery option</span>
</div>

<div class="confirm-order">
    <button id="confirm-cash-order">Confirm Order</button>
</div>`

paymentMethod.innerHTML=cashAppend

let confirmCashBut=document.getElementById("confirm-cash-order")


let confirmCheck=document.getElementById("confirm-check")

confirmCheck.addEventListener("click",(()=>{
    if(confirmCheck.checked){
        confirmCashBut.style.background="rgb(0,181,183)"
        confirmCashBut.style.color="white"
        confirmCashBut.style.border="1 px solid white"
    }
}))



}))


upiInp.addEventListener("click",(()=>{

    let inputel=document.createElement("input")

    inputel.setAttribute("type","text")
    inputel.setAttribute("id","pymt")

}))


//Upi addeventlisnter start here
upiInp.addEventListener("click", (() => {
 
    let upiappend = ``;
    upiappend += `<div>
    <h2>Add a new UPI</h2>
    <p>You need to have a registered UPI ID</p>
    </div>
    <div class="input-upi-id">
    <form name="myForm" class="enterUpi">
        <input value="" type="text" name="myName" placeholder="Enter UPI ID"  id="#enterUpi">
    </form>
    <button id="verify">Verify</button>
   
 </div>
 <div class="check-box">
    <input type="checkbox" name="" id=""><span>
        Securely saved for faster payments
    </span>
 </div>

 <div id="kyc">
    <div class="kyc-code">
        <button id="okbsi">@oksbi</button>
    </div>
    <div class="kyc-code">
        <button id="okhdfc">@okhdfc</button>
    </div>
    <div class="kyc-code">
        <button id="okicici">@okicici</button>
    </div>
    <div class="kyc-code">
        <button id="okaxis">@okaxis</button>
    </div>

 </div>

 <div id="securely-payment">
 <a href="" id="securely-pay">Securely Pay</a>

 </div>`

    paymentMethod.innerHTML = upiappend

    let okhdfcBut = document.getElementById("okhdfc")
    let okiciciBut = document.getElementById("okicici")
    let okaxisBut = document.getElementById("okaxis")
    //  let oksbiBut=document.getElementById("oksbi")

    let formel = document.querySelector("form")
    let enterUpi = document.getElementById("enterUpi")


    let verifyButton = document.getElementById("verify")

    let securelyPayEl = document.getElementById("securely-pay")
    let securelyPaymentDiv = document.getElementById("securely-payment")


    okhdfcBut.addEventListener("click", (() => {

        // enterUpi=document.getElementById("enterUpi").value+`${okhdfcBut.textContent}`

        console.log(okhdfcBut.innerText)

    }))

    verifyButton.addEventListener("click", (() => {


        securelyPayEl.style.color = "#FF0000";

        securelyPaymentDiv.style.backgroundColor = "yellow"

    }))


}))

// upi addeventlistner end here




let debitInp = document.getElementById("Debit-Card")

debitInp.addEventListener("click", (() => {

    let debitAppend = ``

    debitAppend += ` <div class="debit-card">

    <div>
        <h2>Add a new card</h2>
    </div>
    <div class="enterName-card">
        <input type="text" name="" id="input-debit-card" placeholder="Please enter name on card">
    </div>
    <div id="debit-card-num">
        <input type="text" name="cardno" id="cardno" placeholder="4352XXXXXXXX2235"maxlength="19" onkeypress="cardspace()"/>
    </div>
     <div class="debitcard-info">
    <select name="" id="expiry-month">
        <option value="">Expiry MM</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>
    <select name="" id="expiry-year">

        <option value="">Expiry YY</option>
        <option value="2023">2023</option>
        <option value="">2024</option>
        <option value="">2025</option>
        <option value="">2026</option>
        <option value="">2027</option>
        <option value="">2028</option>
        <option value="">2029</option>
        <option value="">2030</option>
        <option value="">2031</option>
        <option value="">2032</option>
        <option value="">2033</option>
        <option value="">2034</option>
        <option value="">2035</option>
        <option value="">2036</option>
        <option value="">2037</option>
        <option value="">2038</option>
        <option value="">2039</option>
        <option value="">2040</option>
    </select>
    <div class="cvv">
        <button class="cvv-num">CVV</button>
    </div>

    </div>
    <div class="check-box">
        <input type="checkbox" name="" id=""><span>
            Save your card as per the RBI guidelines. You can delete it later if you change your mind.
        </span>
     </div>
     <div id="securely-payment">
        <a href="">Securely Pay</a>
       
        </div>
 </div>
`
    paymentMethod.innerHTML = debitAppend


}))


