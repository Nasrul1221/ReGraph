import { Slider } from '@/components/ui/slider';

export default function MySlider({ setChartOptions, props }) {
  return (
    <Slider
      defaultValue={[5]}
      min={1}
      max={15}
      onValueChange={(newValue) => {
        setChartOptions((prev) => ({
          ...prev,
          width: newValue,
        }));
      }}
      {...props}
    />
  );
}
