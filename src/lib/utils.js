import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function wordToUpperCase(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}
