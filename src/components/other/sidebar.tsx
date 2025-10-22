import {
  useAppUIIsSidebarVisible,
  useAppUISidebarView,
} from '@/stores/app-ui-store';
import { motion } from 'motion/react';
import { NodesPanel } from './nodes-panel';
import { SettingsPanel } from './settings-panel';

export function Sidebar() {
  const isSidebarVisible = useAppUIIsSidebarVisible();
  const sidebarView = useAppUISidebarView();

  return (
    <motion.aside
      initial={false}
      animate={{
        translateX: isSidebarVisible ? 0 : -260,
        width: isSidebarVisible ? 260 : 0,
        opacity: isSidebarVisible ? 1 : 0,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.2,
      }}
      className="h-full bg-card/50 border-r w-[260px] shrink-0 overflow-hidden"
    >
      <motion.div
        initial={{
          translateX: 0,
        }}
        animate={{
          translateX: sidebarView === 'settings' ? -260 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
        className="grid grid-cols-[260px_260px]"
      >
        <NodesPanel />
        <SettingsPanel />
      </motion.div>
    </motion.aside>
  );
}
