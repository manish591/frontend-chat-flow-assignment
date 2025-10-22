import { cn } from '@/lib/utils';

export function Node({
  className,
  selected,
  ...props
}: Readonly<
  React.ComponentProps<'div'> & {
    selected?: boolean;
  }
>) {
  return (
    <div
      className={cn(
        'rounded-sm border min-w-[200px] bg-background hover:border-primary/60 p-1',
        'shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
        selected && 'border-primary!',
        className,
      )}
      {...props}
    />
  );
}

export function NodeHeader({
  className,
  ...props
}: Readonly<React.ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'h-9 px-2 flex items-center text-sm bg-accent text-accent-foreground border border-primary/30 rounded-sm',
        className,
      )}
      {...props}
    />
  );
}

export function NodeContent({
  className,
  ...props
}: Readonly<React.ComponentProps<'div'>>) {
  return (
    <div
      className={cn('px-2 py-3 text-xs w-full text-left', className)}
      {...props}
    />
  );
}
