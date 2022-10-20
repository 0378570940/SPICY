arrDetails=[]
let d2=new Details("Cây Bạch Tuyết Mai M.2001","Còn hàng","40,000",20)
// let d2=new Details("Cây Bạch Tuyết Mai M.2001","Còn hàng","40,000",20)
arrDetails.push(d2)
// arrDetails.push(d2)
localStorage.setItem("details",JSON.stringify(arrDetails))

function createDetails(){
    arrDetails = JSON.parse(localStorage.getItem("details"))
    let content= "<div class='main'>"
    for(let i=0; i<arrDetails.length;i++){
        content+="<div class='mains'>"
        content+="<h3>"+arrDetails[i].name+"</h3>"
        content+="<strong>" +arrDetails[i].stocking+"</strong>"
        content+="<h2>" +arrDetails[i].price+"</h2>"
        // content+="<button class='buttons'>-</button>" +"<input value='"+arrDetails[i].quantity+"'></input>"+"<button class='buttons' onclick='upAmount("+i+")'>+</button>"+"<br>"
        content+="<input value='"+arrDetails[i].quantity+"'></input>"+"<br>"
        content+="<button class='button-text' onclick='addCart("+i+")'>THÊM VÀO GIỎ HÀNG</button>"
        content+="<button class='button-text'>MUA HÀNG</button>" +"<br>"
        content+="<a class='main-a'><i class='bi bi-heart'></i> YÊU THÍCH</a>"
        content+="</div>"
    }
    content+="</div>"
    document.getElementById("main-text").innerHTML=content
    console.log(content);
}

createDetails()