import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { ViewToggle } from '../components/ViewToggle';
import { products } from '../data/products';
import type { Product } from '../data/products';

/**
 * Productos (Products) Page
 * Displays all products with grid/gallery toggle view
 */
export const Productos = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [view, setView] = useState<'grid' | 'gallery'>('grid');

  return (
    <div className="min-h-screen">
      <Hero
        title="Nuestros Productos"
        subtitle="Productos de alta calidad para la construcción y remodelación de tu hogar o negocio"
      />

      {/* Products Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              En MISAY PERU, nos enorgullece ofrecer una amplia gama de productos de alta
              calidad para la construcción y remodelación de tu hogar o negocio.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Nos comprometemos a ofrecer productos que no solo cumplen con los más altos
              estándares de calidad, sino que también se adaptan a las necesidades y gustos
              de nuestros clientes.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Escríbenos y descubre cómo podemos ayudarte a transformar tus espacios con
              nuestras soluciones innovadoras y de confianza.
            </p>
          </motion.div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          {/* Products Grid/Gallery */}
          <div
            className={
              view === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6 max-w-4xl mx-auto'
            }
          >
            {products.map((product, index) => (
              view === 'grid' ? (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={setSelectedProduct}
                  index={index}
                />
              ) : (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedProduct(product)}
                  className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-neutral-100 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        }
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-neutral-600">
                      {product.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-primary-600 font-medium text-sm">
                        Ver detalles →
                      </span>
                    </div>
                  </div>
                </motion.article>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Description */}
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
              Nuestro Catálogo
            </motion.h3>

            <div className="space-y-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                    {index + 1}. {product.name}
                  </h4>
                  <p className="text-neutral-700">
                    {product.description}
                  </p>
                </motion.div>
              ))}
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
              ¿Interesado en nuestros productos?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos para conocer disponibilidad, precios y más información
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Consultar Ahora
            </a>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
