// Components
import { Button } from './ui/button';

// Radix UI
import { Slot } from '@radix-ui/react-slot';

// Styles
import { buttonsStyle } from '@/styles/styles';
import { motion } from 'framer-motion';

const AnimatedButtonMotion = motion.create(Button);
const MotionSlot = motion.create(Slot);

export default function AnimatedButton({ children, asChild, ...props }) {
  const Comp = asChild ? MotionSlot : AnimatedButtonMotion;
  return (
    <Comp
      variants={buttonsStyle}
      initial="initial"
      whileHover="hovered"
      whileTap="active"
      {...props}
    >
      {children}
    </Comp>
  );
}
