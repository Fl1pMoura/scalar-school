"use client";
interface ILinkProps {
  label: string;
  target?: string;
}

export default function HeaderLink({ label, target }: ILinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a href={target} onClick={handleClick} className="group relative">
      <span className="bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
      {label}
    </a>
  );
}
