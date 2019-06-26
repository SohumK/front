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

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBEZtRIahIHeHy_8K6yDW1oMABz7GJJWjg",
    authDomain: "skwebsite-80d06.firebaseapp.com",
    databaseURL: "https://skwebsite-80d06.firebaseio.com",
    projectId: "skwebsite-80d06",
    storageBucket: "",
    messagingSenderId: "708858055954",
    appId: "1:708858055954:web:390198b36f70c240"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-141267370-1', fucntion(){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-141267370-1');
});
