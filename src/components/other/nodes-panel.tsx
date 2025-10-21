import { IconMessage } from '@tabler/icons-react';

export function NodesPanel() {
  return (
    <div className="w-full h-full">
      <div className="px-6 py-4 h-full flex flex-col">
        <p className="text-sm font-semibold">Select Nodes</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="space-y-2 border border-transparent hover:border hover:border-primary/60 hover:-translate-y-1 duration-300 bg-background rounded-sm flex flex-col py-3 items-center justify-center h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <IconMessage className="size-6" />
            <p className="text-xs font-medium">Message</p>
          </div>
        </div>
      </div>
    </div>
  );
}
