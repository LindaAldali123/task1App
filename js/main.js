
$(async function(){
	 getBpi("USD");
  });
		  async function getBpi(code) {
			const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'; // Will return a 404
			const fetchResult = fetch(URL);
			
			const response = await fetchResult;
		if (response.ok) {
			  let data = await response.json();
			  let desc=await data.bpi[code].description;
		let rate=await data.bpi[code].rate;
	//	const code=await data.bpi.code;
		document.getElementById("desc").innerHTML=desc;
		document.getElementById("code").innerHTML=code;
		document.getElementById("rate").innerHTML=rate;
			 // console.log(data);
		} else {
			  throw Error(response.statusText);
			  $(".err").show();  
			  console.error(error);
				//alert("Error connection");
				
			  }
		  };
		 
		  getBpi('javascript');
		  