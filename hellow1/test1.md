#笔记
##HTML+CSS

```

init 

fd
dd
box-siztion
cursor:point; 手型
box-sizing: border-box;宽度带变宽


过度   css3新的属性
变化
动画
tansform-orign:left top 缩放点
transform: 4个属性 移动（translate(100px 100px)） 缩放scale(.5,2.)  旋转(rotate(10deg)) 斜切skew(10 deg,10deg)
transform:matrix();
过度
transition-property:transform; 设置属性
transition-duration:3s ;持续时间
transition-time-functionLease; 过度方式
transition-delay:2s;等待时间
动画：
   dov:hover{
            animation-name: animate;
            animation-duration: 1s;
            animation-timing-function: linear;

            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-delay: 2s;
        }
            @keyframes animate {
                0%{
                    transform:rotate(0deg);
                }
                100%{
                    transform: rotate(30deg);
                }
            }
             border-radius: 50% 50px; 圆
              box-shadow: 10px 10px 20px black;阴影
 <div class="mo3">
            <h2>国际特价</h2>
            <a href="">北美</a>
            <a href="">亚洲</a>
            <a href="">欧洲</a>
        </div>

```

