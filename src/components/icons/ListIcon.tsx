interface IListIconProps {
  className?: string;
}

export default function ListIcon({ className }: IListIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M4 12h16M4 6h16M4 18h16" />
    </svg>
  );
}
