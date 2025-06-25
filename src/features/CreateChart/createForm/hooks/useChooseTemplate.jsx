import { useAtom } from 'jotai';
import * as chartTemplates from '../../../../charts/templates';
import { rawDataAtom } from '@/features/CreateChart/createForm/stores/dataCharts.jotai';

export function useChooseTemplate(typeChart) {
  const [, setRawData] = useAtom(rawDataAtom);

  const fun = () => {
    if (typeChart === 'line') setRawData(chartTemplates['line']);
    else if (typeChart === 'area') setRawData(chartTemplates['area']);
    else if (typeChart === 'bar') setRawData(chartTemplates['bar']);
    else if (typeChart === 'column') setRawData(chartTemplates['column']);
    else if (typeChart === 'pie') setRawData(chartTemplates['pie']);
    else if (typeChart === 'donut') setRawData(chartTemplates['donut']);
    else if (typeChart === 'radar') setRawData(chartTemplates['radar']);
    else if (typeChart === 'heatmap') setRawData(chartTemplates['heatmap']);
    else if (typeChart === 'radialBar') setRawData(chartTemplates['radialBar']);
  };

  return fun;
}
