import Image from "next/image";

export interface IPersonCardProps {
  name: string;
  imageSrc: string;
  role: string;
}

export default function PersonCard({ imageSrc, name, role }: IPersonCardProps) {
  return (
    <div className="flex flex-col items-center max-w-[234px]">
      <div className="relative size-[180px] lg:size-[214px]">
        <Image
          alt={name}
          src={imageSrc}
          fill
          sizes="214px"
          className="rounded-full object-cover"
        />
      </div>
      <p className="text-center mt-4 text-lg text-black lg:mt-7 lg:text-xl">
        {name}
      </p>
      <p className="text-center text-black leading-normal lg:text-lg">{role}</p>
    </div>
  );
}
