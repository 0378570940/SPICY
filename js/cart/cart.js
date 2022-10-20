arrCart=[]

function createCart(){
    arrCart = JSON.parse(localStorage.getItem("cart"))
    let data="<div class='result-title'>"
    for(let i=0; i<arrCart.length; i++){
        // data+="<div></div>"
        data+="<div class='result-text'><div class='spinner-border text-secondary' role='status'>"+
        "<span class='visually-hidden'></span>"
        +"</div></div>"
        data+="<p>"+arrCart[i].details.name+"</p>" +"<br>"
        data+="<h6>"+arrCart[i].details.price+" đ"+"</h6>"
        data+="<button class='buttons'>-</button>" +"<input id='input' value='"+arrCart[i].amount+"'></input>"+"<button class='buttons' onclick='upAmount("+i+")'>+</button>"+"<br>"
        data+="<i class='bi bi-trash' onclick='deleteCart("+i+")'></i>"
    }
    data+= "</div>"
    document.getElementById("result").innerHTML=data
    console.log(data);
}
createCart()

// tính tiền
let input = document.getElementById("input").value
input.addEventListener("click", () => {myfunction()});
function myFunction() {
    document.getElementById("price").innerHTML = input*price;
    console.log(input*price);
  }

//   
function deleteCart(index){
    if(confirm("Bạn muốn xóa sản phẩm này ko!")){
        arrCart.splice(index,1)
        alert("Bạn xóa thành Công! ")
    }
    localStorage.setItem("cart",JSON.stringify(arrCart))
    createCart()
}

//hàm thêm sản phẩm vào giỏ hàng
function addCart(index) {
    //lấy giỏ hàng tử localStorage
    arrCart = JSON.parse(localStorage.getItem("cart")) 
    if (arrCart == null) {
        arrCart = []
    }
    let check = true
    //kiểm tra nếu sản phẩm đã có thì tăng số lượng, không tạo mới
    for(let i = 0; i < arrCart.length; i++) {
        if (arrCart[i].details.name === arrDetails[index].name) {
            arrCart[i].amount += 1
            check = false
            break
        }
    }
    //nếu là sản phẩm mới thì tạo mới trong giỏ hàng
    if (check) {
        let cartElement = new Cart(arrDetails[index],1)
        console.log(cartElement);
        arrCart.push(cartElement)
    }
    arrDetails[index].quantity -= 1
    //lưu 2 mảng vào localstorage
    localStorage.setItem("cart", JSON.stringify(arrCart))
    localStorage.setItem("details", JSON.stringify(arrDetails))
    createCart()
    createDetails()
}