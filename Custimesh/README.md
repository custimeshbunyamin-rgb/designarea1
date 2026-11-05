# CUSTIMESH — 3D Mesh Modülü (Rev16) & Kalınlık Analizi (v4.8) Masaüstü Yazılımı

**CUSTIMESH**, subperiosteal dental implant, kraniyomaksillofasiyal (CMF) plak ve medikal 3D CAD iş akışları için geliştirilmiş profesyonel bir **STL Vaka Görüntüleme, Custom Mesh Tasarım ve Kalınlık Analizi** masaüstü uygulamasıdır.

---

## ⚡ Hızlı Başlangıç (Kurulumsuz Doğrudan Çalıştırma)

Uygulamayı herhangi bir ek derleyici (Rust/Node.js) yüklemeden anında bağımsız masaüstü yazılımı olarak açabilirsiniz:

1. **Yöntem 1 (Masaüstü Kısayolu):** Masaüstünüzdeki **CUSTIMESH** ikonuna çift tıklayın.
2. **Yöntem 2 (.EXE ile Başlatma):** Klasördeki **Custimesh.exe** dosyasına çift tıklayın (İsterseniz sağ tıklayıp Görev Çubuğuna sabitleyebilirsiniz).
3. **Yöntem 3 (Batch Betiği):** Klasördeki **launch-desktop.bat** dosyasını çalıştırın.

---

## 🏗️ Proje Mimarisi

`
Custimesh/
├── Custimesh.exe             # C# ile derlenmiş bağımsız yerel masaüstü başlatıcı (.exe)
├── launch-desktop.bat        # Alternatif WebView2/Edge App masaüstü başlatıcı betiği
├── package.json              # NPM ve Tauri v2 yapılandırması
├── README.md                 # Detaylı mimari ve kullanım kılavuzu
├── custimesh_app.ico         # Uygulamanın gömülü Windows ikonu
├── samples/                  # Örnek ve klinik test STL modelleri
│   ├── ornek_implant_surface.stl
│   ├── ornek_hedef_kemik.stl
│   ├── mandible.stl
│   ├── teeth.stl
│   └── nerve.stl
├── src-tauri/                # Tauri 2.0 Rust Arka Ucu (.exe & .msi derleme altyapısı)
│   ├── Cargo.toml            # Rust bağımlılıkları
│   ├── tauri.conf.json       # Pencere ayarları (1600x1000), ikonlar ve güvenlik
│   ├── build.rs              # Tauri derleme kancası
│   ├── icons/                # 32x32, 128x128 ve .ico dosyaları
│   └── src/
│       ├── main.rs           # Windows subsystem giriş noktası
│       └── lib.rs            # Yerel Rust API komutları
└── src/                      # Ön Yüz (Three.js WebGL + Manifold-3D WASM + Rev16 + v4.8)
    ├── index.html            # Ana CAD vaka arayüzü, Sol panel, Sağ komut paneli, Kalınlık paneli
    ├── css/
    │   └── style.css         # Medikal CAD teması, panel stilleri ve responsive kurallar
    └── js/
        ├── kernel-data.js    # Gömülü Manifold-3D WASM çekirdeği ve Hekim HTML şablonu
        ├── app.js            # Three.js motoru, CMCore geometrik araçlar, Kalınlık analizi ve UI
        └── tauri-bridge.js   # Yerel dosya açma/kaydetme diyalog köprüsü
`

---

## 🛠️ Kullanılan Teknolojiler

### 1. custimesh-desktop Projesindeki Altyapı
- **Tauri v2 (Rust):** Electron alternatifi, ultra hafif (~15 MB) masaüstü çerçevesi.
- **Node.js & NPM:** Proje yönetimi ve @tauri-apps/cli komutları.
- **WebView2 (Chromium):** Windows yerleşik donanım hızlandırmalı arayüz motoru.
- **Three.js & TrackballControls:** 3D STL render, gölgelendirme, kamera ve farenin 3 eksenli serbest kontrolü.
- **Manifold-3D WebAssembly (WASM):** C++ tabanlı, yüksek hassasiyetli 3D katı modelleme ve manifold boolean çekirdeği.

### 2. Bizim Eklediğimiz ve Derlediğimiz Yerel Katman
- **.NET Framework & C# (csc.exe):** Sisteme harici Rust/Node.js kurma zorunluluğunu ortadan kaldıran, Windows API ile doğrudan çalışan yerel **Custimesh.exe**.
- **Chromium Standalone App Mode (--app= & --user-data-dir):** URL çubuğu, sekmeler ve menüler olmadan bağımsız bir CAD penceresi açar ve tarayıcı geçmişinizle karışmaz.
- **Gömülü Windows ICO:** Özel CUSTIMESH logosundan derlenen gerçek Windows ikonu.
- **Revizyon 16 Güncellemesi:** Sağ komut paneli (ight-cmd-panel), hızlı komut ızgarası (green-cmd-grid) ve sınırsız geri alma (Undo).
- **Kalınlık Analizi v4.8 Entegrasyonu:** Gerçek zamanlı et kalınlığı renk haritası (Mavi -> Kırmızı), interaktif yüzey probu ve CSV dışa aktarımı.

---

## 🚀 Tauri v2 ile .msi Kurulum Paketi Derleme

Bilgisayarınıza Node.js ve Rust kurulduğunda doğrudan dağıtılabilir .msi oluşturabilirsiniz:

`ash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirici modunda başlatın
npm run start

# 3. Bağımsız Windows .msi / .exe paketini derleyin
npm run build
`

---

## ⌨️ Klavye Kısayolları

- **Ctrl + O**: STL Dosyası Yükle (Çoklu seçim destekli)
- **Ctrl + S**: Seçili STL Modelini İndir / Kaydet (Ctrl + Shift + S: Hekim Vaka HTML'ini Kaydet)
- **Ctrl + Z**: Son İşlemi veya Çizilen Curve Noktasını Geri Al (Undo)
- **Delete**: Aktif Trim Curve'ünü veya Seçili Modeli Sil
- **F**: Modelleri Kadraja Al (Fit to View)
- **R**: Görüş Yönünü Sıfırla (İzometrik)
- **H / V**: Modeli Ekranda Yatay / Dikey Hizala
- **Q / E**: Ekran Düzleminde ±15° Çevir