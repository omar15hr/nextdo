import { AnimatePresence, motion } from "motion/react";
import { PropsWithChildren } from "react";

interface CardWithAnimationsProps extends PropsWithChildren {
  isRemoving: boolean;
  completed: boolean;
}

export function CardWithAnimations({
  isRemoving,
  completed,
  children,
}: CardWithAnimationsProps) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isRemoving ? 0 : completed ? 0.4 : 1,
          x: isRemoving ? -100 : 0,
          scale: isRemoving ? 0.8 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          scale: { type: "spring", bounce: 0.2 },
        }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
