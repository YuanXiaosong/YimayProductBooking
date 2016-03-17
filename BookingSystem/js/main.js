/*
 *@name: main script
 *@author: Xiaosong
 *@date: 2016.3.10
 */

//激活按钮状态
 $(function() {
  $(".btn").click(function() {
    $(this).button('loading').delay(1000)
  });
});

//登录表单验证
$(function() {
  $("form :input.required").each(function() {
    var $required = $("<strong class="high">*</strong>");
    $(this).parent().append($required);
  });

  //文本框失去焦点
  $("form :input").blur(function() {
    var $parent = $(this).parent();
    $parent.find(".formtips").remove();
  });

  //验证用户名
  if ( $(this).is('#cardnumber')) {
    if (this.value == "" || this.value.length < 6) {
      var errorMsg = '您输入的卡号少于6位！'；
      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
    }else{
      var okMsg = '输入正确！';
      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
    }
  }
});