import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Edge,
  type Node,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange
} from "@xyflow/react";
import { create } from "zustand";

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
] as Edge[];

const initialNodes = [
  {
    id: '1',
    type: 'message',
    data: {
      text: 'i love annu ji'
    },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'message',
    data: {
      text: 'anjali ji cutie'
    },
    position: { x: 550, y: 50 },
  }
] as Node[];

type ChatBotFlowBuilderActions = {
  onNodesChange: OnNodesChange<Node>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeFields: (nodeId: string, fieldName: string, fieldValue: string) => void
  selectNode: (nodeId: string | null) => void
}

export type ChatBotFlowBuilderState = {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  actions: ChatBotFlowBuilderActions
};

const useChatBotFlowBuilderStore = create<ChatBotFlowBuilderState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  selectedNode: null,
  actions: {
    onNodesChange: (changes) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    onConnect: (connection) => {
      set({
        edges: addEdge(connection, get().edges),
      });
    },
    setNodes: (nodes) => {
      set({ nodes });
    },
    setEdges: (edges) => {
      set({ edges });
    },
    updateNodeFields(nodeId, fieldName, fieldValue) {
      set({
        nodes: get().nodes.map(node => {
          if (nodeId === node.id) {
            return {
              ...node,
              data: { ...node.data, [fieldName]: fieldValue }
            }
          }
          return node;
        })
      })
    },
    selectNode(nodeId) {
      set({
        nodes: get().nodes.map(node => {
          if (node.id === nodeId) {
            return {
              ...node,
              selected: true
            }
          }
          return node;
        }),
        selectedNode: get().nodes.find(node => node.id === nodeId)
      })
    },
  }
}));

export const useChatBotFlowBuilderEdges = () => useChatBotFlowBuilderStore((state) => state.edges);

export const useChatBotFlowBuilderNodes = () => useChatBotFlowBuilderStore((state) => state.nodes);

export const useChatBotFlowBuilderSelectedNode = () => useChatBotFlowBuilderStore((state) => state.selectedNode);

export const useChatBotFlowBuilderActions = () => useChatBotFlowBuilderStore((state) => state.actions);