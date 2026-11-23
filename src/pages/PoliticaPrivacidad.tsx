import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          POLÍTICA DE PRIVACIDAD
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              1. RESPONSABLE DEL TRATAMIENTO
            </h2>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679, General de Protección de
              Datos (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de
              Protección de Datos Personales y garantía de los derechos digitales
              (LOPDGDD), se informa al USUARIO de que el responsable del tratamiento
              de sus datos personales es:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Denominación social: ALDA2U TECHNOLOGY AND SERVICES, S.L.</li>
              <li>CIF: B95718623</li>
              <li>
                Domicilio social: BALENDIN BERRIOTXOA, 32, 1C – 48970 – BASAURI –
                VIZCAYA
              </li>
              <li>Email: info@alda2u.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              2. DATOS QUE RECOPILAMOS
            </h2>
            <p>
              ALDA2U únicamente recaba los datos personales que el USUARIO facilita
              de forma libre y voluntaria a través del formulario de contacto de este
              sitio web:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>Organización</li>
              <li>Mensaje o consulta planteada</li>
            </ul>
            <p>
              No se realizan decisiones automatizadas ni se elaboran perfiles con los
              datos facilitados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              3. FINALIDADES DEL TRATAMIENTO
            </h2>
            <p>Los datos personales se tratan con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Atender las consultas, solicitudes o propuestas de colaboración
                recibidas a través del formulario de contacto.
              </li>
              <li>
                Mantener una relación informativa con el USUARIO, cuando este lo
                haya solicitado expresamente.
              </li>
              <li>
                Cumplir con las obligaciones legales que resulten aplicables a
                ALDA2U.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              4. LEGITIMACIÓN
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Consentimiento del interesado: el USUARIO otorga su consentimiento
                al cumplimentar y enviar el formulario de contacto.
              </li>
              <li>
                Aplicación de medidas precontractuales: cuando la consulta derive en
                una relación profesional o comercial.
              </li>
              <li>
                Obligaciones legales: para el cumplimiento de las responsabilidades
                establecidas en la normativa vigente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              5. DESTINATARIOS Y ENCARGADOS DEL TRATAMIENTO
            </h2>
            <p>
              Los datos no se cederán a terceros, salvo obligación legal. Para la
              gestión de las consultas recibidas, ALDA2U utiliza servicios de
              proveedores tecnológicos que actúan como encargados del tratamiento,
              con las correspondientes garantías de confidencialidad y seguridad:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                EmailJS, para el envío y la gestión de los mensajes del formulario de
                contacto.
              </li>
              <li>
                Google reCAPTCHA, para la verificación de que los envíos proceden de
                personas y no de sistemas automatizados.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              6. CONSERVACIÓN DE LOS DATOS
            </h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para
              atender la consulta planteada y, en todo caso, durante los plazos
              legales de prescripción de las responsabilidades que pudieran derivarse
              del tratamiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              7. DERECHOS DE LOS INTERESADOS
            </h2>
            <p>
              El USUARIO puede ejercer en cualquier momento y de forma gratuita los
              siguientes derechos dirigiendo una solicitud a info@alda2u.com,
              adjuntando un documento que acredite su identidad:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Derecho de acceso a los datos personales tratados.</li>
              <li>Derecho de rectificación de los datos inexactos.</li>
              <li>
                Derecho de supresión, cuando los datos ya no sean necesarios para la
                finalidad por la que fueron recabados.
              </li>
              <li>
                Derecho de oposición al tratamiento, en los casos previstos en la
                normativa.
              </li>
              <li>
                Derecho a la limitación del tratamiento, en los supuestos
                establecidos en el artículo 18 del RGPD.
              </li>
              <li>Derecho a la portabilidad de los datos.</li>
            </ul>
            <p>
              Asimismo, el USUARIO tiene derecho a presentar una reclamación ante la
              Agencia Española de Protección de Datos (www.aepd.es) si considera que
              el tratamiento no se ajusta a la normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              8. MEDIDAS DE SEGURIDAD
            </h2>
            <p>
              ALDA2U aplica las medidas técnicas y organizativas apropiadas para
              garantizar un nivel de seguridad adecuado al riesgo, evitando la
              pérdida, mal uso, alteración, acceso no autorizado y robo de los datos
              personales facilitados.
            </p>
            <p>
              El sitio web utiliza conexiones seguras y mecanismos de verificación
              frente a envíos automatizados en sus formularios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
              9. MODIFICACIONES
            </h2>
            <p>
              ALDA2U se reserva el derecho a modificar esta política de privacidad
              para adaptarla a novedades legislativas o jurisprudenciales, así como a
              prácticas del sector. En cualquier caso, se informará con la debida
              antelación de los cambios introducidos.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
