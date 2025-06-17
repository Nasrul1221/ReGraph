// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { options } from '@/stores/chartOptions.jotai';

// Shadcn UI
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function SubFormArea() {
  const [chartOptions, setChartOptions] = useAtom(options);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox
          id="toolbar"
          checked={chartOptions.toolbar}
          onCheckedChange={(newState) =>
            setChartOptions((prev) => ({
              ...prev,
              toolbar: newState,
            }))
          }
        />
        <Label htmlFor="toolbar">Toolbar</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="stroke"
          checked={chartOptions.stroke}
          onCheckedChange={(newState) =>
            setChartOptions((prev) => ({
              ...prev,
              stroke: newState,
            }))
          }
        />
        <Label htmlFor="stroke">Stroke</Label>
      </div>

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
    </div>
  );
}
