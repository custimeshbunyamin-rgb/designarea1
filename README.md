CUSTIMESH Mesh Modülü + Kalınlık Analizi.

## Dosya
- `CUSTIMESH_Mesh_Modulu_Rev16_Kalinlik_v5_0.html`: tek dosyalık uygulama. Tarayıcıda açın, STL yükleyin.

## Kalınlık Analizi v5.0
- Varsayılan yöntem: "İç küre · nTop kalibreli v5.0". Yüzeye teğet en büyük iç kürenin çapı ölçülür.
- Spongioz gürültüsü, temas noktasına 0,6 mm'den yakın ve aynı yöne bakan yüzey noktaları yok sayılarak azaltılır; karşı duvar (ince cidar) korunur.
- Eski yöntemler (v4.8, v4.7, normal ışın, konik ışın) listede kalır.

## nTop ile karşılaştırma
Model-1 çenesi, nTop "Field from Mesh Thickness" çıktısı (900.000 nokta):

| Ölçüt | Sonuç |
|---|---|
| Korelasyon | 0,95 |
| Ortalama mutlak hata | 0,15 mm |
| Alan ağırlıklı ortalama | 1,79 mm (nTop: 1,76 mm) |
| < 0,30 mm oranı | %2,9 (nTop: %6,4) |

**Sınırlama:** 0,30 mm altındaki ince bölgeler nTop'a göre eksik bulunur. Kritik eşik uyarısı klinik karar için tek başına kullanılmamalıdır.

Hesap süresi: yaklaşık 275 bin köşe için 35 saniye.
