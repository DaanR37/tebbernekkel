import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

export default function Animatedpage({ children }) {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}
