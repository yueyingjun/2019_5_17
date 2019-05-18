function lb() {
    var i=0;
    setInterval(function changeImg() {

        i++;
        document.getElementById("lunbo").src="./img/l"+i+".png";
        if (i==1) {
            document.getElementById("lunbo").style.marginTop="-10px";
            document.getElementById("spot2").style.background="black";
            document.getElementById("spot1").style.background="#ff6600";
        }
        if (i==2){
            document.getElementById("spot1").style.background="black";
            document.getElementById("spot2").style.background="#ff6600";
            document.getElementById("lunbo").style.marginTop="0px";
            i=0;
        }
    },3000);
}
var select = 0;
function ycload() {
    var cs = document.getElementById("yc").children;
    var uls = document.getElementById("cards").children;
    for(i = 0;i<uls.length;i++){
        uls[i].style.display="none";
    }
    uls[0].style.display="block";
    for(i = 0;i<cs.length;i++){
        cs[i].className="ycb";
    }
    cs[0].className="yca"
}
function c(){
    var t = event.target;
    var cs = document.getElementById("yc").children;

    var num = 0;
    for(i = 0;i<cs.length;i++){

        if(event.target == cs[i]) { //对比目标元素和li集合元素
            num=i;
            //alert(num)
            cs[i].onclick = function () {
                var cs = document.getElementById("yc").children;
                var uls = document.getElementById("cards").children;
                for(k = 0;k<uls.length;k++){
                    uls[k].style.display="none";
                }
                //alert(num)
                uls[num].style.display="block";

                for(j = 0;j<cs.length;j++) {
                    cs[j].className = "ycb"
                }
                this.className="yca"


            }

        }
    }
    for(i = 0;i<uls.length;i++){
        uls[i].style.display="none";
    }

    uls[num].style.display="block";
}


