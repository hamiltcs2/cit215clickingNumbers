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
    this.ele.addEventListener("click",function(){
        that.increaseNumber();
    });

    document.body.appendChild(this.ele);
}
 box.prototype.increaseNumber = function(){
     this.number=this.number+1;
     this.ele.innerHTML=this.number;
 }

for (let i=0; i<data.length; i++){
    eles.push(new box(data[i]), 0);
}
