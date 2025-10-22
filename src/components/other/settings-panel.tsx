import { IconChevronLeft } from '@tabler/icons-react';
import { Button } from '../ui/button';
import { useAppUIActions } from '@/stores/app-ui-store';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  useChatBotFlowBuilderActions,
  useChatBotFlowBuilderSelectedNode,
} from '@/stores/chat-bot-flow-builder-store';
import { useEffect, useState } from 'react';

export function SettingsPanel() {
  const { updateSidebarView } = useAppUIActions();
  const selectedNode = useChatBotFlowBuilderSelectedNode();
  const { selectNode, updateNodeFields } = useChatBotFlowBuilderActions();
  const [value, setValue] = useState(
    selectedNode ? (selectedNode.data.text as string) : '',
  );

  useEffect(() => {
    if (selectedNode) {
      setValue(selectedNode.data.text as string);
    }
  }, [selectedNode]);

  useEffect(() => {
    if (selectedNode) {
      updateNodeFields(selectedNode.id, 'text', value);
    }
  }, [value]);

  return (
    <div className="w-full h-full">
      <div className="px-6 py-4 h-full flex flex-col">
        <div className="flex items-center gap-2 translate-x-[-10px]">
          <Button
            variant="ghost"
            size="icon-sm"
            className="cursor-pointer"
            onClick={() => {
              updateSidebarView('nodes');
              selectNode(null);
            }}
          >
            <IconChevronLeft />
          </Button>
          <p className="text-sm font-semibold">Settings</p>
        </div>
        <div className="mt-6 space-y-3">
          <Label className="text-xs font-normal text-muted-foreground/70">
            Update text
          </Label>
          <Input
            className="border border-sidebar-border text-xs! placeholder:text-xs!"
            placeholder="Enter text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
