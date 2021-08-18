function updateQuantity(id, isAdd){
    const quantityField = document.getElementById(id+'-quantity');
    let quantityText = quantityField.value;
    const quantityNumber = parseInt(quantityText);
    if(isAdd == true){
        quantityText = quantityNumber + 1;
    }
    else{
        if(quantityNumber >0){
            quantityText = quantityNumber - 1;
        }
        else{
            alert("Quantity cannot be negative")
        }
    }
    quantityField.value = quantityText;
    const productPrice = document.getElementById(id+'-price');
    if(id == 'phone'){
        const totalPrice = 1219 * quantityText;
        productPrice.innerText = totalPrice;
    }
    else{
        const totalPrice = 59 * quantityText;
        productPrice.innerText = totalPrice;
    }
}

// function totalPrice(id, quantity, isPhone){
    
//     const quantityNumber = parseInt(quantity);
//     if(isPhone == true){
//         const totalPrice = 1219 * quantityNumber;
//         productPrice.innerText = totalPrice;
//     }
//     else{
//         const totalPrice = 59 * quantityNumber;
//         productPrice.innerText = totalPrice;
//     }
    
// }

function subTotal(){
    const phonePrice = document.getElementById('phone-price').innerText;
    const phonePriceNumber = parseInt(phonePrice);
    const casePrice = document.getElementById('case-price').innerText;
    const casePriceNumber = parseInt(casePrice)
    const subTotal = phonePriceNumber + casePriceNumber;
    const updateSubTotal = document.getElementById('subtotal');
    updateSubTotal.innerText = subTotal;
    const tax = document.getElementById('tax');
    const taxCalculation = subTotal * .10
    tax.innerText = taxCalculation.toFixed(0);
    const total = document.getElementById("total")
    const totalCalculation = subTotal + taxCalculation;
    total.innerText = totalCalculation.toFixed(0);
}

// work with iPhone plus buttons
document.getElementById('plus-button').addEventListener('click',function(){
   updateQuantity('phone', true);
   subTotal()
})

// work with iPhone minus buttons
document.getElementById('minus-button').addEventListener('click',function(){
    updateQuantity('phone', false);
    subTotal()
 })
// work with case plus buttons
document.getElementById('plus-button-case').addEventListener('click',function(){
  updateQuantity('case', true)
  subTotal()
})

// work with iPhone minus buttons
document.getElementById('minus-button-case').addEventListener('click',function(){
   updateQuantity('case', false)
   subTotal()
 })
