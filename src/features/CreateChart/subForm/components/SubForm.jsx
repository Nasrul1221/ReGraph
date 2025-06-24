// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { typeChartAtom } from '../../../../stores/typeCharts.jotai';
import { options } from '@/stores/chartOptions.jotai';

// Custom hooks
import { useChangeOptions } from '../hooks/useChangeOptions';

// Data
import { charts } from '../data/optionsObject';
import { selects } from '../data/componentsData';

// Framer motion
import { motion } from 'framer-motion';

// Styles
import { containerAnimation } from '@/styles/styles';

// Shadcn UI
import MySelect from '@/components/MySelect';
import MyCheckBox from './MyCheckBox';
import MySlider from './MySlider';

export default function SubForm() {
  const [chartOptions, setChartOptions] = useAtom(options);
  const [typeChart] = useAtom(typeChartAtom);
  const chart = charts[typeChart];

  const components = {
    curve: MySelect,
    markers: MyCheckBox,
    width: MySlider,
    toolbar: MyCheckBox,
  };

  const componentProps = {
    curve: {
      object: selects,
      handleChange: (value) => {
        setChartOptions((prev) => ({
          ...prev,
          stroke: value,
        }));
      },
    },
    markers: {
      identifier: 'markers',
      chartOptions: chartOptions,
      setChartOptions: setChartOptions,
    },
    toolbar: {
      identifier: 'toolbar',
      chartOptions: chartOptions,
      setChartOptions: setChartOptions,
    },
    width: { setChartOptions: setChartOptions },
  };

  useChangeOptions();

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="w-[300px] h-[200px] shadow-lg rounded-[10px] p-5 bg-secondary flex flex-col gap-1"
    >
      {chart &&
        Object.keys(chart).map((key, index) => {
          const Comp = components[key];
          const props = componentProps[key];
          return <Comp key={index} {...props} />;
        })}
    </motion.div>
  );
}
