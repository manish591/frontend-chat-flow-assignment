import { useAppUIIsSidebarVisible } from '@/stores/app-ui-store';
import { NodesPanel } from './nodes-panel';
import { SettingsPanel } from './settings-panel';
import { AnimatePresence, motion } from 'motion/react';

export function Sidebar() {
  const isSidebarVisible = useAppUIIsSidebarVisible();

  return (
    <AnimatePresence>
      {isSidebarVisible && (
        <motion.aside
          animate={{
            opacity: [0, 1],
            translateX: ['-100%', 0],
            width: [0, 260],
          }}
          exit={{
            opacity: [1, 0],
            translateX: [0, '-100%'],
            width: [260, 0],
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.2,
          }}
          className="h-full bg-card/50 border-r w-[260px] shrink-0"
        >
          <NodesPanel />
          <SettingsPanel />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
