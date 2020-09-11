const staticName="site-static-v4";

const dynamicCache = "site-dynamic-v3"
const assets = [
    "./",
    "/index.html",
    "assets/scripts/app.js",
    "assets/scripts/smash.js",
    "/assets/css/style.css",
    "/assets/images/pouring.jpg",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap",
    "/fallback.html"
];

// cache size limiting

const limitCache=(name,size) => (
    caches.open(name).then(cache => {
        cache.keys().then(keys =>{
            if (keys.length>size){
                cache.delete(keys[0]).then(limitCache(name, size));
            }
        })

    })
)



self.addEventListener("install", evt =>{
console.log("caching all assets")
    evt.waitUntil(caches.open(staticName).then(
      cache=>{
         cache.addAll(assets)
      }  
    ));
    console.log("service worker installed")
  
});

//activate service worker

self.addEventListener("activate", evt =>{
    console.log("service worker activated");
    evt.waitUntil(
        caches.keys().then(
            keys =>{
               // console.log(keys);
               return Promise.all(
                   keys.filter(key => key !== staticName && key !== dynamicCache  )
                   .map(key => caches.delete(key))
               )

            }
        )
    )
});

//fetch events
self.addEventListener("fetch", evt =>{

    evt.respondWith(
        caches.match(evt.request).then(
          cacheRes => {
              return cacheRes || fetch(evt.request).then(
                  fetchRes =>{
                      return caches.open(dynamicCache).then(
                          cache =>{
                              cache.put(
                                  evt.request.url, fetchRes.clone() );
                                  limitCache(dynamicCache,15);
                                  return fetchRes;
                                  
                          }
                      )
                  }
              );
          }  
        ).catch(() =>{
            if (evt.request.url.indexOf(".html")> -1)
         caches.match('/fallback.html')})
    );

//console.log("fetch event", evt)
//caching

});

