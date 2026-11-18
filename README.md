# baybaris.github.io

Merhaba, ben Barış. Burası kişisel portfolyo sitemin kaynak kodu: **https://baybaris.github.io**

Bilgisayar mühendisiyim; oyun geliştirme ve oyunlaştırma üzerine çalışıyorum. Siteyi kendi markam BarCode Gaming'in görsel kimliğiyle hazırladım: koyu ızgara zemin, `#D72638` vurgu ve Chakra Petch başlıklar. Projelerimi, deneyimlerimi ve bana nasıl ulaşabileceğini tek sayfada bulabilirsin.

Derleme adımı ya da bağımlılık yok; düz HTML, CSS ve JavaScript.

## Yapı

```
index.html        Tüm içerik: ana menü, projeler, profil, kariyer, iletişim
css/style.css     Renkler en üstteki :root değişkenlerinde
js/main.js        Menü seçimi (fare, ↑ ↓, Esc), yetenek çubukları, yol haritası, giriş animasyonu
assets/           İndirilebilir CV: cv-baris-karakaya-tr.pdf
assets/brand/     BarCode Gaming işareti, favicon ve uygulama ikonu
```

## Güncellerken

- Projeler, deneyimler ve iletişim bilgileri `index.html` içinde, ilgili `<section>` altında.
- Bir yeteneğin seviyesini değiştirmek için o satırdaki `data-level` değerini 1–6 arası güncelliyorum; çubuklar sayfa açılırken buna göre çiziliyor.
- CV'yi güncellediğimde Canva'dan PDF olarak indirip aynı adla `assets/cv-baris-karakaya-tr.pdf` dosyasının üzerine yazıyorum.

## Yerelde açmak

```
python -m http.server 8765
```

Sonra tarayıcıda `http://localhost:8765`.

## Yayın

Site GitHub Pages'te `main` dalından yayınlanıyor; her push 1–2 dakika içinde canlıya çıkıyor.
