/*
var data = ["Luke", "Bob", "Tommy", "Jerry"];
var eles=[];

function box(name){
    //allows referencing of box function's this within addEventListener (in which case this would
    //reference that parent function)
    const that = this;
    this.name=name;
    this.ele=document.createElement("div");
    this.ele.innerHTML=this.name;
    document.body.appendChild(this.ele);
}

box.prototype.reverseName = function(){
    this.name=this.name.split("").reverse().join("");
    this.ele.innerHTML=this.name;
    this.ele.addEventListener("click",function(){
        that.reverseName();
    })
}

for (let i=0; i<data.length; i++){
    eles.push(new box(data[i]));
}*/
var data = ["blue", "red", "green"];
var eles =[];
function box(color, number){
    const that = this;
    this.color=color;
    this.number=0;
    this.ele=document.createElement("div");
    this.ele.innerHTML=this.number;
    this.ele.style.backgroundColor=this.color;
    this.ele.style.height="100px";
    this.ele.style.borderRadius="10px";
    this.ele.style.width="200px";
    this.ele.style.color="white";
    this.ele.style.textAlign="center";

    document.body.appendChild(this.ele);
}
 box.prototype.increaseNumber = function(){
     this.number=this.number+1;
     this.ele.innerHTML=this.number;
     this.ele.addEventListener("click",function(){
         that.increaseNumber();
     })
 }

for (let i=0; i<data.length; i++){
    eles.push(new box(data[i]), 0);
}
