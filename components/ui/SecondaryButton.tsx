import Link from "next/link";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = {
  href: string;
  label: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function SecondaryButton({
  href,
  label,
  className,
  ...props
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn("btn btn-secondary", className)}
      {...props}
    >
      {label}
    </Link>
  );
}
