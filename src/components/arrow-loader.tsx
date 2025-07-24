"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useNavigation } from "@/contexts/NavigationContext"

export function ArrowLoader() {
  const { isLoaderActive } = useNavigation()
  const duration = 1.5

  return (
    <AnimatePresence>
      {isLoaderActive && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "black" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Animated Background Grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Pulsing Background Glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(0, 255, 255, 0.05) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Main Arrow Body - Enhanced */}
          <motion.div
            className="absolute"
            style={{
              height: "12px",
              background: `
                linear-gradient(90deg, 
                  rgba(0, 255, 255, 0.1), 
                  rgba(0, 255, 255, 0.8), 
                  rgba(255, 255, 255, 1), 
                  rgba(0, 255, 255, 0.8),
                  rgba(0, 255, 255, 0.1)
                )
              `,
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              boxShadow: `
                0 0 20px rgba(0, 255, 255, 0.8),
                0 0 40px rgba(0, 255, 255, 0.6),
                0 0 80px rgba(0, 255, 255, 0.4),
                inset 0 0 20px rgba(255, 255, 255, 0.2)
              `,
            }}
            initial={{
              x: "-100%",
              width: "40px",
              scaleY: 0.2,
              opacity: 0.4,
            }}
            animate={{
              x: "100vw",
              width: "50vw",
              scaleY: 1,
              opacity: 1,
            }}
            transition={{
              duration: duration,
              ease: [0.25, 0.46, 0.45, 0.94],
              width: {
                duration: duration * 0.7,
                ease: "easeOut",
              },
              scaleY: {
                duration: duration * 0.5,
                ease: "easeOut",
              },
            }}
          />

          {/* Arrow Head - Enhanced */}
          <motion.div
            className="absolute"
            style={{
              width: "0",
              height: "0",
              borderLeft: "24px solid rgba(0, 255, 255, 0.95)",
              borderTop: "16px solid transparent",
              borderBottom: "16px solid transparent",
              filter: `
                drop-shadow(0 0 15px rgba(0, 255, 255, 0.8))
                drop-shadow(0 0 30px rgba(0, 255, 255, 0.6))
                drop-shadow(0 0 45px rgba(0, 255, 255, 0.4))
              `,
            }}
            initial={{
              x: "-100%",
              scale: 0.3,
              opacity: 0.5,
            }}
            animate={{
              x: "calc(100vw + 24px)",
              scale: 1.2,
              opacity: 1,
            }}
            transition={{
              duration: duration,
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: {
                duration: duration * 0.6,
                ease: "easeOut",
              },
            }}
          />

          {/* Energy Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `
                  radial-gradient(circle, 
                    ${i % 3 === 0
                    ? "rgba(0, 255, 255, 1)"
                    : i % 3 === 1
                      ? "rgba(255, 0, 255, 1)"
                      : "rgba(255, 255, 0, 1)"
                  } 0%, 
                    transparent 70%
                  )
                `,
                borderRadius: "50%",
                boxShadow: `0 0 10px ${i % 3 === 0
                    ? "rgba(0, 255, 255, 0.8)"
                    : i % 3 === 1
                      ? "rgba(255, 0, 255, 0.8)"
                      : "rgba(255, 255, 0, 0.8)"
                  }`,
              }}
              initial={{
                x: `${-50 + Math.random() * 100}px`,
                y: `${-50 + Math.random() * 100}px`,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: `${100 + Math.random() * 200}px`,
                y: `${-100 + Math.random() * 200}px`,
                scale: [0, 1, 0.5, 0],
                opacity: [0, 1, 0.8, 0],
              }}
              transition={{
                duration: 0.6 + Math.random() * 0.8,
                ease: "easeOut",
                delay: Math.random() * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 2,
              }}
            />
          ))}

          {/* Enhanced Shooting Star Trails */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`trail-${i}`}
              className="absolute"
              style={{
                width: "3px",
                height: `${15 + i * 4}px`,
                background: `
                  linear-gradient(135deg,
                    ${i % 4 === 0
                    ? "rgba(0, 255, 255, 1)"
                    : i % 4 === 1
                      ? "rgba(255, 0, 255, 1)"
                      : i % 4 === 2
                        ? "rgba(255, 255, 0, 1)"
                        : "rgba(255, 255, 255, 1)"
                  } 0%,
                    ${i % 4 === 0
                    ? "rgba(0, 255, 255, 0.6)"
                    : i % 4 === 1
                      ? "rgba(255, 0, 255, 0.6)"
                      : i % 4 === 2
                        ? "rgba(255, 255, 0, 0.6)"
                        : "rgba(255, 255, 255, 0.6)"
                  } 50%,
                    transparent 100%
                  )
                `,
                borderRadius: "2px",
                filter: "blur(0.5px)",
                boxShadow: `0 0 12px ${i % 4 === 0
                    ? "rgba(0, 255, 255, 0.6)"
                    : i % 4 === 1
                      ? "rgba(255, 0, 255, 0.6)"
                      : i % 4 === 2
                        ? "rgba(255, 255, 0, 0.6)"
                        : "rgba(255, 255, 255, 0.6)"
                  }`,
                transform: "rotate(45deg)",
              }}
              initial={{
                x: `${-120 + i * 18}px`,
                y: `${-90 + i * 12}px`,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: `${250 + i * 30}px`,
                y: `${140 + i * 18}px`,
                scale: [0, 1.2, 0.9, 0],
                opacity: [0, 1, 0.7, 0],
              }}
              transition={{
                duration: 0.9 + i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.15 + i * 0.06,
                scale: {
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeOut",
                },
                opacity: {
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeOut",
                },
              }}
            />
          ))}

          {/* Multi-layered Trailing Glow */}
          <motion.div
            className="absolute"
            style={{
              height: "20px",
              background: `
                linear-gradient(90deg, 
                  transparent, 
                  rgba(0, 255, 255, 0.4), 
                  rgba(255, 255, 255, 0.3),
                  rgba(0, 255, 255, 0.4),
                  transparent
                )
              `,
              borderRadius: "10px",
              filter: "blur(6px)",
            }}
            initial={{
              x: "-100%",
              width: "60px",
              scaleY: 0.3,
            }}
            animate={{
              x: "100vw",
              width: "60vw",
              scaleY: 1,
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: 0.1,
            }}
          />

          {/* Secondary Enhanced Trail */}
          <motion.div
            className="absolute"
            style={{
              height: "4px",
              background: `
                linear-gradient(90deg, 
                  transparent, 
                  rgba(255, 0, 255, 0.8), 
                  rgba(0, 255, 255, 0.6),
                  rgba(255, 255, 0, 0.4)
                )
              `,
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            }}
            initial={{
              x: "-100%",
              width: "30px",
              scaleY: 0.4,
            }}
            animate={{
              x: "100vw",
              width: "45vw",
              scaleY: 1,
            }}
            transition={{
              duration: duration * 0.9,
              ease: "easeInOut",
              delay: 0.15,
            }}
          />

          {/* Speed Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`speed-line-${i}`}
              className="absolute"
              style={{
                width: "100vw",
                height: "1px",
                background: `
                  linear-gradient(90deg, 
                    transparent, 
                    rgba(0, 255, 255, ${0.3 - i * 0.05}), 
                    transparent
                  )
                `,
                top: `${50 + (i - 3) * 8}%`,
              }}
              initial={{ x: "-100%", scaleX: 0 }}
              animate={{ x: "0%", scaleX: 1 }}
              transition={{
                duration: duration * 0.8,
                ease: "easeOut",
                delay: 0.2 + i * 0.05,
              }}
            />
          ))}

          {/* Central Energy Burst */}
          <motion.div
            className="absolute"
            style={{
              width: "100px",
              height: "100px",
              background: `
                radial-gradient(circle, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(0, 255, 255, 0.05) 30%, 
                  transparent 70%
                )
              `,
              borderRadius: "50%",
              filter: "blur(2px)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: duration * 0.6,
              ease: "easeOut",
              delay: duration * 0.3,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
