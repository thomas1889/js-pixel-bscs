! function (e) {
    e.addEventListener("DOMContentLoaded", function () {
        var t;
        null !== e.querySelector('form[action^="/contact"] input[name="form_type"][value="contact"]') && (window.Shopify = window.Shopify || {},
             window.Shopify.recaptchaV3 = window.Shopify.recaptchaV3 || {
            siteKey: "6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9"
        },
        (t = e.createElement("script")).setAttribute("src", "https://cdn.shopify.com/shopifycloud/storefront-recaptcha-v3/v0.1/index.js"),
        e.body.appendChild(t))
    })
}(document);



/* ---------------- prevent default event  -------------------*/

function addHandler() {
    document.getElementsByTagName('button')[2].addEventListener("click", 
      preventDef, false);
  }
  function preventDef(event) {
    event.preventDefault();
    window.alert('finally this shit does work \n Now it is time to code biotch!');
    document.forms[0].submit();
    
  }

// SHORTER VERSION FOR THE SAME FUNCTIONALITY -----  
//should be tested to get better understanding why that does stop the default form ,
// potentially it needs another event listener for submit then stop from there

  function preventDef(event) {
    window.alert('aqui se envia la informacion del producto' + '\n' + ' ' + ShopifyAnalytics.meta.product.id);
    window.alert('aqui ahora se envia para la parte normal del evento sin cambios');
    event.preventDefault();
    window.alert('finally this shit does work \n Now it is time to code biotch!');
    document.forms[0].submit();
}
document.getElementsByTagName('button')[2].addEventListener("click", preventDef);



// Here you will find a method that can insert a rule into CSS styling sheet
document.styleSheets[0].insertRule('h1:hover{font-weight: bold !important}');