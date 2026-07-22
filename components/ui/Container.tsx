import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "site-container mx-auto w-full min-w-0 max-w-container px-4 sm:px-6",
        className
      )}
      {...props}
    />
  );
}
