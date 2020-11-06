
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');

snaptr('init', '0b8d5865-1f54-4a8f-bb50-441971bd8919', {
'user_email': '__INSERT_USER_EMAIL__'
});

snaptr('track', 'PAGE_VIEW');
//SNAP pixel: the code below will track add cart buttons and catching up the item id as well
window.addEventListener('DOMContentLoaded', SnapPixel);

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
