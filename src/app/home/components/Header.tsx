import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="mt-[72px]">
      <nav className="layout-center w-full flex justify-between text-primary-pink font-bold text-2xl leading-6">
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
    </header>
  );
}
