import React from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className, style }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy" // Enables lazy loading globally
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default LazyImage;
