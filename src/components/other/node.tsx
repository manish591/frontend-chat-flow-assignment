import { cn } from '@/lib/utils';

export function Node({
  className,
  ...props
}: Readonly<React.ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'rounded-sm border min-w-[200px] bg-background hover:border-primary/60',
        'shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
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
        'h-8 px-3 flex items-center text-sm bg-accent text-accent-foreground rounded-t-sm',
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
  return <div className={cn('px-3 py-3 text-xs', className)} {...props} />;
}
