import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, SITE } from "@/lib/seo/site";

const title = "Çerez Politikası";
const description =
  "BrainFit Karşıyaka web sitesinde kullanılan çerez türleri, saklanma süreleri ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi alın.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/cerez-politikasi",
  },
  openGraph: {
    type: "website",
    siteName: SITE.brandName,
    locale: SITE.locale,
    title,
    description,
    url: absoluteUrl("/cerez-politikasi"),
    images: [
      {
        url: absoluteUrl(SITE.defaultOgImage),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="site-matte">
      <div className="page-shell">
        <Header />
        <main className="min-h-screen pt-[132px]">
          <article className="inner max-w-[820px] pb-24">
            <h1 className="editorial-title mt-10 text-[44px] sm:text-[56px]">
              Çerez Politikası
            </h1>

            <div className="prose-brainfit mt-10">
              <h2>Giriş</h2>
              <p>
                BrainFit Karşıyaka (&quot;Şirket&quot;), {SITE.origin}/
                adresinde hizmet vermektedir. Bu Çerez Politikası, web
                sitemizi ziyaret ettiğinizde veya hizmetlerimizi
                kullandığınızda çerezlerin nasıl kullanıldığını ve bu
                çerezlerin hangi amaçlarla işlendiğini açıklamaktadır.
              </p>
              <p>
                Çerezler, web sitesinin düzgün çalışması, kullanıcı
                deneyiminin iyileştirilmesi, sitenin güvenliğinin
                sağlanması, analitik verilerin elde edilmesi ve diğer meşru
                amaçlar için kullanılabilmektedir.
              </p>

              <h2>Çerez Nedir?</h2>
              <p>
                Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
                tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Bu
                metin dosyaları, web sitesinin düzgün çalışması, kullanıcı
                oturumlarının korunması, site içi hareketlerin analiz
                edilmesi ve kullanıcı deneyiminin kişiselleştirilmesi gibi
                amaçlarla kullanılır.
              </p>

              <h2>Kullanılan Çerez Türleri</h2>
              <p>Sitemizde kullanılan çerez türleri aşağıdaki gibidir:</p>

              <h3>Zorunlu Çerezler</h3>
              <p>
                Bu çerezler, web sitesinin temel işlevlerini yerine
                getirebilmesi için gereklidir. Oturum açma, güvenlik, site
                navigasyonu gibi temel fonksiyonları sağlarlar ve kullanıcı
                tercihlerine bağlı olmaksızın her zaman aktiftirler.
              </p>

              <h3>İşlevsel Çerezler</h3>
              <p>
                Bu çerezler, web sitesini daha işlevsel hale getiren ve size
                daha kişiselleştirilmiş bir deneyim sunan çerezlerdir. Dil
                tercihleri, form doldurma bilgileri gibi kullanıcı
                tercihlerinin hatırlanmasını sağlarlar.
              </p>

              <h3>Analitik Çerezler</h3>
              <p>
                Bu çerezler, web sitesinin nasıl kullanıldığını analiz
                etmemize, ziyaretçi sayılarını takip etmemize ve sitemizi
                geliştirmemize yardımcı olan çerezlerdir. Ziyaretçilerin site
                kullanım alışkanlıklarını, popüler sayfaları ve diğer
                etkileşim verilerini toplarlar.
              </p>

              <h3>Pazarlama Çerezleri</h3>
              <p>
                Bu çerezler, size ilgi alanlarınıza ve tercihlerinize göre
                hedeflenmiş reklamlar göstermek için kullanılır. Ayrıca, bir
                reklamın görüntülenme sayısını sınırlamak ve reklam
                kampanyalarının etkinliğini ölçmek için de kullanılırlar.
              </p>

              <h2>Çerezlerin Saklanma Süreleri</h2>
              <p>
                Çerezler, saklanma sürelerine göre aşağıdaki şekilde
                sınıflandırılabilir:
              </p>

              <h3>Oturum Çerezleri</h3>
              <p>
                Bu çerezler, yalnızca web sitesinde gezindiğiniz süre boyunca
                geçerlidir ve tarayıcınızı kapattığınızda otomatik olarak
                silinirler.
              </p>

              <h3>Kalıcı Çerezler</h3>
              <p>
                Bu çerezler, tarayıcınızı kapattıktan sonra da cihazınızda
                saklanırlar. Belirli bir süre sonunda veya manuel olarak
                silinene kadar cihazınızda kalırlar.
              </p>

              <h2>Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</h2>
              <p>
                Çoğu tarayıcı, çerezleri otomatik olarak kabul eder, ancak
                isterseniz tarayıcınızın ayarlarını değiştirerek çerezleri
                reddedebilir veya çerez gönderilmeden önce uyarı verilmesini
                sağlayabilirsiniz.
              </p>
              <p>
                Çerezleri yönetme yöntemleri tarayıcıdan tarayıcıya
                değişiklik gösterebilir. Aşağıda popüler tarayıcılarda çerez
                yönetimi için bilgiler sunulmuştur:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Google Chrome:</strong> Chrome menüsü &gt; Ayarlar
                  &gt; Gelişmiş &gt; Gizlilik ve güvenlik &gt; Site Ayarları
                  &gt; Çerezler ve site verileri
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Firefox menüsü &gt;
                  Seçenekler &gt; Gizlilik ve Güvenlik &gt; Geçmiş &gt;
                  Firefox için özel ayarları kullan &gt; Çerezleri göster
                </li>
                <li>
                  <strong>Safari:</strong> Tercihler &gt; Gizlilik
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Ayarlar ve daha fazlası
                  &gt; Ayarlar &gt; Site izinleri &gt; Çerezler ve site
                  verileri
                </li>
              </ul>
              <p>
                Çerezleri devre dışı bırakmanız durumunda, web sitemizin
                bazı özelliklerinin düzgün çalışmayabileceğini lütfen
                unutmayın.
              </p>

              <h2>Üçüncü Taraf Çerezleri</h2>
              <p>
                Web sitemiz, üçüncü taraf hizmet sağlayıcılarının
                çerezlerini de kullanabilir. Bu çerezler, analitik hizmetler,
                sosyal medya platformları ve reklam ağları tarafından
                yerleştirilir. Bu üçüncü tarafların gizlilik politikaları
                kendi web sitelerinde bulunmaktadır ve bu çerezlerin
                kullanımı kendi gizlilik politikalarına tabidir.
              </p>

              <h2>Politika Değişiklikleri</h2>
              <p>
                Bu Çerez Politikası&apos;nı herhangi bir zamanda güncelleme
                hakkını saklı tutarız. Politika değişiklikleri, web
                sitemizde yayınlandığı anda yürürlüğe girer. Bu nedenle, en
                güncel bilgilere erişmek için düzenli olarak bu sayfayı
                ziyaret etmenizi öneririz.
              </p>

              <h2>İletişim</h2>
              <p>
                Bu Çerez Politikası hakkında herhangi bir sorunuz varsa,
                lütfen aşağıdaki iletişim bilgilerinden bize ulaşın:
              </p>
              <p>
                BrainFit Karşıyaka
                <br />
                {SITE.address.streetAddress}, {SITE.address.addressLocality}/
                {SITE.address.addressRegion} {SITE.address.postalCode}
                <br />
                Telefon: +90 551 365 74 84
                <br />
                E-posta: info@brainfit.com.tr
                <br />
                Web: {SITE.origin}/
              </p>
              <p>Son Güncelleme Tarihi: 13.09.2026</p>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
