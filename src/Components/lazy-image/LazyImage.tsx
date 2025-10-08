import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  skeletonClassName?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  skeletonClassName = "",
  placeholder,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleImageError = () => {
    setIsError(true);
    onError?.();
  };

  const containerStyle = {
    width: width || "100%",
    height: height || "auto",
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      <AnimatePresence mode="wait">
        {!isInView ? (
          // Initial placeholder before image starts loading
          <motion.div
            key="placeholder"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse ${skeletonClassName}`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
            </div>
          </motion.div>
        ) : (
          <>
            {/* Skeleton loader while image is loading */}
            {!isLoaded && !isError && (
              <motion.div
                key="skeleton"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse ${skeletonClassName}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="space-y-2 w-full p-4">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-1/2" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error state */}
            {isError && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
              >
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <div className="text-2xl mb-2">⚠️</div>
                  <p className="text-sm">Failed to load image</p>
                </div>
              </motion.div>
            )}

            {/* Actual image */}
            {isInView && !isError && (
              <>
                <img
                  ref={imgRef}
                  src={src}
                  alt={alt}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: width || "100%",
                    height: height || "auto",
                  }}
                />

                {/* Smooth fade-in animation for loaded image */}
                {isLoaded && (
                  <motion.div
                    key="loaded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover"
                      style={{
                        width: width || "100%",
                        height: height || "auto",
                      }}
                    />
                  </motion.div>
                )}
              </>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LazyImage;
