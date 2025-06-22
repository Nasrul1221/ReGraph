import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { wordToUpperCase } from '@/lib/utils';

export default function MyCheckBox({ identifier, chartOptions, setChartOptions }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={identifier}
        checked={chartOptions.identifier}
        onCheckedChange={(newState) => {
          setChartOptions((prev) => ({
            ...prev,
            [identifier]: newState,
          }));
        }}
      />
      <Label htmlFor={identifier}>{wordToUpperCase(identifier)}</Label>
    </div>
  );
}
