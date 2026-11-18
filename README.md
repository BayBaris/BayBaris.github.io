# baybaris.github.io

Barış Karakaya'nın kişisel portfolyo sitesi: **https://baybaris.github.io**

BarCode Gaming görsel kimliğiyle (koyu ızgara zemin, `#D72638` vurgu, Chakra Petch başlıklar) hazırlanmış, tek sayfalık statik bir site. Derleme adımı ya da bağımlılık yok; düz HTML, CSS ve JavaScript.

## Yapı

```
index.html        Tüm içerik: ana menü, projeler, profil, kariyer, iletişim
css/style.css     Renkler en üstteki :root değişkenlerinde
js/main.js        Menü seçimi (fare, ↑ ↓, Esc), yetenek çubukları, yol haritası, giriş animasyonu
assets/           İndirilebilir CV: cv-baris-karakaya-tr.pdf
assets/brand/     BarCode Gaming işareti, favicon ve uygulama ikonu
```

## İçeriği güncellemek

- **Projeler, deneyimler, iletişim:** Hepsi `index.html` içinde, ilgili `<section>` altında.
- **Yetenek seviyesi:** İlgili satırdaki `data-level` değerini 1–6 arası değiştir; çubuklar sayfa açılırken bu değere göre çizilir.
- **CV:** Canva'dan PDF olarak indir ve aynı adla `assets/cv-baris-karakaya-tr.pdf` dosyasının üzerine yaz.

## Yerelde açmak

```
python -m http.server 8765
```

Sonra tarayıcıda `http://localhost:8765` adresine git.

## Yayın

Site GitHub Pages ile `main` dalının kökünden yayınlanıyor. `main` dalına yapılan her push siteyi 1–2 dakika içinde günceller.
