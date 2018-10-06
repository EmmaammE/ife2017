## lab1

CSS animation：过渡，需指定过渡的对应CSS属性

为了实现点击时横线从中间展开的效果，此为控制width的变化，并设置margin: 0 auto;
注意：需首先设置好横线的高度，如果只在点击后的类中设置，会由于height=0,消失时没有过渡效果。
![beta1](./lab1/temp2.gif)

## lab2

rotate()：顺时针旋转

translate(,)：平移，x左,y顶

scale(,)：宽度，高度

skew(x,y):围绕x轴，y轴翻转的角度

skewX(deg):指定沿x轴对给定角度的2D倾斜变换

matrix():6个值矩阵


```
.example {
    transform: rotate(30deg);
    -ms-transform: rotate(30deg);		/* IE 9 */
    -webkit-transform: rotate(30deg);	/* Safari and Chrome */
    -o-transform: rotate(30deg);		/* Opera */
    -moz-transform: rotate(30deg);		/* Firefox */
}```
