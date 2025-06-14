import { useAtom } from "jotai";
import { typeChartAtom } from "../../../store/typeCharts.jotai";
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";

export default function SubForm() {
  const [typeChart] = useAtom(typeChartAtom);

  return (
    <div className="w-[300px] h-[200px] shadow-lg border rounded-xl p-5">
      {typeChart === "line" || typeChart === "area" ? (
        <div className="flex items-center gap-2">
          <Checkbox id="stroke" />
          <Label htmlFor="stroke">Stroke</Label>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
