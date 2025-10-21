import { ReactFlow, Controls, Background, type NodeTypes } from '@xyflow/react';
import { MessageNode } from './message-node';
import {
  useChatBotFlowBuilderActions,
  useChatBotFlowBuilderEdges,
  useChatBotFlowBuilderNodes,
} from '@/stores/chat-bot-flow-builder-store';

const nodeTypes: NodeTypes = {
  message: MessageNode,
};

export function NodesCanvas() {
  const nodes = useChatBotFlowBuilderNodes();
  const edges = useChatBotFlowBuilderEdges();
  const { onNodesChange, onEdgesChange, onConnect } =
    useChatBotFlowBuilderActions();

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
