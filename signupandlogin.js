
let login=document.getElementById("container2").style.display="none";

let click1=document.getElementById("heading1");
click1.addEventListener("click",()=>{
    let signup1=document.getElementById("container1").style.display="block";
    let login1=document.getElementById("container2").style.display="none";
    document.getElementById("heading1").style.backgroundColor="rgb(189, 241, 241)"
    document.getElementById("heading2").style.backgroundColor="rgb(248, 246, 245)"
})

let click2=document.getElementById("heading2");
click2.addEventListener("click",()=>{
    let signup2=document.getElementById("container1").style.display="none";
    let login2=document.getElementById("container2").style.display="block";
    document.getElementById("container2").style.backgroundColor="rgb(189, 241, 241)";
    document.getElementById("heading1").style.backgroundColor="rgb(248, 246, 245)"
    document.getElementById("heading2").style.backgroundColor="rgb(189, 241, 241)"
})

let click3=document.getElementById("button1");
click3.addEventListener("click",()=>{
    document.getElementById("name").value="";
    document.getElementById("lname").value="";
    document.getElementById("pass").value="";
})

let click4=document.getElementById("button2");
click4.addEventListener("click",()=>{
    document.getElementById("name1").value="";
    document.getElementById("pass1").value="";
})