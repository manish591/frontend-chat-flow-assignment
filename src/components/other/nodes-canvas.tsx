import {
  ReactFlow,
  Controls,
  Background,
  type NodeTypes,
  type Node,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';
import { MessageNode } from './message-node';
import {
  useChatBotFlowBuilderActions,
  useChatBotFlowBuilderEdges,
  useChatBotFlowBuilderNodes,
} from '@/stores/chat-bot-flow-builder-store';
import { useCallback } from 'react';
import { useDragAndDropStoreType } from '@/stores/drag-and-drop-store';
import { nanoid } from 'nanoid';

const nodeTypes: NodeTypes = {
  message: MessageNode,
};

function NodeCanvasDnD() {
  const nodes = useChatBotFlowBuilderNodes();
  const edges = useChatBotFlowBuilderEdges();
  const { onNodesChange, onEdgesChange, onConnect, addNode } =
    useChatBotFlowBuilderActions();
  const type = useDragAndDropStoreType();
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });
      const newNode: Node = {
        id: nanoid(),
        type,
        position,
        data: {
          text: 'This is a text node',
        },
      };

      addNode(newNode);
    },
    [screenToFlowPosition, type],
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export function NodesCanvas() {
  return (
    <ReactFlowProvider>
      <NodeCanvasDnD />
    </ReactFlowProvider>
  );
}
