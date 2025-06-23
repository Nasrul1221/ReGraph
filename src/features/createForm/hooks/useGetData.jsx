import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { userDataJotai } from '../../../stores/dataCharts.jotai';

function useGetData() {
  const [, setUserData] = useAtom(userDataJotai);

  const handleFile = useCallback((e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (!json?.series) throw new Error("'series' is required!");

        setUserData(json);
      } catch (err) {
        alert('Error while reading JSON: ' + err.message);
      }
    };

    reader.readAsText(file);
  }, []);

  return { handleFile };
}

export default useGetData;
