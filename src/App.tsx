import { IconMessage, IconPlus, IconX } from '@tabler/icons-react';
import { Header } from './components/header';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function App() {
  const [open, setOpen] = useState(false);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="min-h-svh p-2 grid bg-sidebar">
      <div className="relative border rounded-sm h-full flex flex-col bg-red-300 z-1">
        <Header />
        <div className="relative rounded-b-sm flex-1 h-full w-full bg-background">
          <div className="absolute left-[16px] top-[16px] z-20">
            <button
              className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary text-secondary-foreground cursor-pointer duration-300 opacity-100 hover:opacity-80 transition-opacity"
              onClick={() => {
                setOpen(true);
              }}
            >
              <IconPlus className="size-5" />
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: -144,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 0.15,
                  ease: 'easeInOut',
                }}
                exit={{
                  opacity: 0,
                }}
                className="z-30 absolute h-36 w-full bg-popover border-b shadow-[0_1px_4px_rgb(0,0,0,0.08)]"
              >
                <div className="px-4 py-4 h-full flex flex-col bg-card/50">
                  <p className="text-sm font-semibold">Select Nodes</p>
                  <div className="mt-3 flex gap-4 flex-1">
                    <div className="space-y-2 border border-transparent hover:border hover:border-primary/60 hover:-translate-y-1 duration-300 w-[100px] bg-background rounded-sm flex flex-col py-3 items-center justify-center h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                      <IconMessage className="size-6" />
                      <p className="text-xs font-medium">Message</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {open && (
              <motion.button
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="z-30 absolute left-[16px] top-[154px] flex items-center justify-center w-8 h-8 rounded-full cursor-pointer duration-300 hover:bg-secondary hover:text-secondary-foreground transition-all"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <IconX />
              </motion.button>
            )}
          </AnimatePresence>
          <div style={{ width: '100%', height: '100%' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              // onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              // onConnect={onConnect}
              fitView
            >
              <Controls />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}
