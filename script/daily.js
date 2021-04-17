$(document).ready(function () {
    // 添加logo、banner选中按钮
    // var logoSelect = false
    $('.pt ul li').click(function () {
        var _this=$(this);
        if (_this.hasClass('daily-selected')) {
            $(this).removeClass('daily-selected');
            // $(this).siblings().removeClass('daily-selected');
        } else {

            $(this).addClass('daily-selected');

        }
    })
    // 添加承诺七天无理由选中样式
    $('.daily-cn').click(function () {
        var _that=$(this);
        if (_that.hasClass('daily-cnselected')) {
            $(this).removeClass('daily-cnselected');
            // $(this).siblings().removeClass('daily-selected');
        } else {

            $(this).addClass('daily-cnselected');

        }
    })

    // 倒计时
    function countTime() {

        //获取当前时间

        var date = new Date();

        var now = date.getTime();

        //设置截止时间

        var endDate = new Date("2021-04-17 00:00:00");

        var end = endDate.getTime();

        //时间差

        var differTime = end - now;

        //定义变量,h,m,s保存倒计时的时间

        var h, m, s;

        if (differTime >= 0) {

            h = Math.floor(differTime / 1000 / 60 / 60);

            m = Math.floor(differTime / 1000 / 60 % 60);

            s = Math.floor(differTime / 1000 % 60);

            h = h < 10 ? ("0" + h) : h;

            m = m < 10 ? ("0" + m) : m;

            s = s < 10 ? ("0" + s) : s;

            document.getElementById("_h").innerHTML = h + ":";

            document.getElementById("_m").innerHTML = m + ":";

            document.getElementById("_s").innerHTML = s + "";

            setTimeout(countTime, 1000);


        } else {

            document.getElementById("_h").innerHTML = "00:";

            document.getElementById("_m").innerHTML = "00:";

            document.getElementById("_s").innerHTML = "00";

        }
    }

    countTime()
    // var ty11 = document.getElementById("cty1");
    // var motto1 = document.getElementsByClassName("motto1");
    // var curLen1 = document.getElementById("curLen1");
    // var maxLen1 = document.getElementById("maxLen1");
    // // var leftLen=document.getElementById("leftLen");
    // motto1.onkeyup = function () {
    //     maxLength1 = parseInt(maxLen1.firstChild.nodeValue);
    //     this.value = this.value.substr(0, maxLength1);
    //     var len1 = this.value.length;
    //     curLen1.firstChild.nodeValue = len1;
    //
    // };


    // var ty = document.getElementById("cty");
    // var motto = document.getElementById("motto");
    // var curLen = document.getElementById("curLen");
    // var maxLen = document.getElementById("maxLen");
    // // var leftLen=document.getElementById("leftLen");
    // motto.onkeyup = function () {
    //     maxLength = parseInt(maxLen.firstChild.nodeValue);
    //     this.value = this.value.substr(0, maxLength);
    //     var len = this.value.length;
    //     curLen.firstChild.nodeValue = len;
    //
    // };


    //获取字符串比较数量
    function compStr(str) {
        var strLen = str.length;
        // alert(strLen)
        var syl = parseInt(30 - strLen);
        if (strLen < 30) {
            $('#ap-daily-syzs span').html(syl)
        } else {
            alert('输入字数够了')
            return false;
        }
    }

    // 判断输入正整数
    var getLpInput = $('#hdchoice');
    getLpInput.keyup(function () {
        var activityLn = $('#hdchoice').val();
        // var value = $(this).val();
        if ((/^(\+|-)?\d+$/.test(activityLn)) && activityLn > 0) {
            return true;
        } else {
            alert("请输入正确的中请输入正整数！");
            return false;
        }
    })


})
