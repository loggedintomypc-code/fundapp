// অ্যাপ আপডেট দিতে হলে নিচের VERSION সংখ্যা বাড়িয়ে ফাইল আপলোড করুন
const VERSION="v21",C="fund-"+VERSION,SHELL=["./","index.html","manifest.json","icon-192.png","icon-512.png","fonts/hind-bengali-400.woff2","fonts/hind-bengali-500.woff2","fonts/hind-bengali-600.woff2","fonts/hind-bengali-700.woff2","fonts/hind-latin-400.woff2","fonts/hind-latin-600.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);if(e.request.method!="GET"||(u.origin!=location.origin&&u.hostname!="www.gstatic.com"))return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x))}return r}).catch(()=>caches.match(e.request)))});
