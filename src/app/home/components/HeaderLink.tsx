interface ILinkProps {
  label: string;
}

export default function HeaderLink({ label }: ILinkProps) {
  return (
    <a href="#" className="group relative">
      <span className="bg-primary-pink absolute bottom-[5px] h-[1px] group-hover:w-full w-0 transition-all" />
      {label}
    </a>
  );
}
