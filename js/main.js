$(function(){
	getBpi("USD");
  });
  function getBpi(code)
  { $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json",function(data)
	 {
		var desc=data.bpi[code].description;
		var rate= data.bpi[code].rate;
	   
		document.getElementById("desc").innerHTML=desc;
		document.getElementById("code").innerHTML=code;
		document.getElementById("rate").innerHTML=rate;
  
  
  
	 
			 
		   });}