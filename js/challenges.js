// # 1 Snap Business Center TITLE swap for 'Great Resource'
document.getElementsByClassName('ui h1')[0].innerHTML = "A great Resource!";

// # 2 lights off on acme, shopify website
//  REQUIRES TO TAKE A LOOK DEEPER ON ITS FUNCTIONALITY

document.getElementById('Email').addEventListener('input',()=>{
sessionStorage.email = document.getElementById('Email').value;

var loff =  'lights off';
var a = sessionStorage.email.includes(loff);
console.log('here we go ' + a);
if(a === true){
		document.querySelectorAll('div').forEach(i=>{i.style.background='black';});
		document.querySelectorAll('header').forEach(i=>{i.style.background='black';});
		document.querySelectorAll('footer').forEach(i=>{i.style.background='black';});
}
else if(a !== true){
		document.querySelectorAll('div').forEach(i=>{i.style.background='white';});
        document.querySelectorAll('header').forEach(i=>{i.style.background='white';});
		document.querySelectorAll('footer').forEach(i=>{i.style.background='white';});
}
})

// # 3 get bold 'sugar free tshirts' when hover at https://nibysklep.pl/

addEventListener('mouseover',(event)=>{event.target.style.fontWeight='1000';})
document.querySelector('h2').addEventListener('mouseout',(event)=>{event.target.style.fontWeight='initial';})

// # 4 https://www.sidemenclothing.com/collections/hoodies/products/sidenet-hoodie


var web = document.location.href.includes('products');
if(web===true){
sessionStorage.currency = ShopifyAnalytics.meta.currency;
 sessionStorage.productId = ShopifyAnalytics.meta.product.id;
 sessionStorage.categoryId = ShopifyAnalytics.meta.selectedVariantId;
 sessionStorage.prices = ShopifyAnalytics.meta.product.variants[0].price;
document.getElementsByTagName('button')[3].addEventListener('click', (event)=>{
  console.log(sessionStorage.currency + '\n' + sessionStorage.prices + '\n' + sessionStorage.productId + '\n'+ShopifyAnalytics.meta.selectedVariantId );
});
}



// #5 mi challenge is handleRequest
function preventDef() {
					 window.alert('aqui se envia la informacion del producto:\n Price: ' + ShopifyAnalytics.meta.product.variants[0].price +'\n Name: ' + ShopifyAnalytics.meta.product.variants[0].name +'\n Category: ' + ShopifyAnalytics.meta.selectedVariantId);
					 event.preventDefault();
					 document.forms[0].submit();
}
document.getElementsByTagName('button')[2].addEventListener("click", preventDef);
