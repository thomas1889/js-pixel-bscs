//     Snap Pixel Code

(function (e, t, n) {
    if (e.snaptr) return;
    var a = e.snaptr = function () {
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

/* point #1-  */
snaptr('init', 'xxx_INSERT_YOUR_PIXEL_ID_xxx', 
{});
/* ----- #1 done ----- */

/* point #2-  */
window.addEventListener('load', myFuntion);
var usrname;

function myFuntion() {
    snaptr('track', 'PAGE_VIEW');
    /* ----- #2 done ----- */

    /*  point #3-  */
    var url = 'https://acmetnb.myshopify.com/cart/add'; //add to cart form actionING
    var f = window.document.forms[0].action; // product form URL 
    var b = document.getElementsByTagName("BUTTON")[2]; ////Buy it Now button tested

    if (f === url) {
        console.log('Here it, PRODUCT PAGE');
        snaptr('track', 'VIEW_CONTENT', {
            'item_category': ShopifyAnalytics.meta.product.id,
            'item_id': ShopifyAnalytics.meta.selectedVariantId,
        }); /* ----- #3 done ----- */

        /*  point #4-  */
        document.getElementById('addToCart-product-template').addEventListener('click', () => {
            snaptr('track', 'ADD_CART', {
                'item_category': ShopifyAnalytics.meta.product.id,
                'item_ids': ShopifyAnalytics.meta.selectedVariantId,
                'currency': ShopifyAnalytics.meta.currency,
                'price': ShopifyAnalytics.meta.product.variants[0].price
            });
        }); /* ----- #4 done ----- */

        console.log('success!!');

        /*  point #5-  */

        document.getElementsByTagName('button')[2].addEventListener("click", preventDef, false);

        function preventDef(event) {
            snaptr('track', 'ADD_CART', {
                'item_category': ShopifyAnalytics.meta.product.id,
                'item_ids': ShopifyAnalytics.meta.selectedVariantId
            });
            snaptr('track,', 'CHECKOUT');
        } /* ----- #5 done ----- */

        /*  point #6-  */

        document.getElementById('checkout').addEventListener('click', () => {
            snaptr('track,', 'CHECKOUT');
        }); /* ----- #6 done ----- */
        

    } else {
        /*  point #7-  */
        document.getElementById('subscribe').addEventListener('click', ()=>{
            usrname =  document.getElementById('Email').nodeValue;
            return usrname;
            snaptr('track', 'SIGN_UP');
        })
        snaptr('init', 'asdjbjkjbq123412jkb12k3bk123kj123kb', {'user_email': usrname});
        console.log('this is not a product page');
        /* ----- #7 done ----- */
    }
}



