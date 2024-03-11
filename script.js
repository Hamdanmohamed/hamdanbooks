let back = document.getElementById("back");
let popup = document.getElementById("mainpop");
let btn1 = document.getElementById("show");

btn1.addEventListener("click",function(){
    back.style.display = "block"
    popup.style.display = "block"
})

let clear = document.getElementById("clr");

clear.addEventListener("click",function(){
    back.style.display = "none"
    popup.style.display = "none"

});

let maindiv = document.getElementById("n");
let input1 = document.getElementById("inp1"); 
let input2 = document.getElementById("inp2"); 
let input3 = document.getElementById("inp3"); 
let addbtn = document.getElementById("addcart");
addbtn.addEventListener("click",function(){
    let newdiv = document.createElement("div");
    newdiv.setAttribute("class", "books1");
    newdiv.innerHTML = `<h1>${input1.value}</h1>
    <h4>${input2.value}</h4>
    <p>${input3.value}</p>
    <button onclick="del(event)">delete</button>`
    maindiv.append(newdiv);
    back.style.display = "none"
    popup.style.display = "none"

});

function del(event){
    event.target.parentElement.remove();
}

