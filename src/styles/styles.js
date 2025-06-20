export const linearAnimation = {
  initial: {
    background: 'linear-gradient(to right, #CB3CFF, #7F25FB)',
  },
  hovered: {
    background: 'linear-gradient(to right, #7F25FB, #CB3CFF)',
    scale: 1.03,
    transition: {
      duration: 0.3,
    },
  },
  active: {
    scale: 1.07,
  },
};

export const containerAnimation = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 8,
    },
  },
};