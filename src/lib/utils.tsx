import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export const cn = (...inputs: (string | undefined | null | false)[]) => {
  return twMerge(clsx(inputs));
}

// cn is a utility function that merges multiple class names using clsx and tailwind-merge
