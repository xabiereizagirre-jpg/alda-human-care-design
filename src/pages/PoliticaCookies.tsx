import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          POLÍTICA DE COOKIES
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              1. QUÉ SON LAS COOKIES
            </h2>
            <p>
              Una cookie es un pequeño fichero de texto que se almacena en el
              dispositivo del USUARIO (ordenador, tablet o teléfono móvil) cuando
              navega por un sitio web. Las cookies permiten que el sitio web
              reconozca al usuario, recuerde sus preferencias y funcione de manera
              correcta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              2. USO DE COOKIES EN ESTE SITIO WEB
            </h2>
            <p>
              El sitio web http://www.alda2u.com utiliza exclusivamente cookies
              técnicas, necesarias para su funcionamiento, y cookies de servicios de
              terceros estrictamente necesarios para la verificación de la actividad
              humana en el formulario de contacto.
            </p>
            <p>
              Este sitio web no utiliza cookies publicitarias, ni de perfilado, ni de
              analítica que requieran consentimiento previo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              3. COOKIES UTILIZADAS
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead>
                  <tr className="bg-accent/40 text-primary">
                    <th className="text-left p-3 font-semibold">Prestador</th>
                    <th className="text-left p-3 font-semibold">Finalidad</th>
                    <th className="text-left p-3 font-semibold">Tipo</th>
                  </tr>
                </thead>
                <tbody className="text-foreground/80">
                  <tr className="border-t border-border">
                    <td className="p-3">Google reCAPTCHA</td>
                    <td className="p-3">
                      Verificar que los envíos del formulario de contacto proceden de
                      personas y no de sistemas automatizados.
                    </td>
                    <td className="p-3">Técnica / Terceros</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">EmailJS</td>
                    <td className="p-3">
                      Gestión del envío de los mensajes del formulario de contacto.
                    </td>
                    <td className="p-3">Técnica / Terceros</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              4. GESTIÓN Y DESACTIVACIÓN DE COOKIES
            </h2>
            <p>
              El USUARIO puede permitir, bloquear o eliminar las cookies instaladas en
              su dispositivo mediante la configuración de las opciones de su navegador
              de internet:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
              <li>Safari</li>
            </ul>
            <p>
              En caso de que el USUARIO bloquee o elimine las cookies técnicas,
              algunas funcionalidades del sitio web, como el envío del formulario de
              contacto, podrían dejar de estar disponibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              5. ACTUALIZACIONES
            </h2>
            <p>
              ALDA2U puede modificar esta política de cookies en función de nuevas
              exigencias legislativas o reglamentarias, o con la finalidad de adaptar
              la misma a las instrucciones dictadas por la Agencia Española de
              Protección de Datos. Se recomienda revisar esta página periódicamente.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
