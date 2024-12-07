import Image from "next/image";

export interface IPersonCardProps {
  name: string;
  imageSrc: string;
  role: string;
}

export default function PersonCard({ imageSrc, name, role }: IPersonCardProps) {
  return (
    <div className="flex flex-col items-center max-w-[234px]">
      <div className="relative w-[214px] h-[214px]">
        <Image
          alt={name}
          src={imageSrc}
          fill
          sizes="214px"
          className="rounded-full object-cover"
        />
      </div>
      <p className="text-center text-xl mt-7 text-black">{name}</p>
      <p className="text-center text-lg text-black leading-normal">{role}</p>
    </div>
  );
}
