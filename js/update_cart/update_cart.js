 array=[]
let cart1=new Product("../img/caybachtuyetmai1.png",'Cay Bạch Tuyết Mai M.2001', "40,000")
let cart2=new Product("../img/cayluoho2.png",'Cay Lưỡi Hổ H.2001', "35,000")
let cart3=new Product("../img/cayngocngan1.png",'Cay Ngọc Ngăn N.2001', "50,000")
let cart4=new Product("../img/cayphongloc1.png",'Cay Phong Lộc L.2001', "40,000")
let cart5=new Product("../img/cayphuquy1.png",'Cay Phú Quý Q.2001', "35,000")
let cart6=new Product("../img/caytungthomcao1.png",'Cay Tùng Thơm Cao T.2001', "50,000")
let cart7=new Product("../img/cayvanloc1.png",'Cay Vạn Lộc L.2002', "40,000")
let cart8=new Product("../img/cáyemthom1.png",'Cay Sen Thơm T.2002', "35,000")
// let cart9=new Product("/img/",'Cay Ngọc Ngăn N.2001', "50,000")
array.push(cart1)
array.push(cart2)
array.push(cart3)
array.push(cart4)
array.push(cart5)
array.push(cart6)
array.push(cart7)
array.push(cart8)
localStorage.setItem("list",JSON.stringify(array))

function updateCart(){
    array = JSON.parse(localStorage.getItem("list"))
    let data="<div class='main' style=''>"
    for(let i=0; i<array.length; i++){
        data+= "<div class='main_title'>"
        data+="<img src="+array[i].img+">"
        data+="<div class='main_img'> </div>"
        data+="<p>"+array[i].name+"</p>"
        data+="<b>"+array[i].price+" đ"+"</b>"
        data+="<div class='main_desc'>"+"<a onclick='editProduct("+i+")'><span></span>Edit</a>"+"</div>"
        data+="<div class='main_descs'>"+"<a onclick='deleteProduct("+i+")'><span></span>Delete</a>"+"</div>"
        data+="</div>"
    }
    data+="</div>"
    document.getElementById("main_carts").innerHTML=data
} 

updateCart()

// thêm sản phẩm
function createProduct(){
    let img=document.getElementById("imgAdd").value;
    let name=document.getElementById("nameAdd").value;
    let price=document.getElementById("priceAdd").value;
    let newProduct= new Product(img,name,price)
    array.push(newProduct);
    document.getElementById("imgAdd").value="";
    document.getElementById("nameAdd").value="";
    document.getElementById("priceAdd").value="";
    localStorage.setItem("list",JSON.stringify(array))
    updateCart()
}

// xóa sản phẩm
function deleteProduct(index){
    if(confirm("Bạn muốn xóa sản phẩm này !")){
        array.splice(index,1)
        alert("Bạn xóa thành công sản phẩm !")
    }
    localStorage.setItem("list",JSON.stringify(array))
    updateCart()
}