import Link from "next/link";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  href: string;
  label: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function PrimaryButton({
  href,
  label,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <Link href={href} className={cn("btn btn-primary", className)} {...props}>
      {label}
    </Link>
  );
}
