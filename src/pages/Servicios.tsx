import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

/**
 * Servicios (Services) Page
 * Displays all available services
 */
export const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Nuestros Servicios"
        subtitle="Soluciones especializadas en texturas y acabados para la construcción"
      />

      {/* Services Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Fotografía sobre microhormigón
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Las texturas en las paredes pueden transformar por completo el aspecto y la
              sensación de cualquier espacio, desde un hogar acogedor hasta un lugar de
              trabajo moderno.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Al elegir la textura adecuada, puedes agregar profundidad, interés visual
              y personalidad a tus paredes.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Y esto lo extendemos a la madera, estructuras metálicas y pisos. Descubre
              nuestros trabajos en microcemento, microhormigón y diseños exclusivos como
              el fotoconcreto.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center"
            >
              ¿Por qué elegir nuestros servicios?
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Experiencia Comprobada</h4>
                  <p className="text-neutral-600 text-sm">
                    Años de experiencia en el sector de la construcción y acabados
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Materiales de Calidad</h4>
                  <p className="text-neutral-600 text-sm">
                    Utilizamos únicamente materiales de primera calidad y durabilidad
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Diseños Personalizados</h4>
                  <p className="text-neutral-600 text-sm">
                    Adaptamos cada proyecto a tus necesidades y preferencias específicas
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Garantía de Satisfacción</h4>
                  <p className="text-neutral-600 text-sm">
                    Tu satisfacción es nuestra prioridad en cada proyecto
                  </p>
                </div>
              </motion.div>
            </div>
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
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y recibe una cotización personalizada
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Solicitar Cotización
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
