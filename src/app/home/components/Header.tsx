import { BitcoinIcon } from "@/components/icons/BitcoinIcon";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="max-w-md mx-auto px-5 lg:max-w-none mt-7 lg:px-0 lg:mt-[72px]">
      <nav className="hidden layout-center w-full justify-between text-primary-pink font-bold text-xl leading-6 xl:text-2xl lg:flex">
        <HeaderLink target="home" label="Home" />
        <HeaderLink target="values" label="Values" />
        <HeaderLink target="whatWeDo" label="What we do" />
        <HeaderLink target="ourPeople" label="Our people" />
        <HeaderLink target="sponsors" label="Sponsors" />
        <HeaderLink target="supportUs" label="Support us" />
        <button type="button" className="group relative">
          <span className="bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
          Português
        </button>
      </nav>

      <div className="flex justify-center lg:hidden">
        <h1 className="text-xl mr-5">:~$ Scalar School</h1>
        <BitcoinIcon className="size-[26px] transition-all animate-spin-slow" />
      </div>
    </header>
  );
}
