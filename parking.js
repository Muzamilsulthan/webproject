

let sem=document.getElementById("button");
let count=1;
// let x=document.getElementById("hide").style.display="none";
sem.addEventListener("click",()=>{
        let name=document.getElementById("name").value;
        let bike=document.getElementById("bike").value;
        let intime=document.getElementById("intime").value;
        let outtime=document.getElementById("outtime").value;
        if(name!=="" && bike!=="" && intime!=="" && outtime!=="")
        {
        let row=document.createElement("tr");
        document.getElementById("row1").appendChild(row);
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        let col5=document.createElement("td");
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        col1.textContent=count;
        count=count+1;
        col2.textContent=name;
        col3.textContent=bike;
        col4.textContent=intime;
        col5.textContent=outtime;
        document.getElementById("name").value="";
        document.getElementById("bike").value="";
        document.getElementById("intime").value="";
        document.getElementById("outtime").value="";
        }
})
