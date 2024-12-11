import { cn } from "@/utils/cn";

interface ILinkComponentProps {
  label: string;
  linkUrl: string;
  className?: string;
}

export default function LinkComponent({
  label,
  linkUrl,
  className,
}: ILinkComponentProps) {
  return (
    <a
      className={cn(
        "underline underline-offset-2 lg:no-underline block font-bold break-words text-center text-primary-pink my-4 group relative w-fit mx-auto lg:text-2xl lg:my-6",
        className,
      )}
      href={linkUrl}
      target="_blank"
    >
      <span className="hidden lg:block bg-current absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
      {label}
    </a>
  );
}
