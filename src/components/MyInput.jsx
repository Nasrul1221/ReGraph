import { Input } from './ui/input';
import { cn } from '@/lib/utils';

export default function MyInput({ className, ...props }) {
  return (
    <Input
      {...props}
      className={cn(
        className,
        'w-full outline-none border-gray-700 text-secondary-foreground bg-background rounded p-2'
      )}
    />
  );
}
