function updateIndexs(){
    array = JSON.parse(localStorage.getItem("list"))
    let datas="<div class='main' style=''>"
    for(let i=0; i<array.length; i++){
        datas+= "<div class='main_title'>"
        datas+="<img src="+array[i].img+">"
        datas+="<div class='main_img'></div>"
        datas+="<p>"+array[i].name+"</p>"
        datas+="<b>"+array[i].price+" đ"+"</b>"
        datas+="<div class='main_desc'>"+"<a href='../informat/informat.html' onclick='editProduct("+i+")'><span></span>Add</a>"+"</div>"
        datas+="</div>"
    }
    datas+="</div>"
    document.getElementById("main_cartt").innerHTML=datas;
    console.log(datas);
} 

updateIndexs()
