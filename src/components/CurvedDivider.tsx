import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface CurvedDividerProps {
  topColor?: string; // Default to Tailwind gray-50
  bottomColor?: string; // Default to white
}

export function CurvedDivider({ 
  topColor = "#f9fafb", 
  bottomColor = "#ffffff" 
}: CurvedDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position when the divider is in the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate the bezier curve's control point (Y value).
  // Starts shallow (5), bows deeper in the middle of scroll (15), then returns shallow (5).
  const curveDepth = useTransform(scrollYProgress, [0, 0.5, 1], [5, 16, 5]);

  // Path data for the filled area (top color)
  // M0,0 L100,0 L100,5 Q50,depth 0,5 Z
  const pathData = useTransform(curveDepth, (depth) => {
    return `M0,0 L100,0 L100,5 Q50,${depth} 0,5 Z`;
  });
  
  // Path data for the stroked line along the curve boundary
  const linePath = useTransform(curveDepth, (depth) => {
    return `M0,5 Q50,${depth} 100,5`;
  });

  // Slide the dot horizontally from 10% to 90% as we scroll
  const dotX = useTransform(scrollYProgress, [0.2, 0.8], [10, 90], { clamp: true });

  // Calculate the exact Y position on the quadratic bezier curve for the given X
  const dotY = useTransform(() => {
    const x = dotX.get();
    const depth = curveDepth.get();
    const t = x / 100;
    
    // Quadratic bezier equation for Y
    // P(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
    // P0.y = 5, P1.y = depth, P2.y = 5
    return Math.pow(1 - t, 2) * 5 + 2 * (1 - t) * t * depth + Math.pow(t, 2) * 5;
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-16 md:h-24 lg:h-32 overflow-visible z-30 flex items-end"
      style={{ backgroundColor: bottomColor }}
    >
      <svg 
        viewBox="0 0 100 20" 
        preserveAspectRatio="none" 
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Filled top area */}
        <motion.path 
          d={pathData} 
          fill={topColor} 
        />
        
        {/* Edge boundary line */}
        <motion.path 
          d={linePath} 
          fill="none"
          stroke="#E5E7EB" // gray-200
          strokeWidth="0.2"
        />
        
        {/* Animated dot marker */}
        <motion.circle 
          cx={dotX} 
          cy={dotY} 
          r="0.8" 
          fill="#D4E938" // Lime green accent
          stroke="#FFFFFF"
          strokeWidth="0.3"
          className="shadow-sm drop-shadow-sm"
        />
      </svg>
    </div>
  );
}
