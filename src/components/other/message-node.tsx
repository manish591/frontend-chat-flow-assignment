import {
  Handle,
  Position,
  type Node as NodeType,
  type NodeProps,
} from '@xyflow/react';
import { Node, NodeContent, NodeHeader } from './node';
import { IconMessage, IconSettings } from '@tabler/icons-react';
import { Button } from '../ui/button';
import { useChatBotFlowBuilderActions } from '@/stores/chat-bot-flow-builder-store';
import { useAppUIActions } from '@/stores/app-ui-store';

type MessageNode = NodeType<{ text: string }, 'message'>;

export function MessageNode({
  id,
  data,
  selected,
}: Readonly<NodeProps<MessageNode>>) {
  const { selectNode } = useChatBotFlowBuilderActions();
  const { updateSidebarView } = useAppUIActions();

  return (
    <Node selected={selected}>
      <NodeHeader>
        <div className="flex items-center gap-2">
          <IconMessage className="size-4" />
          <span>Send Message</span>
        </div>
        <Button
          size="icon-sm"
          variant="ghost"
          className="ml-auto w-4 h-4 cursor-pointer"
          onClick={() => {
            selectNode(id);
            updateSidebarView('settings');
          }}
        >
          <IconSettings className="text-muted-foreground size-3!" />
        </Button>
      </NodeHeader>
      <NodeContent>
        <p>{data.text}</p>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </NodeContent>
    </Node>
  );
}
