self.addEventListener("install", evt =>{
    console.log("service worker installed")
});

//activate service worker

self.addEventListener("activate", evt =>{
    console.log("service worker activated")
});