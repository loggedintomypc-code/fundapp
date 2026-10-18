# গ্রুপ তহবিল — ফাইল তালিকা
- index.html — অ্যাপ (সংস্করণ ২.১ — নতুন ডিজাইন ও নোটিশ বোর্ড)
- fonts/ — Hind Siliguri বাংলা ফন্ট (অ্যাপের ভেতরেই থাকে, অফলাইনেও কাজ করে; লাইসেন্স OFL.txt)
- config.js — Firebase সেটিং, অ্যাডমিন তালিকা, sheetUrl (Google Sheet ব্যাকআপ লিংক)
- sw.js — অফলাইন/আপডেট (বদলালে VERSION বাড়ান)
- manifest.json, icon-192.png, icon-512.png — ইনস্টল ও লোগো
- capacitor.config.json, package.json — APK বানানোর জন্য
- firestore.rules — Firebase Rules
Google Sheet: ../Code.gs (GitHub-এ নয়, Google Apps Script-এ বসাতে হবে)

## নোটিশ বোর্ড
অ্যাডমিন: আরও → নোটিশ বোর্ড (বা + বোতাম → নোটিশ)। নোটিশ থাকলে সব সদস্য হোম পেজে দেখবেন; কোনো নোটিশ না থাকলে অংশটি দেখা যায় না। "জরুরি" নোটিশ লগইনের সময় পপআপেও আসে।
নোটিশ Firestore-এর `common` কালেকশনে (kind: "notice") থাকে — Firebase Rules বদলাতে হবে না। Google Sheet সিঙ্ক নোটিশ ধরে না, তাই Sheet-এ কোনো বদল হবে না।
