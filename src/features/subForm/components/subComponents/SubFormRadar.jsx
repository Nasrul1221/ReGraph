// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { options } from '@/stores/chartOptions.jotai';

// Shadcn UI
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function SubFormRadar() {
  const [chartOptions, setChartOptions] = useAtom(options);

  return (
    <div className="flex flex-col gap-2">
      
    </div>
  );
}
