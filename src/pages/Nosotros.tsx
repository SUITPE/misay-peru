import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';

/**
 * Nosotros (About Us) Page
 * Company information, mission, and values
 */
export const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Nuestra Empresa"
        subtitle="Conoce más sobre MisayPeru y nuestro compromiso con la excelencia"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                ¿Quiénes Somos?
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Desde el inicio, nos dedicamos a asistirte en la consecución de tus objetivos.
                Nos destacamos en brindar soluciones y acabados para embellecer y edificar entornos.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Nuestra labor se rige por los principios fundamentales de honestidad, productividad
                y la satisfacción del cliente.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Honestidad</h3>
                <p className="text-neutral-600">
                  Actuamos con integridad y transparencia en cada proyecto, construyendo
                  relaciones de confianza con nuestros clientes.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Productividad</h3>
                <p className="text-neutral-600">
                  Optimizamos recursos y tiempo para entregar resultados excepcionales
                  de manera eficiente.
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Satisfacción del Cliente</h3>
                <p className="text-neutral-600">
                  Tu satisfacción es nuestra máxima prioridad. Trabajamos hasta que
                  estés completamente satisfecho.
                </p>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-neutral-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Nuestro Compromiso
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                En MisayPeru, entendemos que cada proyecto es único y requiere atención
                personalizada. Por eso, trabajamos de cerca con cada cliente para comprender
                sus necesidades específicas y ofrecer soluciones que superen sus expectativas.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados está comprometido con
                la excelencia en cada detalle, desde la selección de materiales hasta la
                ejecución final del proyecto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Quieres saber más?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos y descubre cómo podemos ayudarte a transformar tus espacios
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Contactar
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
