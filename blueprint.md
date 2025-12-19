# Proje: BeautyHub Güzellik Merkezi Websitesi

## Genel Bakış

BeautyHub, kullanıcıların hizmetleri inceleyebileceği, fiyatları görebileceği, galeriye göz atabileceği ve kolayca online randevu alabileceği, Angular v20+ teknolojileriyle geliştirilmiş modern ve duyarlı bir web sitesidir. Proje, hem estetik hem de fonksiyonel olarak en güncel web standartlarını benimser.

---

## Uygulanan Stil ve Tasarım Özellikleri

- **Logo Tasarımı:**
  - **İkon:** Marka kimliğini yansıtan, ana renkte bir ruj (`highlighter`) ikonu.
  - **Yazı Tipi:** "BeautyHub" metni, zarif bir "el yazısı" görünümü sunan `Great Vibes` fontu ile stilize edilmiştir.

- **Renk Paleti:**
  - **Ana Renk:** Canlı ve dikkat çekici bir pembe (`#e91e63`), özellikle butonlar, ikonlar ve aktif durum göstergeleri için kullanılmıştır.
  - **Destekleyici Renkler:** Koyu mavi-gri (`#2c3e50`), açık gri (`#bdc3c7`) ve beyaz tonları, okunabilirliği ve modern görünümü destekler.

- **Tipografi:**
  - **Başlıklar ve Logo:** `Great Vibes` (el yazısı stili).
  - **Genel Metinler:** `Poppins` ve `Roboto` (modern, okunaklı sans-serif fontlar).

- **Layout ve Bileşenler:**
  - **Header (Üst Bilgi):** Sayfa kaydırıldığında arka planı bulanıklaşan (backdrop-filter), sabit bir üst bilgi. Logo, navigasyon ve "Randevu Al" butonu içerir.
  - **Mobil Navigasyon:** Küçük ekranlar için tasarlanmış, animasyonlu bir açılır menü.
  - **Hero Bölümü (Ana Sayfa):** Büyük, etkileyici bir karşılama alanı.
  - **Hizmet Kartları:** Hizmetleri, gölgeli ve modern tasarımlı kartlar içinde sunar.
  - **Footer (Alt Bilgi):** Üç sütunlu (Hakkında, Hızlı Bağlantılar, İletişim) profesyonel bir alt bilgi bölümü. Font Awesome ikonları ile zenginleştirilmiştir.

- **Kullanıcı Deneyimi (UX):**
  - **Animasyonlar ve Geçişler:** Butonlar, linkler ve menü geçişlerinde akıcı ve yumuşak animasyonlar kullanılmıştır.
  - **Duyarlı (Responsive) Tasarım:** Uygulama, mobil telefonlardan geniş ekranlı masaüstü bilgisayarlara kadar tüm cihazlarda sorunsuz bir deneyim sunar.

---

## Uygulanan Fonksiyonel Özellikler

- **Modern Angular Mimarisi:**
  - **Standalone Bileşenler:** Proje, `NgModules` kullanılmadan, tamamen modern standalone bileşenler, direktifler ve pipe'lar üzerine kurulmuştur.
  - **ChangeDetectionStrategy.OnPush:** Performansı optimize etmek için tüm bileşenlerde `OnPush` değişiklik algılama stratejisi benimsenmiştir.

- **Performans Odaklı Geliştirmeler:**
  - **Lazy Loading (Tembel Yükleme):** Tüm sayfalar (`routes`) için tembel yükleme yapılandırılarak ilk açılış hızı önemli ölçüde artırılmıştır.

- **Devlet Yönetimi (State Management):**
  - **Angular Signals:** Bileşen içi durum yönetimi (örneğin, mobil menünün açık/kapalı durumu) için reaktif ve modern bir yaklaşım olan sinyaller kullanılmıştır.

- **Formlar:**
  - **Reactive Forms:** Randevu sayfası, `Reactive Forms` kullanılarak oluşturulmuştur. Bu, dinamik doğrulama (validation) ve karmaşık form mantığı için sağlam bir temel sunar.
  - **İnteraktif Form Elemanları:** Randevu saatlerinin seçimi gibi interaktif elemanlar, kullanıcı dostu bir arayüze sahiptir.

- **Hata Ayıklama ve Stabilite:**
  - Proje yaşam döngüsü boyunca karşılaşılan tüm derleme ve konsol hataları (örneğin, yanlış dosya yolları, eksik CSS seçicileri, hatalı ikon entegrasyonu) sistematik olarak giderilmiş ve proje kararlı bir duruma getirilmiştir.
