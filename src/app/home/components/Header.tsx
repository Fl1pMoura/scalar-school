import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="mt-[72px]">
      <nav className="layout-center w-full flex justify-between text-primary-pink font-bold text-2xl leading-6">
        <HeaderLink label="Home" />
        <HeaderLink label="Values" />
        <HeaderLink label="What we do" />
        <HeaderLink label="Our people" />
        <HeaderLink label="Sponsors" />
        <HeaderLink label="Support us" />
        <HeaderLink label="Português" />
      </nav>
    </header>
  );
}
