window.addEventListener("load",snapPixel);

function snapPixel(){
 var currentLocation = window.location.url;
 var descriptionPage = shopifyAnalytics.meta.idProduct;
 if(currentLocation === 1 && descriptionPage === shopifyAnalytics.meta){
     snaptr('track,PAGE_VIEW',{
         
     })
 }
}



    window.addEventListener('DOMContentload', myFunction); 

    function myFunction (){
     sessionStorage.idprdocut = shoify.analytics.idProduct;
    }
