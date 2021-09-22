// 针对login页面定义一个对象
var log = {
    startdt: "2021-8-13",
    enddt: "2021-9-15",
    updatedt: "2021-8-25",
    anchor: "hardy"
}
// 由对象派生业务逻辑
log.submit = {
    check: function (v) {       //验证某个值是否为空
        var _v = (v == "") ? true : false;
        return _v;
    },
    autohide: function(obj){
        setTimeout(function(){
            obj.hide();
        },2000)
    }
}
// 定义一个验证内容是否为空的函数
function checkvalue() {
    // 获取元素对象，并保存在变量中
    var $form = $("form");
    var $username = $("#username");
    var $password = $("#password");
    var $err1 = $("#err1");
    var $err2 = $("#err2");
    // var $btn = $(".btn>input");
    // 当用户名和密码都不为空时
    // $username.val()!=""&&$password.val()!=""
    if (!log.submit.check($username.val()) && !log.submit.check($password.val())) {
        // 直接提交
        return true;
    }
    else {
        // 如果用户名为空时
        if ($username.val() == "") {
            // 提示用户名称不能为空的错误信息显示
            $err1.show();
            // 两秒后自动隐藏
            log.submit.autohide($err1);
            // 阻止提交
            return false;
        }
        else {
            // 密码为空时，提示密码为空的错误信息
            $err2.show();
            // 两秒后自动隐藏
            log.submit.autohide($err2);
            // 阻止提交
            return false;
        }
    }
}

// 定义一个基于列表页的业务逻辑
var lst = {
    template:function(t,u,p1,p2){
        var _html = "";
        _html+='<div class="item">';
        _html+= '<div class="title">';
        _html+='<h3>'+t+'</h3>';
        _html+='</div>';
        _html+='<div class="con">';
        _html+='<div class="cleft">';
        _html+='<img src="'+u+'" alt="">';
        _html+='</div>';
        _html+='<div class="cright">';
        _html+='<p class="ptop">';
        _html+=''+p1;
        _html+='</p>';
        _html+='<p class="pbottom">';
        _html+=''+p2;
        _html+='</p>';
        _html+='</div>';
        _html+='</div>';
        _html+='</div>';
        return _html;
    }
}
// 使用数组保存展示的数据
var arrData=[
    {t:"Python语言在人工",u:"imgs/b.jpg",p1:"Python作为一门编程语言，对于程序员来说，想要从事",p2:"皮鹿 学无止境 2020-5-22 34258阅读 9684"},
    {t:"Web语言在人工",u:"imgs/b04.jpg",p1:"Python作为一门编程语言，对于程序员来说，想要从事",p2:"皮鹿 学无止境 2020-6-22 34258阅读 9684"},
    {t:"Java语言在人工",u:"imgs/b.jpg",p1:"Python作为一门编程语言，对于程序员来说，想要从事",p2:"皮鹿 学无止境 2020-7-22 34258阅读 9684"},
    {t:"C语言在人工",u:"imgs/b04.jpg",p1:"Python作为一门编程语言，对于程序员来说，想要从事",p2:"皮鹿 学无止境 2020-8-22 34258阅读 9684"}
]
// 使用流程
// 1.遍历数组，获取每一项元素对象
// 2.将获取的元素对象填充到模板中
// 3.向页面元素追加模板内容
for(var i=0;i<arrData.length;i++){
// 通过模板生成新的列表数据
    var _HTML=lst.template(arrData[i].t,arrData[i].u,arrData[i].p1,arrData[i].p2);
    // 将数据追加到列表中
    $(".lst").append(_HTML);
}

// 定义一个基于列表页的业务逻辑
var pics={
    template: function(u,n,t){
        var _html="";
        _html+='<div class="item">';
        _html+='    <div class="imgs">';
        _html+='        <img src="'+u+'" alt="">';
        _html+='        <div class="tip">喜欢 | '+n+'</div>';
        _html+='    </div>';
        _html+='    <!-- 添加图片标题 -->';
        _html+='    <div class="title">';
        _html+='        <h3>'+t+'</h3>';
        _html+='    </div>';
        _html+='</div>';
        return _html;
    }
}
// 定义一个保函三个对象内容的图片数组
var arrPics = [
    {u:"imgs/banner01.jpg",n:"194",t:"web页面开发时的重要性"},
    {u:"imgs/b04.jpg",n:"346",t:"javascript开发时碰到的问题"},
    {u:"imgs/toppic02.jpg",n:"92",t:"python语言的优点"},
    {u:"imgs/banner01.jpg",n:"194",t:"web页面开发时的重要性"},
    {u:"imgs/b04.jpg",n:"346",t:"javascript开发时碰到的问题"},
    {u:"imgs/toppic02.jpg",n:"92",t:"python语言的优点"}
]
// 使用流程
// 1.遍历数组，获取每一项元素对象
// 2.将获取的元素对象填充到模板中
// 3.向页面元素追加模板内容
for(var j=0;j<arrPics.length;j++){
    // 通过模板生成新的列表数据
    var _HTML=pics.template(arrPics[j].u,arrPics[j].n,arrPics[j].t);
    // 将数据追加到列表中
    $("#pics").append(_HTML);
}
// 绑定一个点击事件
// 定义一个正则取数字
var reg1 = /\d+/gi; //数字
var reg2 = /\D+/gi; //非数字
// 获取对象
var $like = $("#pics>.item>.imgs>.tip")
$like.on("click",function(){
    var str = $(this).text();  //获取数据
    var num = Number(str.match(reg1))+1;  //取到数字就加一
    str = str.match(reg2);  //提取非数字提示字
    var newstr = str+String(num);  //重新组合用于显示
    $(this).text(newstr)
    // alert(str.match(reg2))
    // alert(str.match(reg1))
    // console.log($(this).text())
})

// 定义一个基于列表页的业务逻辑
var alists={
    template: function(t,u){
        var _html="";
        _html+='<li><a href="'+u+'" target="_block">'+t+'</a></li>'
        return _html;
    }
}
// 使用数组保存展示的数据
var arrlinea=[
    {t:"网页制作成品下载",u:"http://www.baidu.com"},
    {t:"网页成品",u:"http://www.baidu.com"},
    {t:"大学生网页作业",u:"http://www.baidu.com"},
    {t:"网页作业",u:"http://www.baidu.com"},
    {t:"网页设计作品",u:"http://www.baidu.com"},
    {t:"黑豆课件",u:"http://www.baidu.com"},
    {t:"静态网页作业",u:"http://www.baidu.com"},
    {t:"学生网页制作",u:"http://www.baidu.com"},
    {t:"模板在线",u:"http://www.baidu.com"},
]
var arrhelpa=[
    {t:"网页作业定制",u:"http://www.baidu.com"},
    {t:"毕业设计定制",u:"http://www.baidu.com"},
    {t:"支付方式",u:"http://www.baidu.com"},
    {t:"帮助中心",u:"http://www.baidu.com"},
]
// 使用流程
// 1.遍历数组，获取每一项元素对象
// 2.将获取的元素对象填充到模板中
// 3.向页面元素追加模板内容
for(var j=0;j<arrhelpa.length;j++){
    // 通过模板生成新的列表数据
    var _HTML=alists.template(arrhelpa[j].t,arrhelpa[j].u);
    // 将数据追加到列表中
    $("#ula1>").append(_HTML);
}
for(var j=0;j<arrlinea.length;j++){
    // 通过模板生成新的列表数据
    var _HTML=alists.template(arrlinea[j].t,arrlinea[j].u);
    // 将数据追加到列表中
    $("#ula2>").append(_HTML);
}