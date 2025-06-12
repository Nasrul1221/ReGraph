import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "./ui/select";
import { wordToUpperCase } from "../lib/utils";

export default function MySelect({ object, setTypeChart }) {
  const handleChange = (value) => {
    setTypeChart(value);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Types</SelectLabel>
          {object.map((item, index) => (
            <SelectItem key={index} value={item.type}>
              {wordToUpperCase(item.type)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
