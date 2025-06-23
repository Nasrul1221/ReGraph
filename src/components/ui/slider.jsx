import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef(({ className, value, ...props }, ref) => {
  const [isActive, setIsActive] = React.useState(false);
  const [centerPoint, setCenterPoint] = React.useState(null);
  const thumbRef = React.useRef();
  const contRef = React.useRef();

  React.useEffect(() => {
    if (thumbRef.current) {
      const thumbCoor = thumbRef.current.getBoundingClientRect();
      const contCoor = contRef.current.getBoundingClientRect();

      const thumbCenter = thumbCoor.left + thumbCoor.width / 2;
      const containerLeft = contCoor.left;

      const relativeX = thumbCenter - containerLeft;

      setCenterPoint(relativeX);
    }
  }, [thumbRef.current, value]);

  return (
    <div ref={contRef}>
      <SliderPrimitive.Root
        onPointerDown={() => setIsActive(true)}
        onPointerUp={() => setIsActive(false)}
        ref={ref}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          ref={thumbRef}
          className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        />
      </SliderPrimitive.Root>
      <div
        className="flex items-center top-4 justify-center absolute transition-opacity duration-200 bg-background w-12 h-7 rounded mt-2 before:content-[''] before:absolute before:border-t-[10px] before:border-r-[10px] before:border-l-[10px] before:border-b-[15px] before:border-t-transparent before:border-b-background before:border-r-transparent before:border-l-transparent before:-top-5"
        style={{
          left: `${centerPoint}px`,
          transform: 'translateX(-50%)',
          opacity: `${isActive ? 1 : 0}`,
        }}
      >
        {value}
      </div>
    </div>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
