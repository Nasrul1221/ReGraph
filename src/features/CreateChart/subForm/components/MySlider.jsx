import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

export default function MySlider({ setChartOptions, props }) {
  const [value, setValue] = useState(null);

  return (
    <div className="relative">
      <Slider
        value={value}
        defaultValue={[5]}
        min={1}
        max={15}
        onValueChange={(newValue) => {
          setValue(newValue);
          setChartOptions((prev) => ({
            ...prev,
            width: newValue,
          }));
        }}
        {...props}
      />
    </div>
  );
}
