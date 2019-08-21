// JavaScript Document

$(function(){
	//yzm
	$('#getyzm').click(function(){
		var formid = $(this).attr("data");
		var Myphone=$('#tel').val();
		if(Myphone==''){   //验证手机号是否为空
			alert('请填写手机号');
			return false;
			}
		var reg=/^0?1[3456789]\d{9}$/; //手机号正则
		if(!reg.test(Myphone)){   //验证手机号是否正确
			alert('请填写正确的手机号！');
			return false;
			}
		$('#getyzm').hide();
		$('#daojishi').show();
		$.ajax({
			  url: 'http://www.zgjcks.com/index.php?m=formguide&c=forms&a=send_sms&formid=1215&siteid=5',
			  type: 'GET',
			  dataType: 'jsonp',
			  data: {phone: Myphone},
			  success: function(json) {
				if (json.status == 1) {
					$('#daojishi').show()
					$('#getyzm').hide()
					runcount(60)
					alert('发送成功')
				}  else {
					alert(json.msg);

				}
			}
		})
})
//倒计时函数
function runcount(t){
	
 if(t>0){
	 document.getElementById('daojishi').innerHTML=t+'S';
	 t--;
	 setTimeout(function(){
		 runcount(t)
		 },1000)
	 }else{
		 $('#getyzm').show();
		 $('#daojishi').hide();
		 }
 }
 
 
 
// $(function(){
// 	$('.dodosubmit').click(function(){
// 		$('.cover').hide()
// 		})
		
})