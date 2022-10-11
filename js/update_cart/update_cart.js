array=[]
let cart1=new Product("../img/caybachtuyetmai1.png",'Cay Bạch Tuyết Mai M.2001', "40,000");
let cart2=new Product("../img/cayluoho2.png",'Cay Lưỡi Hổ H.2001', "35,000");
let cart3=new Product("../img/cayngocngan1.png",'Cay Ngọc Ngăn N.2001', "50,000");
array.push(cart1);
array.push(cart2)
array.push(cart3)
localStorage.setItem("list",JSON.stringify(array));

function updateCart(){
    let data="<div class='main'>"
    for(let i=0; i<array.length; i++){
        data+= "<div class='main_title'>"
        data+="<img src="+array[i].img+">"
        data+="<div class='main_img'> </div>"
        data+="<p>"+array[i].name+"</p>"
        data+="<b>"+array[i].price+" đ"+"</b>"
        data+="<div class='main_desc'>"+"<a><span></span>Add</a>"+"</div>"
        data+="</div>"
    }
    data+="</div>"
    document.getElementById("main_carts").innerHTML=data
} 

updateCart()

