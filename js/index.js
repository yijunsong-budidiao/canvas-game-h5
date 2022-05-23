window.onload = function () {
    var colorInp = document.getElementById('color');
    var weight = document.getElementById('weight');
    var type = document.getElementById('type');
    var save = document.getElementById('save');
    var change = document.getElementById('change');
    var content = document.getElementById('content');
    var des = document.getElementById('des');
    var count = document.getElementById('count');
    var hidden = document.getElementById('hidden');
    var cover = document.getElementById('cover');
    var number = document.getElementById('number');
    var can = document.getElementById('can');
    var ctx = can.getContext('2d');
    var penColor = "#000000";
    var penSize = 1;
    var poe = "pen";
    //onmousedown  鼠标按下事件
    can.onmousedown = function (event) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = penSize;
        ctx.lineCap = "round"; //划线起始点圆形
        ctx.lineJoin = "round"; //划线拐点圆角
        if (poe === "pen") {
            ctx.globalCompositeOperation = "source-over";
        } else {
            ctx.globalCompositeOperation = "destination-out";
        }
        //event.clientX   鼠标点下去的那个点距离浏览器可视窗口的水平位移
        //event.clientY  鼠标点下去的那个点距离浏览器可视窗口的垂直位移
        //can.offsetLeft  画布距离浏览器可视窗口的水平位移
        //can.offsetTop  画布距离浏览器可视窗口的垂直位移
        var x = event.clientX - can.offsetLeft;
        var y = event.clientY - can.offsetTop;
        ctx.beginPath();
        ctx.moveTo(x, y);
        //onmousemove  鼠标移动事件
        can.onmousemove = function (event) {
            var x = event.clientX - can.offsetLeft;
            var y = event.clientY - can.offsetTop;
            ctx.lineTo(x, y);
            ctx.stroke();
        };
        //onmouseup鼠标抬起事件
        document.onmouseup = function () {
            can.onmousemove = null;
        }
        console.log(ctx);
    };
    //当颜色输入控件的值改变的时候，把画笔的颜色重新设置
    colorInp.onchange = function () {
        penColor = colorInp.value;
    };
    //当画笔粗细输入控件的值改变的时候，把画笔的粗细重新设置
    weight.onchange = function () {
        penSize = weight.value;
    };
    type.onchange = function () {
        poe = type.value;
        if (poe === "pen") {
            /* 改变鼠标指针为画笔 */
            can.style.cursor = "url(./images/pencil.ico) 2 24, auto";
        } else {
            /* 改变鼠标指针为橡皮 */
            can.style.cursor = "url(./images/rubber.ico) 2 24, auto";
        }
    };
    // 点击清空画板，使用重新定义canvas高度的办法，可以实现
    save.onclick = function () {
        can.height = can.height;
    }
    // 词语数组
    var list = [{
        id: 2,
        name: "比基尼",
        count: "三个字",
        remind: "衣服"
    }, {
        id: 3,
        name: "乌龟",
        count: "两个字",
        remind: "动物"
    }, {
        id: 4,
        name: "刘翔",
        count: "两个字",
        remind: "体育明星"
    }, {
        id: 5,
        name: "沙漏",
        count: "两个字",
        remind: "计时器类"
    }, {
        id: 6,
        name: "射雕英雄传",
        count: "五个字",
        remind: "古代小说"
    }, {
        id: 7,
        name: "钓鱼",
        count: "两个字",
        remind: "一种运动"
    }, {
        id: 8,
        name: "击剑",
        count: "两个字",
        remind: "体育比赛"
    }, {
        id: 9,
        name: "癞蛤蟆",
        count: "三个字",
        remind: "一种益虫"
    }, {
        id: 10,
        name: "汉堡",
        count: "两个字",
        remind: "食品"
    }, {
        id: 11,
        name: "沙僧",
        count: "两个字",
        remind: "神话人物"
    }, {
        id: 12,
        name: "米老鼠",
        count: "三个字",
        remind: "动画人物"
    }, {
        id: 13,
        name: "戒指",
        count: "两个字",
        remind: "首饰"
    }, {
        id: 14,
        name: "导弹",
        count: "两个字",
        remind: "远程武器"
    }, {
        id: 15,
        name: "天文望远镜",
        count: "五个字",
        remind: "一种光学仪器"
    }, {
        id: 16,
        name: "芭比娃娃",
        count: "四个字",
        remind: "儿童玩具"
    }, {
        id: 17,
        name: "螃蟹",
        count: "两个字",
        remind: "一种海鲜"
    }, {
        id: 18,
        name: "口红",
        count: "两个字",
        remind: "化妆品"
    }, {
        id: 19,
        name: "蜡烛",
        count: "两个字",
        remind: "一种家用品"
    }, {
        id: 20,
        name: "大象",
        count: "两个字",
        remind: "动物"
    }, {
        id: 21,
        name: "放风筝",
        count: "三个字",
        remind: "一种娱乐项目"
    }, {
        id: 22,
        name: "七上八下",
        count: "四个字",
        remind: "成语"
    }, {
        id: 23,
        name: "对牛弹琴",
        count: "四个字",
        remind: "成语"
    }, {
        id: 24,
        name: "冰糖葫芦",
        count: "四个字",
        remind: "食物"
    }, {
        id: 25,
        name: "钢管舞",
        count: "三个字",
        remind: "一种舞蹈"
    }, {
        id: 26,
        name: "三头六臂",
        count: "四个字",
        remind: "成语"
    }, {
        id: 27,
        name: "如来神掌",
        count: "四个字",
        remind: "一种武功"
    }, {
        id: 28,
        name: "高铁",
        count: "两个字",
        remind: "交通工具"
    }, {
        id: 29,
        name: "理发师",
        count: "三个字",
        remind: "一种职业"
    }, {
        id: 30,
        name: "仙人掌",
        count: "三个字",
        remind: "植物"
    }]
    var listNew = [];
    // 更换词语按钮点击事件
    change.onclick = function () {
        if (listNew.length == list.length) {
            listNew = [];
        }
        // 生成随机数，作为数组下标选择
        var num = Math.round(Math.random() * (list.length - 1));
        var a = list[num];

        var id = a.id;
        // 判断是否选过此词语，如果选过重新生成随机数选择
        while (listNew.indexOf(id) != -1) {
            num = Math.round(Math.random() * (list.length - 1));
            a = list[num];
            id = a.id;
        }
        listNew.push(id);
        content.innerHTML = a.name;
        des.innerHTML = a.remind;
        count.innerHTML = a.count;
        number.innerHTML = a.id;
        if (a.count == "五个字") {
            content.style.fontSize = "25px";
        } else {
            content.style.fontSize = "30px";
        }
        can.height = can.height;
    }
    // 显示隐藏词语按钮点击事件
    hidden.onclick = function () {
        if (hidden.innerHTML == "隐藏词汇") {
            cover.style.top = "0";
            hidden.innerHTML = "显示词汇"
        } else {
            cover.style.top = "70px";
            hidden.innerHTML = "隐藏词汇"
        }
    }
}