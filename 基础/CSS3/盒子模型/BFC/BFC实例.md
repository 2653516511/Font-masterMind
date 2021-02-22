### BFC的特性以及应用有哪些？

    1. 解决margin叠加问题：上下两个div，margin-bottom和margin-top会产生覆盖，取大的一个
```js
<style>
    #div1 { 
        width: 150px; height: 80px; background: red; margin-bottom: 30px;
        /* border: 1px red solid;  */           
        /* overflow: auto; */
        /* position: absolute; */
        /* float: left; */
        display: inline-block;
    }
    #div2 { height: 80px; width: 80px; background: blue; margin-top: 30px;}
</style>
<body>
    <div id="div1"></div>
    <div id="div2"></div>
</body>
```

    2. 解决margin传递问题:子设margin了之后，父也就有margin了，所以为了防止这种情况出现，需要给父加BFC
```js
<style>
    #div1 { 
        width: 150px; height: 200px; background: red; 
        /* border: 1px red solid;  */           //为什么设成边框的不会产生margin的传递问题
        /* overflow: auto; */
        /* position: absolute; */
        /* float: left; */
        display: inline-block;
    }
    #div2 { height: 150px; width: 80px; background: blue; margin-top: 30px;}
</style>
<body>
    <div id="div1">
        <div id="div2"></div>
    </div>
</body>
```

    3. 解决浮动问题：子设浮动之后，脱离文档流，父不设height，其高度为1px，没有撑开
```js
<style>
    #div1 { 
        width: 150px; border: 1px red solid; 
        /* overflow: auto; */
        /* position: absolute; */
        /* float: left; */
        display: inline-block;
    }
    #div2 { height: 150px; width: 80px; background: blue; float: left;}
</style>
<body>
    <div id="div1">
        <div id="div2"></div>
    </div>
</body>
```

    4. 解决覆盖问题
```js
<style>
    #div1 { width: 150px; height: 90px; background: red; float: left;}
    #div2 { height: 150px; background: blue;
            overflow: auto;}
</style>
<body>
    <div id="div1"></div>
    <div id="div2">eeeeeeeeesssss</div>         //div中的文字不会覆盖，但是div会覆盖
</body>
// 这个方法也可以实现左边固定，右边自适应的布局
```

### 补充：子div不给宽度，只给高度，其就会向上找第一个块级元素的宽度，一致