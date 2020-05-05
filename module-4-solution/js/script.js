var arr=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(var i=0;i<arr.length;i++)
{
	if(arr[i][0]=="j" || arr[i][0]=="J")
	{ 
         b.speak(arr[i]);
	}
	else
	{
		h.speak(arr[i]);
	}
}
