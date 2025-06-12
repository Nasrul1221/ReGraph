import { useCallback, useState } from "react";
import { useAtom } from "jotai";
import { rawDataAtom } from "../store/dataChartsJotai";

function useGetData() {
  const [fileName, setFileName] = useState("");
  const [, setRawData] = useAtom(rawDataAtom);

  const handleFile = useCallback(
    (e) => {
      setFileName(e.target.files[0]?.name);
      const file = e.target.files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target.result);
          if (!json?.options) throw new Error("'options' is required!");
          if (!json?.series) throw new Error("'series' is required!");

          setRawData(json);
        } catch (err) {
          alert("Error while reading JSON: " + err.message);
        }

        e.target.value = null;
      };

      reader.readAsText(file);
    },
    [setRawData]
  );

  return { handleFile, fileName };
}

export default useGetData;
