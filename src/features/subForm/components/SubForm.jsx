// React && State
import { useAtom } from 'jotai';

// Jotai stores
import { typeChartAtom } from '../../../stores/typeCharts.jotai';

// Custom hooks
import { useChangeOptions } from '../hooks/useChangeOptions';

// Data
import { formComponents } from '../data/formComponents';

export default function SubForm() {
  const [typeChart] = useAtom(typeChartAtom);
  const Form = formComponents[typeChart];

  useChangeOptions();

  return (
    <div className="w-[300px] h-[200px] shadow-lg rounded-[10px] p-5 bg-secondary">
      {Form ? <Form /> : null}
    </div>
  );
}
