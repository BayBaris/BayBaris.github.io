# baybaris.github.io

Barış Karakaya'nın kişisel portfolyo sitesi. BarCode Gaming görsel kimliğiyle (koyu ızgara zemin, `#D72638` vurgu, Chakra Petch başlıklar) hazırlanmış tek sayfalık statik site.

## Yapı

```
index.html        Tüm içerik: ana menü, projeler, profil, kariyer, iletişim
css/style.css     Renkler en üstteki :root değişkenlerinde
js/main.js        Menü seçimi (fare, ↑ ↓, Enter), yetenek çubukları, giriş animasyonu
assets/           CV PDF'i buraya: cv-baris-karakaya-tr.pdf
assets/brand/     BarCode Gaming işareti, favicon ve uygulama ikonu (logo kitinden)
```

Yetenek seviyesini değiştirmek için `index.html` içinde ilgili satırdaki `data-level="4"` değerini 1–6 arası değiştir.

## Yerelde açmak

```
python -m http.server 8765
```

Sonra tarayıcıda `http://localhost:8765`.

## Yayına almak (GitHub Pages, ücretsiz)

1. GitHub'da adı tam olarak **`BayBaris.github.io`** olan herkese açık bir depo oluştur.
2. Bu klasörü o depoya gönder:
   ```
   git init
   git add .
   git commit -m "Portfolyo sitesinin ilk sürümü"
   git branch -M main
   git remote add origin https://github.com/BayBaris/BayBaris.github.io.git
   git push -u origin main
   ```
3. Depoda **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`** seç, kaydet.
4. 1–2 dakika sonra site `https://baybaris.github.io` adresinde yayında. Sonraki her `git push` siteyi kendiliğinden günceller.

## Yayından önce

- Canva'dan CV'yi PDF olarak indir, `assets/cv-baris-karakaya-tr.pdf` adıyla koy. Dosya yoksa "CV İndir" bağlantısı 404 verir.
