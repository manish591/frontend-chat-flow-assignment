import { IconChecks, IconLayoutSidebarLeftCollapse } from '@tabler/icons-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import {
  useAppUIActions,
  useAppUIIsSidebarVisible,
} from '@/stores/app-ui-store';
import {
  useChatBotFlowBuilderEdges,
  useChatBotFlowBuilderNodes,
} from '@/stores/chat-bot-flow-builder-store';

export function Header() {
  const isSidebarVisible = useAppUIIsSidebarVisible();
  const { setSidebarVisibility } = useAppUIActions();
  const nodes = useChatBotFlowBuilderNodes();
  const edges = useChatBotFlowBuilderEdges();

  return (
    <header className="z-40 rounded-t-sm relative h-12 border-b flex items-center px-4 bg-background">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon-lg"
            className="h-8 w-8 mt-px cursor-pointer"
            onClick={() => {
              setSidebarVisibility(!isSidebarVisible);
            }}
          >
            <IconLayoutSidebarLeftCollapse className="size-[18px]!" />
          </Button>
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-muted-foreground/60">Pipelines</span>
            <span className="text-muted-foreground/60">/</span>
            <span>New Pipeline</span>
          </div>
        </div>
        <Button
          size="sm"
          variant="secondary"
          className={cn(
            'border border-primary/40 cursor-pointer rounded-lg px-3 text-sm',
          )}
          onClick={() => {
            const numNodes = nodes.length;
            const numEdges = edges.length;

            if (numNodes <= 0 || Math.abs(numNodes - numEdges) > 1) {
              toast.error('Workflow could not be saved', {
                position: 'top-center',
              });
            } else {
              toast.info('Workflow saved successfully', {
                position: 'top-center',
              });
            }
          }}
        >
          <IconChecks className="size-4" />
          <span>Save</span>
        </Button>
      </div>
    </header>
  );
}
