// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { options } from '@/stores/chartOptions.jotai';

// Shadcn UI
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export default function SubFormArea() {
  const [chartOptions, setChartOptions] = useAtom(options);

  return (
    <>
      <div className="flex items-center gap-2 bg-background p-2 rounded">
        <Label htmlFor="slider">Width</Label>
        <Slider
          id="slider"
          defaultValue={[5]}
          max={15}
          min={1}
          className="w-[120px]"
          onValueChange={(newValue) => setChartOptions((prev) => ({ ...prev, width: newValue }))}
        />
      </div>
    </>
  );
}
