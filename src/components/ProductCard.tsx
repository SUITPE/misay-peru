import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  index?: number;
}

/**
 * ProductCard Component
 * Displays product information with hover effects
 * Optimized with lazy loading images
 */
export const ProductCard = ({ product, onClick, index = 0 }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={() => onClick(product)}
      className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback to colored placeholder if image fails to load
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }
          }}
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-sm">Ver detalles</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-600 line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.article>
  );
};
