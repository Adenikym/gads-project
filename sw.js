const staticName="site-static";
const assets = [
    
    "/index.html",
    "assets/scripts/app.js",
    "assets/scripts/smash.js",
    "/assets/css/style.css",
    "/assets/images/pouring.jpg",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap"
];

self.addEventListener("install", evt =>{

    evt.waitUntil(caches.open(staticName).then(
      cache=>{
         cache.addAll(assets)
      }  
    ));
   // console.log("service worker installed")
  
});

//activate service worker

self.addEventListener("activate", evt =>{
    console.log("service worker activated")
});

//fetch events
self.addEventListener("fetch", evt =>{

    evt.respondWith(
        caches.match(evt.request).then(
          cacheRes => {
              return cacheRes || fetch(evt.request)
          }  
        )
    )

//console.log("fetch event", evt)
//caching

});

