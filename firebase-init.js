<script type="module">
  // استدعاء وظائف Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

  // إعدادات Firebase الخاصة بموقعك
  const firebaseConfig = {
    apiKey: "AIzaSyCgwSsXr3iuFofbbjojAVbz8wKfisntOlc",
    authDomain: "baynelsotoor.firebaseapp.com",
    projectId: "baynelsotoor",
    storageBucket: "baynelsotoor.appspot.com", // ← ✅ تم التصحيح هنا
    messagingSenderId: "1039807635070",
    appId: "1:1039807635070:web:5b02088c19edb30a68822f"
  };

  // تفعيل Firebase
  const app = initializeApp(firebaseConfig);
</script>
