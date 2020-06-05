/*$(async function(){
	getBpi("USD");
 });*/
 function onSuccess(){
console.log('succ');
 }
 function onError(){
	console.log('Error');  
 }
		 async function getBpi(code) {
		  try{ const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'; // Will return a 404
		   const fetchResult =await fetch(URL);
		   
		   const response = await fetchResult;
	   if (response.ok) {
			 let data = await response.json();
			 const promise=new Promise((resolve,reject)=>{
		   setTimeout(() =>{resolve()},2000)});
		   promise.then(onSuccess)
		   promise.catch(onError)
			 let desc=await data.bpi[code].description;
	   let rate=await data.bpi[code].rate;
   //	const code=await data.bpi.code;
	   document.getElementById("desc").innerHTML=desc;
	   document.getElementById("code").innerHTML=code;
	   document.getElementById("rate").innerHTML=rate;
			// console.log(data);
	   } else {
			 throw Error(response.statusText); 
			 console.error(error);
			   //alert("Error connection");
			   
			 }
			}
			catch{alert('Please Try again Later Connection Faild.')}
		 }
		
		// getBpi('javascript');
		 




/*const posts=[
	{title:'Post One',body:'This is post one'},
	{title:'Post Two',body:'This is post two'}
];
function getPosts(){
	setTimeout(()=>{
	 let output ='';
	 posts.forEach((post,index)=>{
		 output += '<li> ${post.title} </li>';

	 });
	 document.body.innerHTML=output;
	},1000);
}
function createPost(post){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			posts.push(post);

			const error=false;

			if(!error){
				resolve();

			}else{
				reject('Error : Something went Wrong');

			}
		},2000);	
	});

} */
//createPost ({title:'Post Three',body:'This is post three'})
//.then(getPosts)
//.catch(err => console.log(err));
//Async /Await
//async function init() {
//	await createPost ({title:'Post Three',body:'This is post three'})
//	getPosts();
//}

//init();
//Asunc /Await /Fetch
/*async function getBpi() {
const promise1=await	fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
const res=await  promise1;
const data=await res.json();
Promise.all([promise1]).then(((values)));
let desc=await data.pbi[code].description;
		let rate=await data.pbi[code].rate;
	//	const code=await data.bpi.code;
		document.getElementById("desc").innerHTML=desc;
		document.getElementById("code").innerHTML=code;
		document.getElementById("rate").innerHTML=rate;
}
getBpi(); */ 
//Promise.all
//const promise1=Promise.resolve('Hello World');
//const promise2=10;
//const promise3=new Promise((resolve,reject)=>
//setTimeout(resolve,2000,'GoodBy'));

//const promise4 = fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res =>
//res.json());

//Promise.all([promise1,promise2,promise3,promise4]).then(((values) 
//=> console.log(values)));


		 /*fetch ('https://api.coindesk.com/v1/bpi/currentprice.json',{
			 method='POST',
			 Headers:{
				 'Content-Type':'application/json'
			 },
			 body:JSON.stringify({

			})
			 }).then(res=>{
              return res.json()
			 })
			 .then(data=>console.log(data))
			 .catch(Error=>console.log('Error'))*/			 


		