$(document).ready(function () {



    //规格添加
    var addGg = 0;
    $('.daily-addggbox').click(function () {

        if (addGg >= 2) {
            $(this).children('a').css('cursor', 'not-allowed');
            addGg = 2;

        } else {
            $(this).children('a').css('cursor', 'pointer');
            $('.daily-ggkcbox .col-sm-10').append('  <div class="form-group daily-ggsx">\n' +
                '            <div class="daily-delete">\n' +
                '                <select name="" id="" class="form-control">\n' +
                '                    <option value="">请选择规格属性</option>\n' +
                '                    <option value="" selected>重量</option>\n' +
                '                    <option value="">尺寸</option>\n' +
                '                    <option value="">属性</option>\n' +
                '                    <option value="">套餐</option>\n' +
                '\n' +
                '                </select>\n' +
                '                <span>删除</span>\n' +
                '            </div>\n' +
                '            <div class="daily-gzadd">\n' +
                '                <div class="daily-gzaddbox">\n' +
                '                    <select name="" id="" class="form-control">\n' +
                '                        <option value="">请选择规格参数</option>\n' +
                '                    </select><i></i></div>\n' +
                '                </div>\n' +
                '\n' +
                '                <a href="javascript:void(0)"> <i class="iconfont iconadd"></i>\n' +
                '                    <span>添加</span></a>\n' +
                '            </div>\n' +
                '\n' +
                '        </div>')
            addGg++;

            $(this).children('a').css('cursor', 'pointer');
        }

        return addGg;

    })
    //规格删除，append方法添加元素无法直接删除
    $(document).on("click", '.daily-ggsx .daily-delete span', function () {

        if (addGg <= 0) {
            $(this).children('a').css('cursor', 'pointer');
            alert(addGg)
        } else {
            $(this).children('a').css('cursor', 'pointer');
            $(this).parents('.daily-ggsx').remove();

        }

    });
    var arr1 = 0;
    var spanLen = $(this).parent('.daily-gzadd div').children('select').length;
    $(document).on("click", '.daily-ggsx a span', function () {

        arr1++;
        if (arr1 > 3) {
            $(this).parent('a').siblings('.daily-gzadd').append('<div class="daily-gzaddbox">' +
                '<select name="" id="" class="form-control selected">n' +
                '<option value="">5斤装核桃酸奶饮料</option>n' +
                '</select>' +
                '<i></i></div>');
            $(this).parent('a').empty()
            arr1 = 4;
        } else {
            $(this).parent('a').siblings('.daily-gzadd').append('<div class="daily-gzaddbox">' +
                '<select name="" id="" class="form-control selected">n' +
                '<option value="">5斤装核桃酸奶饮料</option>n' +
                '</select>' +
                '<i></i></div>');

        }
        return arr;
    });
    $('.daily-gzadd select').hover(function () {

    }, function () {

    })

    //运费模板切换
    var li = $('#tabs');
    var cc = $('#tabs option');
    var len = cc.length;
    $('.chanpin0').show();
    $('.chanpin1').hide();
    $('.chanpin2').hide();
    li.change(function () {
        var t = parseInt(li.get(0).selectedIndex);
        $('.chanpin' + t).siblings().hide();
        $('.daily-relase').show();
        $('.chanpin' + t).show();

    });


    // 添加承诺七天无理由选中样式
    $('.daily-cn').click(function () {
        var _cnThatIndex = $(this).index();
        var _cnThat = $(this);
        //去除当前元素兄弟的选中效果
        $('.daily-cn').eq(_cnThatIndex).siblings()
            .removeClass('daily-cnselected');
        //点击判断当前是否点击，未点击当前添加选中，否则选中取消
        if (_cnThat.hasClass('daily-cnselected')) {
            $(this).removeClass('daily-cnselected');
        } else {
            $(this).addClass('daily-cnselected');
        }
    })
    // 添加logo、banner选中按钮
    $('.pt ul li').click(function () {
        var _lithis = $(this);
        if (_lithis.hasClass('daily-selected')) {
            $(this).removeClass('daily-selected');
        } else {

            $(this).addClass('daily-selected');

        }
    })


    // 添加承诺七天无理由选中样式
    $('.daily-goodsclassify-form .radio ').click(function () {
        var _classifyThat = $(this);
        if (_classifyThat.hasClass('daily-classifyboxselected')) {
            $(this).removeClass('daily-classifyboxselected');
            // $(this).siblings().removeClass('daily-selected');
        } else {

            $(this).addClass('daily-classifyboxselected');

        }
    })
// 添加图片弹窗
    $(".daily-xzpic").click(function () {
        layer.open({
            type: 1,
            title: '选择图片',
            area: ["628px", "505px"],
            content: $(".daily-xzpiclist"),
            skin: "layer-xztp-style",
            btn: ["取消", "确认"]
        })
    })
    // 网店预览弹窗
    $(".daily-wdyl").click(function () {
        layer.open({
            type: 1,
            title: '',
            area: ["367px", "910px"],
            content: $(".sjyl"),
            // skin: "layer-style",
            // btn: ["取消", "确认"]
        })
    })
    // logo弹窗
    $(".daily-logoaddtc a").click(function () {
        layer.open({
            type: 1,
            title: '添加logo',
            area: ["628px", "505px"],
            content: $(".logoadd1"),
            skin: "layer-logo-style",
            btn: ["取消", "确认"]
        })
    })
    // banner弹窗
    $(".webuploader-pick").click(function () {
        layer.open({
            type: 1,
            title: '添加banner',
            area: ["628px", "730px"],
            content: $(".banneradd1"),
            skin: "layer-banner-style",
            btn: ["取消", "确认"]
        })
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


    //
    //
    //
    // //添加规格
    //
    // //规格与库存
    // //点击添加规格后，规格框出现
    // var ggClickNum = 1;
    // // var delNum = 1;
    // $('.daily-ggsx').css('display', 'none');
    // $('.daily-ggkc .daily-addggbox ').click(function () {
    //
    //     //第一次点击,ggClickNum增加1变为2:
    //     //如果继续增加，ggClickNum不变
    //     //如果先删除，gClickNum变为1
    //     if (ggClickNum >= 2) {
    //         $(this).siblings('.daily-ggsx').eq(1).css('display', 'block');
    //         $('#daily-addgg').css('cursor', 'not-allowed');
    //         // alert(ggClickNum)
    //         // ggClickNum--;
    //         console.log('第二次点击后不加');
    //         console.log(ggClickNum);
    //         console.log('--------------------');
    //     } else {
    //         //第一次点击
    //         // alert(ggClickNum)
    //         $('#daily-addgg').css('cursor', 'pointer')
    //         $(this).siblings('.daily-ggsx').eq(0).css('display', 'block');
    //         ggClickNum++;
    //         console.log('第一次点击后加一');
    //         console.log(ggClickNum);
    //         console.log('--------------------');
    //         // alert(ggClickNum)
    //     }
    //     return ggClickNum;
    // })
    //
    //
    // $('.daily-delete span').click(function () {
    //     // alert(ggClickNum);
    //     //第一次删除
    //     if (ggClickNum == 2) {
    //
    //         $(this).parents('.daily-ggsx').css('display', 'none');
    //         $('#daily-addgg').css('cursor', 'pointer')
    //         ggClickNum--;
    //         console.log('第一次删除后减一');
    //         console.log(ggClickNum);
    //         console.log('--------------------');
    //     } else {
    //
    //
    //         //第二次删除
    //         $(this).parents('.daily-ggsx').css('display', 'none');
    //         $('#daily-addgg').css('cursor', 'pointer')
    //         console.log('第二次删除不变');
    //         console.log(ggClickNum);
    //         console.log('--------------------');
    //     }
    //     return ggClickNum;
    // })
    //
    //
    // //运费模板
    let arr = [];
    $(".daily-bypsdq .daily-bypsdq-city input:checkbox").click(function () {
        arr = []
        var checkbox = $(".daily-bypsdq .daily-bypsdq-city input:checkbox:checked")
            .each(function (index) {
                arr[index] = $(this).val();
            })
        return arr;
    })

    var court = 1;
    $('.daily-byeditor').click(function () {

        if (court % 2 == 0) {
            // 第二次点击，直接点击保存，未选择城市
            if (arr.length == 0) {
                alert('您未选择城市，请先选择')
                // alert(court)
            } else if (arr.length == 0 && (court > 1)) {
                $(this).html('编辑')
                $(this).siblings('.daily-xzdt').slideUp();
                $(this).siblings('.daily-wxz').html('未选择地区');
            } else {
                // alert(court)
                $(this).html('编辑')
                $(this).siblings('.daily-xzdt').slideUp();
                $(this).siblings('.daily-wxz').html(arr.join('、'));
                court++;
                // alert('准备第三次点击')
            }
        } else {

            if (arr.length == 0 && (court > 1)) {
                $(this).html('编辑')
                $(this).siblings('.daily-xzdt').slideUp();
                $(this).siblings('.daily-wxz').html('未选择地区');
                // }else if(arr.length >= 0 ){

            } else if (arr.length != 0 && court > 1) {
                // 选中再次点击编辑
                $(this).html('保存')
                $(this).siblings('.daily-xzdt').slideDown();
                // alert('第次点击' + court);
                court++;
            } else {
                // 第一次点击
                $(this).html('保存')
                $(this).siblings('.daily-xzdt').slideDown();
                // alert('第一次点击' + court);
                court++;
            }

        }
    })


})
