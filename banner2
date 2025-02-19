(function () {
    // Kullanıcının tercihini kontrol et
    if (localStorage.getItem("cookie_consent")) return;

    // Banner'ı oluştur
    var banner = document.createElement("div");
    banner.style.position = "absolute";
    banner.style.bottom = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#222";
    banner.style.color = "#fff";
    banner.style.textAlign = "center";
    banner.style.padding = "15px";
    banner.style.boxShadow = "0 -2px 5px rgba(0,0,0,0.2)";
    banner.style.zIndex = "9999";
    banner.style.fontSize = "16px";

    // Banner içeriği
    banner.innerHTML = `
        <p style="margin: 0; display: inline-block;">
            Web sitemiz, size en iyi deneyimi sunmak için çerezleri kullanır. 
            <a href="https://ornek.com/cerez-politikasi" style="color: #4da6ff; text-decoration: underline;">Daha fazla bilgi</a>
        </p>
        <button id="acceptCookies" style="margin-left: 15px; padding: 8px 15px; background: #4CAF50; color: #fff; border: none; cursor: pointer; border-radius: 5px;">Kabul Et</button>
        <button id="declineCookies" style="margin-left: 5px; padding: 8px 15px; background: #f44336; color: #fff; border: none; cursor: pointer; border-radius: 5px;">Reddet</button>
    `;

    // Sayfanın altına ekle
    document.body.appendChild(banner);

    // Butonlara event ekle
    document.getElementById("acceptCookies").addEventListener("click", function () {
        localStorage.setItem("cookie_consent", "accepted");
        banner.remove();
    });

    document.getElementById("declineCookies").addEventListener("click", function () {
        localStorage.setItem("cookie_consent", "declined");
        banner.remove();
    });
})();
