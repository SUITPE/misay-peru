import { motion } from 'framer-motion';

interface ViewToggleProps {
  view: 'grid' | 'gallery';
  onViewChange: (view: 'grid' | 'gallery') => void;
}

/**
 * ViewToggle Component
 * Toggle between grid and gallery view for products
 */
export const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center space-x-2 bg-neutral-100 rounded-lg p-1">
      <button
        onClick={() => onViewChange('grid')}
        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          view === 'grid'
            ? 'text-white'
            : 'text-neutral-600 hover:text-neutral-900'
        }`}
        aria-label="Vista de grilla"
        aria-pressed={view === 'grid'}
      >
        {view === 'grid' && (
          <motion.div
            layoutId="activeView"
            className="absolute inset-0 bg-secondary-500 rounded-md"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center space-x-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span>Grilla</span>
        </span>
      </button>

      <button
        onClick={() => onViewChange('gallery')}
        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          view === 'gallery'
            ? 'text-white'
            : 'text-neutral-600 hover:text-neutral-900'
        }`}
        aria-label="Vista de galería"
        aria-pressed={view === 'gallery'}
      >
        {view === 'gallery' && (
          <motion.div
            layoutId="activeView"
            className="absolute inset-0 bg-secondary-500 rounded-md"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center space-x-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span>Lista</span>
        </span>
      </button>
    </div>
  );
};
