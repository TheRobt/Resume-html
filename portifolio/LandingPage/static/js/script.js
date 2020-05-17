function changeimg(visible, hidden, priceId, priceValue){
    document.getElementById(hidden).style.display="none"
    document.getElementById(visible).style.display=""
    document.getElementById(priceId).innerText=`US $${priceValue}`
    
}