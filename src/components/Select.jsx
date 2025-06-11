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
import { useContext } from "react";
import { FormContext } from "./Context";

export default function DropDownMenu({ object }) {
  const { setTypeChart } = useContext(FormContext);
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
