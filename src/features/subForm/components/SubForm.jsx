// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { typeChartAtom } from '../../../stores/typeCharts.jotai';

// Custom hooks
import { useChangeOptions } from '../hooks/useChangeOptions';

// Data
import { formComponents } from '../data/formComponents';

// Framer motion
import { motion } from 'framer-motion';

// Styles
import { containerAnimation } from '@/styles/styles';

export default function SubForm() {
  const [typeChart] = useAtom(typeChartAtom);
  const Form = formComponents[typeChart];

  useChangeOptions();

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="w-[300px] h-[200px] shadow-lg rounded-[10px] p-5 bg-secondary"
    >
      {Form ? <Form /> : null}
    </motion.div>
  );
}
