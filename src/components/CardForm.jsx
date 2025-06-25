import React from 'react';
import { cn } from '@/lib/utils';

export default function CardForm({ children, className, props }) {
  return (
    <form {...props} className={cn(className, 'p-5 rounded-[10px] bg-secondary')}>
      {children}
    </form>
  );
}
