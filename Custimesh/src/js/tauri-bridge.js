/**
 * CUSTIMESH - Tauri v2 Masaüstü Köprüsü & Yerel Dosya Sistemi Entegrasyonu (Revizyon 15)
 * Tauri v2 ortamında yerel çoklu STL açma, STL/HTML/PNG farklı kaydetme diyalogları ve
 * pencere kontrollerini sağlar; WebView2 / Tarayıcı modunda kesintisiz standart indirmeye döner.
 */

const TauriBridge = (() => {
  const isTauri = typeof window !== "undefined" && (!!window.__TAURI__ || !!window.__TAURI_INTERNALS__);

  /**
   * Çoklu STL dosyası açma diyalogu (Tauri v2 yerel diyalog -> File[] nesneleri)
   * @returns {Promise<{ supported: boolean, files: File[] }>}
   */
  async function openSTLFilesDialog() {
    if (isTauri && window.__TAURI__ && window.__TAURI__.dialog && window.__TAURI__.fs) {
      try {
        const selected = await window.__TAURI__.dialog.open({
          multiple: true,
          filters: [
            { name: "STL 3D Mesh Modelleri (*.stl)", extensions: ["stl", "STL"] }
          ]
        });

        if (!selected) {
          return { supported: true, files: [] };
        }

        const list = Array.isArray(selected) ? selected : [selected];
        const files = [];
        for (const item of list) {
          const filePath = typeof item === "string" ? item : item.path;
          if (!filePath) continue;
          const fileName = filePath.split(/[/\\]/).pop() || "model.stl";
          const bytes = await window.__TAURI__.fs.readFile(filePath);
          const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
          files.push(new File([u8], fileName, { type: "model/stl" }));
        }
        return { supported: true, files };
      } catch (err) {
        console.warn("Tauri çoklu STL açma hatası, standart dosya seçiciye dönülüyor:", err);
      }
    }
    return { supported: false, files: [] };
  }

  /**
   * Genel amaçlı yerel dosya kaydetme yardımcısı
   */
  async function saveBlobWithFilter(blob, defaultFileName, filterName, extensions) {
    if (isTauri && window.__TAURI__ && window.__TAURI__.dialog && window.__TAURI__.fs) {
      try {
        const savePath = await window.__TAURI__.dialog.save({
          defaultPath: defaultFileName,
          filters: [{ name: filterName, extensions }]
        });

        if (savePath) {
          const arrayBuffer = await blob.arrayBuffer();
          await window.__TAURI__.fs.writeFile(savePath, new Uint8Array(arrayBuffer));
          return savePath;
        }
        return null;
      } catch (err) {
        console.warn("Tauri kaydetme hatası, tarayıcı indirmesine dönülüyor:", err);
      }
    }

    // WebView2 / Tarayıcı Geri Dönüşü
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = defaultFileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 25000);
    return defaultFileName;
  }

  async function saveSTLDialog(blob, defaultFileName = "CUSTIMESH_Model.stl") {
    return saveBlobWithFilter(blob, defaultFileName, "STL 3D Modeli (*.stl)", ["stl"]);
  }

  async function saveHTMLDialog(blob, defaultFileName = "CUSTIMESH_Vaka.html") {
    return saveBlobWithFilter(blob, defaultFileName, "Hekim Vaka Görüntüleyici (*.html)", ["html", "htm"]);
  }

  async function savePNGDialog(blob, defaultFileName = "CUSTIMESH_Vaka_Gorunum.png") {
    return saveBlobWithFilter(blob, defaultFileName, "PNG Görünüm Görüntüsü (*.png)", ["png"]);
  }

  async function minimizeWindow() {
    if (isTauri && window.__TAURI__?.window) {
      await window.__TAURI__.window.getCurrentWindow().minimize();
    }
  }

  async function toggleMaximizeWindow() {
    if (isTauri && window.__TAURI__?.window) {
      await window.__TAURI__.window.getCurrentWindow().toggleMaximize();
    }
  }

  async function closeWindow() {
    if (isTauri && window.__TAURI__?.window) {
      await window.__TAURI__.window.getCurrentWindow().close();
    } else {
      window.close();
    }
  }

  return {
    isTauri,
    openSTLFilesDialog,
    saveSTLDialog,
    saveHTMLDialog,
    savePNGDialog,
    minimizeWindow,
    toggleMaximizeWindow,
    closeWindow
  };
})();

window.TauriBridge = TauriBridge;
