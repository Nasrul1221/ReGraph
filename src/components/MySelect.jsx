import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from './ui/select';
import { wordToUpperCase } from '../lib/utils';

export default function MySelect({ object = null, handleChange }) {
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="border-gray-700 rounded bg-background data-[placeholder]:text-secondary-foreground">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent className="border-none bg-background rounded">
        <SelectGroup>
          <SelectLabel className="text-secondary-foreground">Types</SelectLabel>
          {object.map((item, index) => (
            <SelectItem key={index} value={item.type} className="text-secondary-foreground">
              {wordToUpperCase(item.type)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
