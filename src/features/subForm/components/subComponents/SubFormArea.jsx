// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { options } from '@/stores/chartOptions.jotai';

// Shadcn UI
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

// Components
import MySelect from '@/components/MySelect';

// Data
import { selects } from '../../data/componentsData';

export default function SubFormArea() {
  const [chartOptions, setChartOptions] = useAtom(options);
  const handleChange = (value) => {
    setChartOptions((prev) => ({ ...prev, stroke: value }));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox
          id="markers"
          checked={chartOptions.markers}
          onCheckedChange={(newState) =>
            setChartOptions((prev) => ({
              ...prev,
              markers: newState,
            }))
          }
        />
        <Label htmlFor="markers">Markers</Label>
      </div>
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
      <MySelect object={selects} handleChange={handleChange} />
    </div>
  );
}
