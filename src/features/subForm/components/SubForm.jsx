// React && State
import { useAtom } from "jotai";

// Custom hooks
import { useChangeOptions } from "../hooks/useChangeOptions";

// Jotai stores
import { typeChartAtom } from "../../../stores/typeCharts.jotai";
import { options } from "../../../stores/chartOptions.jotai";
import { rawDataAtom } from "../../../stores/dataCharts.jotai";

// Shadcn UI
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";

export default function SubForm() {
  const [chartOptions, setChartOptions] = useAtom(options);
  const [typeChart] = useAtom(typeChartAtom);

  useChangeOptions();

  return (
    <div className="w-[300px] h-[200px] shadow-lg border rounded-xl p-5">
      {typeChart === "line" || typeChart === "area" ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="stroke"
              checked={chartOptions.stroke}
              onCheckedChange={(newState) =>
                setChartOptions((prev) => ({ ...prev, stroke: newState }))
              }
            />
            <Label htmlFor="stroke">Stroke</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="markers"
              checked={chartOptions.markers}
              onCheckedChange={(newState) =>
                setChartOptions((prev) => ({ ...prev, markers: newState }))
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
