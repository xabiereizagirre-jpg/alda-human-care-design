const h2 = "text-xl font-semibold text-primary mt-8 mb-4";

const PoliticaCookiesEu = () => (
  <>
    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">COOKIE-POLITIKA</h1>

    <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
      <section>
        <h2 className={h2}>1. ZER DIRA COOKIEAK</h2>
        <p>
          Cookie bat testu-fitxategi txiki bat da, ERABILTZAILEAREN gailuan (ordenagailua, tableta edo telefono mugikorra) gordetzen dena webgune batean nabigatzen duenean. Cookieei esker, webguneak erabiltzailea ezagutu, haren hobespenak gogoratu eta behar bezala funtziona dezake.
        </p>
      </section>

      <section>
        <h2 className={h2}>2. COOKIEEN ERABILERA WEBGUNE HONETAN</h2>
        <p>
          http://www.alda2u.com webguneak cookie teknikoak baino ez ditu erabiltzen, bere funtzionamendurako beharrezkoak direnak, bai eta harremanetarako formularioan giza jarduera egiaztatzeko guztiz beharrezkoak diren hirugarrenen zerbitzuen cookieak ere.
        </p>
        <p>
          Webgune honek ez du erabiltzen aldez aurretiko baimena behar duen publizitate-, profil- edo analitika-cookierik.
        </p>
      </section>

      <section>
        <h2 className={h2}>3. ERABILITAKO COOKIEAK</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead>
              <tr className="bg-accent/40 text-primary">
                <th className="text-left p-3 font-semibold">Hornitzailea</th>
                <th className="text-left p-3 font-semibold">Helburua</th>
                <th className="text-left p-3 font-semibold">Mota</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-t border-border">
                <td className="p-3">Google reCAPTCHA</td>
                <td className="p-3">
                  Harremanetarako formularioko bidalketak pertsonek egiten dituztela eta ez sistema automatizatuek egiaztatzea.
                </td>
                <td className="p-3">Teknikoa / Hirugarrenak</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">EmailJS</td>
                <td className="p-3">Harremanetarako formularioko mezuen bidalketa kudeatzea.</td>
                <td className="p-3">Teknikoa / Hirugarrenak</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className={h2}>4. COOKIEAK KUDEATZEA ETA DESAKTIBATZEA</h2>
        <p>
          ERABILTZAILEAK bere gailuan instalatutako cookieak baimendu, blokeatu edo ezaba ditzake, interneteko nabigatzailearen aukerak konfiguratuz:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Microsoft Edge</li>
          <li>Safari</li>
        </ul>
        <p>
          ERABILTZAILEAK cookie teknikoak blokeatzen edo ezabatzen baditu, baliteke webgunearen funtzionalitate batzuk, harremanetarako formularioa bidaltzea kasu, erabilgarri ez egotea.
        </p>
      </section>

      <section>
        <h2 className={h2}>5. EGUNERATZEAK</h2>
        <p>
          ALDA2U-k cookie-politika hau alda dezake lege- edo erregelamendu-eskakizun berrien arabera, edo Datuak Babesteko Espainiako Agentziak emandako jarraibideetara egokitzeko. Orri hau aldizka berrikustea gomendatzen da.
        </p>
      </section>
    </div>
  </>
);

export default PoliticaCookiesEu;
