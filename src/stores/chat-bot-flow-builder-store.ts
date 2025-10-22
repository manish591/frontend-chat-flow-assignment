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

type ChatBotFlowBuilderActions = {
  onNodesChange: OnNodesChange<Node>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeFields: (nodeId: string, fieldName: string, fieldValue: string) => void
  selectNode: (nodeId: string | null) => void
  addNode: (node: Node) => void
}

export type ChatBotFlowBuilderState = {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  actions: ChatBotFlowBuilderActions
};

const useChatBotFlowBuilderStore = create<ChatBotFlowBuilderState>((set, get) => ({
  nodes: [],
  edges: [],
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
      const sourceNodeId = connection.source;
      const targetNodeId = connection.target;

      const isEdgeExists = get().edges.find(edge => edge.source === targetNodeId && edge.target === sourceNodeId);

      if (isEdgeExists) {
        return;
      }

      set({
        edges: addEdge(connection, get().edges),
      });
    },
    addNode: (node) => {
      set({
        nodes: [...get().nodes, node],
      })
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