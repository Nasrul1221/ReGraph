import { useCallback, useState } from "react";
import { useAtom } from "jotai";
import { userDataJotai } from "../../../stores/dataCharts.jotai";

function useGetData() {
  const [fileName, setFileName] = useState("");
  const [, setUserData] = useAtom(userDataJotai);

  const handleFile = useCallback((e) => {
    setFileName(e.target.files[0]?.name);
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (!json?.options) throw new Error("'options' is required!");
        if (!json?.series) throw new Error("'series' is required!");

        setUserData(json);
      } catch (err) {
        alert("Error while reading JSON: " + err.message);
      }

      e.target.value = null;
    };

    reader.readAsText(file);
  }, []);

  return { handleFile, fileName };
}

export default useGetData;
