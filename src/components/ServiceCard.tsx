import { motion } from 'framer-motion';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

/**
 * ServiceCard Component
 * Displays service information with visual effects
 */
export const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-neutral-100">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient placeholder
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            }
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Title on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {service.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-neutral-700 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
};
