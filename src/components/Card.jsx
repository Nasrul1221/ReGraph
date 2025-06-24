import { cn } from '@/lib/utils';

export default function Card({ children, className, props }) {
  return (
    <div {...props} className={cn(className, 'p-5 rounded-[10px] bg-secondary')}>
      {children}
    </div>
  );
}
