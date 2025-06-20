// Components
import { Button } from './ui/button';

// Radix UI
import { Slot } from '@radix-ui/react-slot';

// Styles
import { linearAnimation } from '@/styles/styles';
import { motion } from 'framer-motion';
import { buttonVariants } from './ui/button';

//
import { cn } from '@/lib/utils';

const AnimatedButtonMotion = motion.create(Button);
const MotionSlot = motion.create(Slot);

export default function AnimatedButton({ children, asChild, variant, size, className, ...props }) {
  const Comp = asChild ? MotionSlot : AnimatedButtonMotion;
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      variants={linearAnimation}
      initial="initial"
      whileHover="hovered"
      whileTap="active"
      {...props}
    >
      {children}
    </Comp>
  );
}
