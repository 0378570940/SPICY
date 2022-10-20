arrCarts=[]

function createCarts(){
    arrCart = JSON.parse(localStorage.getItem("carts"))
    let data="<div class='result-titles'>"
    for(let i=0; i<arrCarts.length; i++){
        // data+="<div></div>"
        data+="<div class='result-text'><div class='spinner-border text-secondary' role='status'>"+
        "<span class='visually-hidden'></span>"
        +"</div></div>"
        data+="<p>"+arrCarts[i].details.name+"</p>" +"<br>"
        data+="<h6>"+arrCarts[i].details.price+" đ"+"</h6>"
        data+="<button class='buttons'>-</button>" +"<input id='input' value='"+arrCarts[i].amount+"'></input>"+"<button class='buttons' onclick='upAmount("+i+")'>+</button>"+"<br>"
        data+="<i class='bi bi-trash' onclick='deleteCart("+i+")'></i>"
    }
    data+= "</div>"
    document.getElementById("results").innerHTML=data
    console.log(data);
}
createCarts()