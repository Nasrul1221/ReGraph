// React && State
import { useAtom } from "jotai";
import { useState } from "react";

// Jotai stores
import { typeChartAtom } from "../../../stores/typeCharts.jotai";
import { chartDataAtom, rawDataAtom } from "../../../stores/dataCharts.jotai";

// Shadcn UI
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";

export default function SubForm() {
  const [checkOptions, setCheckOptions] = useState({
    stroke: false,
    markers: false,
  });
  const [typeChart] = useAtom(typeChartAtom);
  const [, setRawData] = useAtom(rawDataAtom);

  return (
    <div className="w-[300px] h-[200px] shadow-lg border rounded-xl p-5">
      {typeChart === "line" || typeChart === "area" ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="stroke"
              checked={checkOptions.stroke}
              onCheckedChange={(newState) =>
                setCheckOptions((prev) => ({ ...prev, stroke: newState }))
              }
            />
            <Label htmlFor="stroke">Stroke</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="markers"
              checked={checkOptions.markers}
              onCheckedChange={(newState) =>
                setCheckOptions((prev) => ({ ...prev, markers: newState }))
              }
            />
            <Label htmlFor="markers">Markers</Label>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
