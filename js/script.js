function display_adress_tab(){
    document.getElementById("display-address").style.display="block";
    document.getElementById("display-payment").style.display = "none";
    document.getElementById("display-complete-order").style.display = "none";
    document.getElementById("address-link").classList.add("active");
    document.getElementById("payment-link").classList.remove("active");
    document.getElementById("confirm-order-link").classList.remove("active");
}
function display_payment_tab(){
    document.getElementById("display-address").style.display="none";
    document.getElementById("display-payment").style.display = "block";
    document.getElementById("display-complete-order").style.display = "none";
    document.getElementById("address-link").classList.remove("active");
    document.getElementById("payment-link").classList.add("active");
    document.getElementById("confirm-order-link").classList.remove("active");
}
function display_order_tab(){
    document.getElementById("display-address").style.display="none";
    document.getElementById("display-payment").style.display = "none";
    document.getElementById("display-complete-order").style.display = "block";
    document.getElementById("address-link").classList.remove("active");
    document.getElementById("payment-link").classList.remove("active");
    document.getElementById("confirm-order-link").classList.add("active");
}
