<!-- This function will load script and call the callback once the script has loaded
function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

<!-- Global site tag (gtag.js) - Google Analytics -->
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-141267370-1', fucntion(){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-141267370-1');
});
