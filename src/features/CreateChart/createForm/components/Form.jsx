// React && State
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

// Hooks
import useGetData from '../hooks/useGetData';
import { useChooseTemplate } from '../hooks/useChooseTemplate';
import { useReset } from '../hooks/useReset';

// Components
import MySelect from '@/components/MySelect';
import AddLabels from './AddLabels';
import UploadFile from './UploadFile';
import AnimatedButton from '@/components/AnimatedButton';
import MyInput from '@/components/MyInput';

// Shadcn UI components
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';

// Jotai stores
import { userDataJotai } from '../stores/dataCharts.jotai';
import { typeChartAtom } from '../stores/typeCharts.jotai';
import { rawDataAtom, chartDataAtom } from '../stores/dataCharts.jotai';

// Charts
import { chartsTypes } from '../../../../charts/chartsTypes';
import { useGenerateChart } from '../hooks/useGenerateChart';

function Form() {
  const [count, setCount] = useState(0);
  const [labels, setLabels] = useState(null);
  const [dataCount, setDataCount] = useState(0);
  const [lines, setLines] = useState([]);
  const [typeChart, setTypeChart] = useAtom(typeChartAtom);
  const { handleFile } = useGetData();
  const [rawData, setRawData] = useAtom(rawDataAtom);
  const [, setChartData] = useAtom(chartDataAtom);
  const [userData] = useAtom(userDataJotai);
  const reset = useReset({
    setLabels,
    setChartData,
    setRawData,
    setLines,
    setDataCount,
    setTypeChart,
  });
  const generateChart = useGenerateChart({ rawData, userData, labels, setChartData, typeChart });

  const handleChange = (value) => {
    setTypeChart(value);
  };

  // When user data is uploaded, set dataCount with length,
  // labels fill with undfined, lines as a an empty arr
  useEffect(() => {
    if (userData && userData.series && Array.isArray(userData.series)) {
      setDataCount(userData.series.length);
      setLabels(new Array(userData.series.length).fill(undefined));
      setLines([]);
    }
  }, [userData]);

  // When data count is changed, set count
  useEffect(() => setCount(dataCount), [dataCount]);

  // When a user chose a type, set a template
  const fun = useChooseTemplate(typeChart);
  useEffect(() => {
    fun();
  }, [typeChart]);

  const handleApply = (index) => {
    const value = lines[index];
    if (value.trim() === '') return;

    setLabels((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });

    if (dataCount > 0) setDataCount((prev) => prev - 1);

    const updated = [...lines];
    updated[index] = '';
    setLines(updated);
  };

  const handleInputChange = (index, value) => {
    const updated = [...lines];
    updated[index] = value;
    setLines(updated);
  };

  const addLine = () => {
    try {
      if (lines.length < dataCount) {
        setLines((prev) => [...prev, '']);
        setCount((prev) => prev - 1);
      } else if (!rawData) throw new Error('Upload data');
      else if (lines.length >= dataCount) throw new Error('The max number of names is reached');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-secondary rounded-[10px] p-5 w-[300px] box-border flex flex-col gap-y-4">
      <AnimatedButton variant="linearGradient" onClick={generateChart}>
        Create
      </AnimatedButton>
      <UploadFile fun={handleFile} />

      <div>
        <AddLabels fun={addLine} count={count} />
        <MySelect object={chartsTypes} handleChange={handleChange} />
        <div className="flex flex-col gap-y-3 mt-5">
          {lines.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <MyInput
                id={`text-${index}`}
                onChange={(e) => handleInputChange(index, e.target.value)}
                value={lines[index]}
                placeholder="write here"
              />
              <AnimatedButton onClick={() => handleApply(index)}>Apply</AnimatedButton>
            </div>
          ))}
          <Button variant={'destructive'} onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
