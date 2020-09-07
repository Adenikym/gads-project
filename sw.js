self.addEventListener("install", evt =>{
    console.log("service worker installed")
});

//activate service worker

self.addEventListener("activate", evt =>{
    console.log("service worker activated")
});

//fetch events
self.addEventListener("fetch", evt =>{
//console.log("fetch event", evt)
//caching

});

