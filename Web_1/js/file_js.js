var check=0;

function light_mode()
{
	var light = document.getElementById("lightmode");
	var div_light=document.getElementById('light-mode');
	if(check%2==0)
	{
	document.getElementById('header').style.background = 'black';
	light.remove();
	var text='<i class="far fa-moon theme" id="lightmode" onclick="return light_mode()">light mode</i>';
	var node = document.createElement('div');
	node.innerHTML = text; 
	div_light.appendChild(node);
	var list_a = document.querySelectorAll('ul>li>a');
	for(var i=0;i<list_a.length;i++)
	{
		list_a[i].style.color="white";
		list_a[i].addEventListener('mouseover',function()
		{
			this.style.color = '#3498db';
		});
		list_a[i].addEventListener('mouseout',function()
		{
			this.style.color = 'white';
		});
		
	}
	}
	else 
	{
		document.getElementById('header').style.background = 'white';
		light.remove();
		var text='<i class="far fa-sun theme" id="lightmode" onclick="return light_mode()">light mode</i>';
		var node = document.createElement('div');
		node.innerHTML = text; 
		div_light.appendChild(node);
		var list_a = document.querySelectorAll('ul>li>a');
		for(var i=0;i<list_a.length;i++)
		{
		list_a[i].style.color='#2c3e50';
		for(var i=0;i<list_a.length;i++)
	{
		list_a[i].style.color="#2c3e50";
		list_a[i].addEventListener('mouseover',function()
		{
			this.style.color = '#3498db';
		});
		list_a[i].addEventListener('mouseout',function()
		{
			this.style.color = '#2c3e50';
		});
		
	}
		}
	}
	check++;
	return false;
}

function clickProfile()
{
	var profile = document.getElementById('profile');
	window.open('https://www.facebook.com/hieu.langtu.7545');
	return false;	
}