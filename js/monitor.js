$(document).ready(function() {
	mem={
		used:0,
		free:0,
		shrd:0,
		buff:0,
		cached:0,
	}
	
	cpu={
		usr:0,
		sys:0,
		nic:0,
		idle:0,
		io:0,
		irq:0,
		sirq:0
	}
	led={
		led0:1,
		led1:1,
		led2:1,
		led3:1,
	}
	setInterval(get_led,1000)
	setInterval(get_top,2000)
});

/**
 * 获取top命令的内容
 */
function get_top(){
	$.ajax({
		url: 'top.cgi',
		type: 'GET',
		success: res => {
			res=res.split('Load average')[0]
			var arr=res.split(':')
			var memInfo=arr[1]
			var cpuInfo=arr[2]
			
			memInfo=memInfo.split(',')
			// for (let str in memInfo) {
			// 	let arr=str.split(' ')
			// 	let key=arr[2]
			// 	let value=arr[1]
			// 	mem[key]=value
			// }
			mem.used=memInfo[0].split(' ')[1]
			mem.free=memInfo[1].split(' ')[1]
			mem.shrd=memInfo[2].split(' ')[1]
			mem.buff=memInfo[3].split(' ')[1]
			mem.cached=memInfo[4].split(' ')[1]
			
			cpuInfo=cpuInfo.split(' ')
			cpu.usr=cpuInfo[1]
			cpu.sys=cpuInfo[3]
			cpu.nic=cpuInfo[5]
			cpu.idle=cpuInfo[7]
			cpu.io=cpuInfo[9]
			cpu.irq=cpuInfo[11]
			cpu.sirq=cpuInfo[13]		
				
			reload_mem_cpu()
		},
		error: (xhr, status, error) => console.log('[Status]', status, '\n[Error]', error),
		timeout: 5000
	})
}

/**
 * 获取LED信息
 */
function get_led(){
        console.log('send') 
	$.ajax({
		url: 'led.cgi',
		type: 'GET',
		success: res => {
			res=res.split(' ')
			led.led0=res[0]
			led.led1=res[1]
			led.led2=res[2]
			led.led3=res[3]
			reload_led()
		},
		error: (xhr, status, error) => console.log('[Status]', status, '\n[Error]', error),
		timeout: 5000
	})
}

/**
 * 刷新
 */
function reload_mem_cpu(){
	$('#Mem-used span').text(mem.used)
	$('#Mem-free span').text(mem.free)
	$('#Mem-shrd span').text(mem.shrd)
	$('#Mem-buff span').text(mem.buff)
	$('#Mem-cached span').text(mem.cached)
	
	$('#CPU-usr').text(cpu.usr)
	$('#CPU-sys').text(cpu.sys)
}

function reload_led(){
	if (led.led0==0){
		$('#led0').removeClass('bg-black')
		$('#led0').addClass('bg-red')
	}else{
		$('#led0').removeClass('bg-red')
		$('#led0').addClass('bg-black')
	}
	if (led.led1==0){
		$('#led1').removeClass('bg-black')
		$('#led1').addClass('bg-red')
	}else{
		$('#led1').removeClass('bg-red')
		$('#led1').addClass('bg-black')
	}
	if (led.led2==0){
		$('#led2').removeClass('bg-black')
		$('#led2').addClass('bg-red')
	}else{
		$('#led2').removeClass('bg-red')
		$('#led2').addClass('bg-black')
	}
	if (led.led3==0){
		$('#led3').removeClass('bg-black')
		$('#led3').addClass('bg-red')
	}else{
		$('#led3').removeClass('bg-red')
		$('#led3').addClass('bg-black')
	}
}