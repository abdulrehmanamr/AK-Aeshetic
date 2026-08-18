import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER (MK RESULT)',
  aspectRatio = 'aspect-[4/3]',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-sm bg-[#171614] ${aspectRatio} ${className} cursor-ew-resize`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      role="slider"
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(0, prev - 5));
        if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(100, prev + 5));
      }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After treatment result"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      {/* After Label */}
      <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-wider px-3 py-1 rounded-xs uppercase border border-white/20">
        {afterLabel}
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          loading="lazy"
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-[#DDD1C3] text-[10px] sm:text-xs font-semibold tracking-wider px-3 py-1 rounded-xs uppercase border border-white/20">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Bar and Drag Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#F7F3ED] text-[#171614] rounded-full shadow-xl flex items-center justify-center border-2 border-white">
          <div className="flex items-center space-x-1">
            <span className="text-[10px] font-bold">◀</span>
            <span className="text-[10px] font-bold">▶</span>
          </div>
        </div>
      </div>

      {/* Subtle Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white/90 text-[10px] tracking-wider px-3 py-1 rounded-full pointer-events-none uppercase">
        Drag slider to compare
      </div>
    </div>
  );
}
