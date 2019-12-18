$(function(){
	let index=0;
	
	$('img').click(function(){
		$(this).attr('class','active').siblings().removeAttr('class');
		index=$(this).index();
	});
	
	$('.tian').click(function(){
		//判断input是否为空
		if($('.shuliang').val()==''||$('.jiage').val()==''){
			alert('请输入内容');
			return false;
		}
		let tupian=$('img').eq(index).attr('src');
		console.log(tupian);
		
		let jiage=$('.jiage').val();//获取价格
		let shuliang=$('.shuliang').val();//获取数量
//		console.log(jiage);
		//创建新加的
		let xin=$(`
			<tr>
					<td><input type="checkbox"/></td>
					<td><img src="${tupian}"/></td>
					<td>${jiage}</td>
					<td>
						<button class="jia">+</button>
						<input type="text" value="${shuliang}"  class="sl"/>
						<button class="jian">-</button>
					</td>
					<td><span>3000</span></td>
					<td><button class="sc">删除</button></td>
				</tr>
		`);
		
		$('table').append(xin);//追加到table；
		
		
		$('.jiage').val('');//点击后清空
		$('.shuliang').val('');
		
		//数量加
		$('.jia').click(function(){
			let shu=$(this).next('input').val();//获取input框的值
			shu++;//点击一次
			$(this).next('input').val(shu);//赋值
			all();
			bian();
		});
		
		//数量减
		$('.jian').click(function(){
			let shu=$(this).prev('input').val();
			shu--;
			if(shu<1){
				let ok=confirm('是否删除');
				if(ok){
					$(this).parent().parent().remove();
				}else{
					shu=1;
				}
			}
			$(this).prev('input').val(shu);
			all();
			bian();
		});
		
		//初始化单价
		function bian(){
			$('span').each(function(){
				//获取数量
				let dj=parseInt($(this).parent().prev().find('input').val());
				console.log(dj);
				//获取价格
				let jg=parseInt($(this).parent().prev().prev().html());
				console.log(jg);
				//单价
				$(this).html(dj*jg);
			});
		}
		bian();
		
		//小结
		function all(){
			bian();
			let s=0;
			$('span').each(function(){
				let qian=Number($(this).html());
				s+=qian;
			});
			console.log(s);
			$('a').html(s);
		}
		all();
		
		//单行删除
		$('.sc').click(function(){
			$(this).parent().parent().remove();
			all();
		});
		
		//选中删除
		$('.xz').click(function(){
			$(':checked').each(function(){
				if($('：checked')){
					$(this).parent().parent().remove();
				}
			})
		})
	})
})