// JavaScript Document

$(function(){
	//yzm
	$('#getyzm').click(function(){
		var formid = $(this).attr("data");
		var Myphone=$('#tel').val();
		if(Myphone==''){   //��֤�ֻ����Ƿ�Ϊ��
			alert('����д�ֻ���');
			return false;
			}
		var reg=/^0?1[3456789]\d{9}$/; //�ֻ�������
		if(!reg.test(Myphone)){   //��֤�ֻ����Ƿ���ȷ
			alert('����д��ȷ���ֻ��ţ�');
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
					alert('���ͳɹ�')
				}  else {
					alert(json.msg);

				}
			}
		})
})
//����ʱ����
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