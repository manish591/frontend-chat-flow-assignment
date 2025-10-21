import {
  Handle,
  Position,
  type Node as NodeType,
  type NodeProps,
} from '@xyflow/react';
import { Node, NodeContent, NodeHeader } from './node';
import { IconMessage } from '@tabler/icons-react';

type MessageNode = NodeType<{ text: string }, 'message'>;

export function MessageNode({ data }: Readonly<NodeProps<MessageNode>>) {
  return (
    <Node>
      <NodeHeader>
        <div className="flex items-center gap-2">
          <IconMessage className="size-4" />
          <span>Send Message</span>
        </div>
      </NodeHeader>
      <NodeContent>
        <p>{data.text}</p>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </NodeContent>
    </Node>
  );
}
