(function(e, t, n) {
  if (e.snaptr) return;
  var a = e.snaptr = function() {
    a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
  };
  a.queue = [];
  var s = 'script';
  r = t.createElement(s);
  r.async = !0;
  r.src = n;
  var u = t.getElementsByTagName(s)[0];
  u.parentNode.insertBefore(r, u);
})(window, document,
  'https://sc-static.net/scevent.min.js');

snaptr('init', '0b8d5865-1f54-4a8f-bb50-441971bd8919', {
  'user_email': '__INSERT_USER_EMAIL__'
});

snaptr('track', 'PAGE_VIEW');
//SNAP pixel: the code below will track add cart buttons and catching up the item id as well


window.addEventListener('DOMContentLoaded', SnapPixel);

function SnapPixel() {
  const num = document.querySelectorAll('button[name="add"]');
  if (ShopifyAnalytics.meta.page.pageType.includes('home') || ShopifyAnalytics.meta.page.pageType.includes('collection')) {
    return true;
  }

    num.forEach(conItems);
  function conItems(item, index, arr) {
    num[index].addEventListener('click', () => {
      sessionStorage.itemId = JSON.parse(document.querySelectorAll('div[class="hide"')[index].innerText)[0].id;
      sessionStorage.itemPrice = JSON.parse(document.querySelectorAll('div[class="hide"')[index].innerText)[0].price / 100;
      snaptr('track', 'ADD_CART', {
        'item_ids': sessionStorage.itemId,
        'price': sessionStorage.itemPrice
      });
    })
  }
}

// this is going to look for the JSON object and scrap the item_ids out from it.
window.addEventListener('DOMContentLoaded', () => {

  if (ShopifyAnalytics.meta.page.pageType.includes('home') || ShopifyAnalytics.meta.page.pageType.includes('collection')) {
    const num = document.querySelectorAll('button[name="add"]');
    num.forEach(conItems);

    function conItems(item, index, arr) {
      num[index].addEventListener('click', () => {
        sessionStorage.itemId = JSON.parse(document.querySelectorAll('div[class="hide"')[index].innerText)[0].id;
        sessionStorage.itemPrice = JSON.parse(document.querySelectorAll('div[class="hide"')[index].innerText)[0].price / 100;
        snaptr('track', 'ADD_CART', {
          'item_ids': sessionStorage.itemId,
          'price': sessionStorage.itemPrice
        });
      })
    }
  }
})

// this version will check if the website has any data for item_ids then will include to the script or then will fire the the event instead

window.addEventListener('load', pEvents);

function pEvents(){
document.querySelector('ProductForm__AddToCart Button Button--primary Button--full').addEventListener('click', fnAdd);
    function fnAdd(){
        if(ShopifyAnalytics.meta.selectedVariantId){
            snaptr('track', 'ADD_CART',{
                'item_ids': ShopifyAnalytics.meta.selectedVariantId
            })
        } else{
            snaptr('track', 'ADD_CART');
        }
    }
}

// the use of the method slice.

window.addEventListener('DOMContentLoaded', () => {
 if (ShopifyAnalytics.meta.page.pageType.includes('home') || ShopifyAnalytics.meta.page.pageType.includes('collection')) {
   document.querySelectorAll('.add-to-cart').forEach(item => {
     item.addEventListener('click', () => {
       sessionStorage.itemId = ShopifyAnalytics.meta.selectedVariantId;
       snaptr('track', 'ADD_CART', {
         'item_category': item.getAttribute('id').slice(10),
         'item_ids' : sessionStorage.itemId,
         'currency' : ShopifyAnalytics.meta.currency
       })
     })
   })
 }
})
