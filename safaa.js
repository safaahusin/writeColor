/*window.onload=(function(){
alert('Welcome');
}); 
*/
function fun(id)
{  
	var mydiv=document.getElementById(id);
	var resultdiv=document.getElementById("result");
	//resultdiv.value=document.defaultView.getComputedStyle(mydiv,null).getPropertyValue('background-color');
	var value=document.defaultView.getComputedStyle(mydiv,null).getPropertyValue('background-color');
	var arrResult=["","","",""];
     console.log(value);
	 
	for(var i=4,k=0;i<value.length-1;i++)
	{
		if(value[i]==',')
		{
			i++;
			k++;
		}
		else {
			console.log(value[i]);
			arrResult[k]+=value[i];
		}
	}
	
	
	for(var i=0;i<3;i++){
		arrResult[i]=1*arrResult[i];
	arrResult[i]=arrResult[i].toString(16);
	if(arrResult[i].length==1)
	{
		arrResult[i]="0"+arrResult[i];
	}
	
	}
	resultdiv.value=" "+"#"+arrResult[0]+arrResult[1]+arrResult[2];
	}
