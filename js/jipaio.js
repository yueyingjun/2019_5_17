window.onload=function(ev){
    var banner = document.querySelectorAll(".banner");
    var btn = document.querySelectorAll(".btn");
    var num = 0;

    setInterval(function () {
        num++;
        if(num==2){
            num=0;
        }
        for(var i=0;i<2;i++){
            banner[i+1].style.zIndex="1";
            btn[i+1].style.background="black";
        }
        banner[num+1].style.zIndex="998";
        btn[num+1].style.background="orange";

    },3000)
}


var links=document.querySelectorAll(".hotloadfoot> a")
var lists=document.querySelectorAll(".piaobox")
console.log(links);
console.log(lists);
for(var i=0;i<links.length;i++){
    links[i].index=i;
    links[i].onclick=function () {

        for (var j = 0; j < lists.length; j++) {
            console.log(lists[j])
            lists[j].style.display = "none";
        }
        console.log(lists[this.index])
        lists[this.index].style.display = "block";

    }
}