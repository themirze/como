(function() {
    // Banner'ı oluştur
    var banner = document.createElement("div");
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#ffcc00";
    banner.style.color = "#000";
    banner.style.textAlign = "center";
    banner.style.padding = "10px";
    banner.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    banner.style.zIndex = "9999";
    banner.innerHTML = "Bu bir örnek banner! <a href='https://ornek.com' style='color:#000; text-decoration:underline;'>Detaylar</a>";

    // Sayfanın başına ekle
    document.body.insertBefore(banner, document.body.firstChild);
})();
