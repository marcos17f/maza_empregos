import { motion, useInView, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`${width === "100%" ? "w-full" : "w-fit"} relative`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 36 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
