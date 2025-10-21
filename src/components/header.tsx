import { IconChecks } from '@tabler/icons-react';

export function Header() {
  return (
    <header className="z-40 rounded-t-sm relative h-12 border-b flex items-center px-4 bg-background">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-muted-foreground/60">Pipelines</span>
          <span className="text-muted-foreground/60">/</span>
          <span>New Pipeline</span>
        </div>
        <button className="bg-accent text-accent-foreground border border-primary/40 cursor-pointer rounded-lg px-3 py-1 text-sm flex items-center gap-2">
          <IconChecks className="size-4" />
          <span>Save</span>
        </button>
      </div>
    </header>
  );
}
