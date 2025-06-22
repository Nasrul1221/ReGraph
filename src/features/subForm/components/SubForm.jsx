// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { typeChartAtom } from '../../../stores/typeCharts.jotai';
import { options } from '@/stores/chartOptions.jotai';

// Custom hooks
import { useChangeOptions } from '../hooks/useChangeOptions';

// Data
import { formComponents } from '../data/formComponents';
import { charts, components } from '../data/optionsObject';

// Framer motion
import { motion } from 'framer-motion';

// Styles
import { containerAnimation } from '@/styles/styles';

// Shadcn UI
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@radix-ui/react-slider';
import { Label } from '@radix-ui/react-label';
import { Select } from '@/components/ui/select';

export default function SubForm() {
  const [chartOptions, setChartOptions] = useAtom(options);
  const [typeChart] = useAtom(typeChartAtom);
  const Form = formComponents[typeChart];
  const chart = charts[typeChart];

  useChangeOptions();

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="w-[300px] h-[200px] shadow-lg rounded-[10px] p-5 bg-secondary flex flex-col gap-1"
    >
      {/* <div className="flex items-center gap-2">
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
      </div> */}

      {/* {Form ? <Form /> : null} */}

      {chart &&
        Object.keys(chart).map((key, index) => {
          const Comp = components[key];
          return <Comp key={index} />;
        })}
    </motion.div>
  );
}
