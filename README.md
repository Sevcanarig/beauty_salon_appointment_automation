# Beauty Salon Appointment Automation

## Proje Açıklaması
Bu proje, kuaför ve güzellik salonu gibi küçük işletmeler için geliştirilmiş, online randevu alma ve randevu süreçlerini otomatikleştiren web tabanlı bir sistemdir. Proje kapsamında web sitesi Firebase Studio kullanılarak oluşturulmuş, randevu onay ve hatırlatma işlemleri ise n8n otomasyon aracı ile gerçekleştirilmiştir.

---

## Projenin Amacı
- Güzellik salonu hizmetlerini tanıtan bir web sitesi oluşturmak
- Müşterilerin online olarak randevu alabilmesini sağlamak
- Alınan randevular için otomatik onay e-postası göndermek
- Randevu tarihinden 1 gün önce otomatik hatırlatma maili/SMS göndermek
- Zamanlanmış (scheduled) otomasyon mantığını uygulamalı olarak göstermek

---

## Kullanılan Teknolojiler
- **Web Sitesi:** Firebase Studio
- **Otomasyon:** n8n
- **Veri Kaynağı:** Google Sheets
- **Bildirim Servisleri:** E-posta (SMTP / Gmail – n8n üzerinden)

---

## Web Sitesi Özellikleri (Firebase Studio)
- **Hizmetler Sayfası:** Saç kesimi, manikür, cilt bakımı vb. hizmetlerin detaylı açıklamaları
- **Fiyatlar Sayfası:** Sunulan hizmetlere ait güncel fiyat listesi
- **Galeri:** İşletmenin iç mekânı ve yapılan işlemlere ait en az 4 görsel
- **Randevu Formu:**  
  - Müşteri Adı  
  - Telefon Numarası  
  - E-posta Adresi  
  - Hizmet Türü  
  - Randevu Tarihi ve Saati  

---

## n8n Workflow – Randevu Onay ve Hatırlatma

### 1. Otomatik Randevu Onay Maili
- **Tetikleyici:** Webhook (Randevu formu gönderildiğinde çalışır)
- **İşlem:** Formdan gelen randevu verileri Google Sheets’e kaydedilir
- **Eylem:** Müşterinin e-posta adresine randevu detaylarını içeren otomatik onay maili gönderilir

**Örnek Mail İçeriği:**  
“Randevunuz Onaylandı! [Hizmet] – [Tarih] [Saat]”

---

### 2. Randevu Hatırlatma (Scheduled)
- **Tetikleyici:** Schedule / Cron düğümü (Her gün otomatik çalışacak şekilde ayarlanmıştır)
- **İşlem:** Google Sheets üzerinden randevu kayıtları çekilir
- **Koşul:** Randevu tarihi, bugünden 1 gün sonrası olan kayıtlar filtrelenir
- **Eylem:** Randevu sahibine hatırlatma e-postası veya SMS gönderilir

**Örnek Hatırlatma Mesajı:**  
“Yarın [Saat]’teki randevunuzu unutmayın.”

---

## Zamanlanmış Çalışma Mantığı
Hatırlatma sistemi n8n üzerindeki Schedule/Cron düğümü sayesinde otomatik olarak çalışır. Workflow her gün belirlenen saatte tetiklenir, mevcut tarih ile randevu tarihi karşılaştırılır ve randevusuna 1 gün kalan müşterilere otomatik bildirim gönderilir. Bu sayede manuel kontrol ihtiyacı ortadan kaldırılır.

---

## Kurulum ve Kullanım
1. Web sitesi Firebase Studio kullanılarak oluşturulmuş ve Firebase Hosting üzerinde yayınlanmıştır
2. Randevu formu verileri Google Sheets’e kaydedilmektedir
3. n8n üzerinde randevu onay ve hatırlatma workflow’ları yapılandırılmıştır
4. E-posta gönderimi n8n üzerinden SMTP/Gmail servisi ile sağlanmaktadır


## Proje Görselleri

### n8n – Randevu Onay Workflow
![Randevu Onay Workflow](Ekran görüntüsü 2025-12-19 154522.png)

### n8n – Zamanlanmış Randevu Hatırlatma Workflow
![Randevu Hatırlatma Workflow](Ekran görüntüsü 2025-12-19 154434.png)

### Web Sitesi Görselleri
![Ana Sayfa](Ekran görüntüsü 2025-12-19 154618.png)
![Hizmetler](Ekran görüntüsü 2025-12-19 154708.png)
![Randevu Formu](Ekran görüntüsü 2025-12-19 154726.png)
