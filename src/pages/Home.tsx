import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';

/**
 * Home Page
 * Landing page with hero section and company introduction
 */
export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Un paso adelante a lo que necesitas"
        subtitle="Tu socio confiable en texturas y acabados para la construcción."
        ctaText="Contactar"
        ctaLink="/contacto"
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Bienvenido a MisayPeru
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Desde el inicio, nos dedicamos a asistirte en la consecución de tus objetivos.
              Nos destacamos en brindar soluciones y acabados para embellecer y edificar entornos.
              Nuestra labor se rige por los principios fundamentales de honestidad, productividad
              y la satisfacción del cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Honestidad</h3>
              <p className="text-neutral-600">
                Transparencia en cada proyecto y comunicación clara con nuestros clientes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Productividad</h3>
              <p className="text-neutral-600">
                Eficiencia y calidad en cada servicio que ofrecemos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Satisfacción</h3>
              <p className="text-neutral-600">
                Tu satisfacción es nuestra prioridad en cada entrega
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tus espacios?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Descubre nuestros servicios especializados y productos de alta calidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/productos"
                className="inline-block bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
              >
                Ver Productos
              </a>
              <a
                href="/servicios"
                className="inline-block bg-white text-primary-500 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                Nuestros Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
