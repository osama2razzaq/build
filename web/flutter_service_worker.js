'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "613580ba4094feadeca95a28d78af864",
"index.html": "b1b3ed2dcfa81f37e583b0b51ee229ea",
"/": "b1b3ed2dcfa81f37e583b0b51ee229ea",
"firebase-messaging-sw.js": "b57b52851ba1d9a496949b66d3a5df91",
"main.dart.js": "cca442894e52a3c7e87aa4dbee62946e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "61bc73ed65e6b1d95e1cd3bd686a69b4",
"assets/AssetManifest.json": "7f33f029dac82f498d6b321a6c3eb2c5",
"assets/NOTICES": "0277e35f85aef698947c2ec43891ab4f",
"assets/FontManifest.json": "6e55753ee5fbe2ae458cedbe86cf82c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "33169e9b943377e0fc9472c0940936d7",
"assets/fonts/MaterialIcons-Regular.otf": "1044aa6dd423034760cb8c9c29bfa292",
"assets/assets/file/states.json": "08be628e58fc0668343178d53a79a086",
"assets/assets/file/states-cities.json": "197d8e7cb83451656969af8b06499dfd",
"assets/assets/images/eita_logo.png": "026b6705671422af9f1be1816012cd8f",
"assets/assets/images/qrcode.png": "3afeb951430f88edd2817ac9d865df2b",
"assets/assets/images/esync_header.png": "e3033c578c36491096a67edd1aae25ee",
"assets/assets/images/lift2.png": "ada813f34342ffe8d1387a0208abbab5",
"assets/assets/images/lift3.png": "1268dc7a994addeee18b391fa8f975c1",
"assets/assets/images/lift1.png": "5a660336223dde55667f53c5b59ff716",
"assets/assets/images/escalator.png": "79621a8571836c54386bc51566f7edfb",
"assets/assets/images/nova_logo.png": "5995627883496398e150efe658168e0e",
"assets/assets/images/bg.jpg": "3f141336c2cf8ca94db50bfdf761d70c",
"assets/assets/icons/carCall.png": "c2bad22b05493a1be62d1c19a0f52e0a",
"assets/assets/icons/arrow-up-and-down-elevator.png": "2484f0f6e29a86952c32df955c79dae4",
"assets/assets/icons/icons8-location-96.png": "dbab5d8c4961be6075d6664cd505a69d",
"assets/assets/icons/details.png": "c8b80cad71e39ac682c04b79a4022037",
"assets/assets/icons/icons8-data-encryption-64.png": "2ca54fdb753ee4e2e69774059e4fe0d2",
"assets/assets/icons/icons8-info-64.png": "bc1dc23cc4e6f9cd8c66879cb70e4f34",
"assets/assets/icons/image_8.png": "60f0fe3964f3300a2142d752fd3fbce9",
"assets/assets/icons/hallCall.png": "17ade8d9e125b88a5ac612f147c90ef9",
"assets/assets/icons/notes.png": "401f583c1d8a48349cf8fea5ff44e4dc",
"assets/assets/icons/escalator.png": "767b0016b2c0423d7bdbc18b314226ce",
"assets/assets/icons/add_notes.png": "4626013c3ace2dceb4e8e80419445f18",
"assets/assets/icons/icons8-combo-chart-64.png": "4a1236ede3d36f65db7acda2d20e1485",
"assets/assets/icons/icon_ocation1.png": "b001a2f3e89d11738297c964fc135422",
"assets/assets/icons/icon_ocation2.png": "107aa608f3405d27ee50202a0afc2ea4",
"assets/assets/icons/door_open.png": "8787dc3be3e0356739f3c9c3158d327c",
"assets/assets/icons/icons8-info-64%2520(1).png": "2940b47e7867fb821b425b669674ef6e",
"assets/assets/icons/lift_icons.png": "64ed284dfcc738b2e44b406e156b4ae1",
"assets/assets/icons/motorStatus_icon.png": "2da28d8588cce8ab0f720781eeb54020",
"assets/assets/icons/door_close.png": "f90e5e758af6d2b8a2ce74de0c2e6760",
"assets/assets/icons/marker.png": "478c1d686b6b7e26d0a172b7089539de",
"assets/assets/lottie/door_open.json": "0a5db940681a340bd8293733619c2459",
"assets/assets/lottie/lift-arrow-up.json": "68f12d0a22cfd79ff70247725b2bc9fd",
"assets/assets/lottie/go_down.json": "649bfc974b42cd4d7941409535c0f6e3",
"assets/assets/lottie/go_up.json": "4484eaf38dfcf44509c0bab26c6b7ee9",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/poppins/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/assets/operation_mode_icons/SpecialService.png": "f70344c5bc9c194fe41221c0bb029a68",
"assets/assets/operation_mode_icons/inspection.png": "fdb28ba1c0f3c591ef25e8cf630f7962",
"assets/assets/operation_mode_icons/genSet.png": "6cf83cd10458462ac5a6d57e532d032f",
"assets/assets/operation_mode_icons/fireHoming.png": "56f6948cfff26fa4ff7219986b771cdd",
"assets/assets/operation_mode_icons/lock.png": "893a569172efde07c30d25ca0fa88332",
"assets/assets/operation_mode_icons/attendant.png": "caca8fdbe7b4666b2ec13350ef62ebcc",
"assets/assets/operation_mode_icons/emergency.png": "f183eb672706e4e4f873a00ba8121702",
"assets/assets/operation_mode_icons/outOfService.png": "02fc65ee0ba3d5da2a581aba3e28553d",
"assets/assets/operation_mode_icons/flood.png": "5f8d6e80c93c5d7df542f266ff8a9d48",
"assets/assets/operation_mode_icons/Normal.png": "d92a39f0ca2c6157ba1655512c279673",
"assets/assets/operation_mode_icons/evacuation.png": "15cc624b720c857a7979e5360fc75b2f",
"assets/assets/operation_mode_icons/VIP.png": "0e62348732a0fbb46ddb6e552fe18941",
"assets/assets/operation_mode_icons/full_load.png": "308563f84fdd5787d2547e4d3363b44f",
"assets/assets/operation_mode_icons/fireman.png": "19c9e5317ddd97f212c06e17c472e0f7",
"assets/assets/operation_mode_icons/earthquake.png": "b5267c2ccef38b478186b8be73a00bf5",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
