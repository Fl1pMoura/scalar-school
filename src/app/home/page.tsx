import { BitcoinIcon } from "@/components/icons/BitcoinIcon";
import HeaderLink from "./components/HeaderLink";

export default function Home() {
  return (
    <>
      <header className="mt-44">
        <nav className="max-w-[1552px] w-full flex justify-between px-5 mx-auto text-primary-pink font-bold text-3xl">
          <HeaderLink label="Home" />
          <HeaderLink label="Values" />
          <HeaderLink label="What we do" />
          <HeaderLink label="Our people" />
          <HeaderLink label="Sponsors" />
          <HeaderLink label="Support us" />
          <HeaderLink label="Português" />
        </nav>
      </header>
      <section>
        <div className="max-w-[1646px] px-5">
          <div className="flex items-center w-full max-w-[1220px]  justify-between mx-auto gap-5 text-black mt-36 mb-[97px]">
            <h1 className="text-[100px]">:~$ Scalar School</h1>
            <BitcoinIcon className="size-[120px]" />
          </div>
          <a
            href="#"
            target="_blank"
            className="flex justify-center items-center font-bold text-3xl text-white bg-primary-pink max-w-[498px] w-full mx-auto rounded-full py-3.5 px-4"
          >
            Join our Discord server
          </a>
          <article className="max-w-[1092px] w-full mx-auto mt-20">
            <header className="bg-primary-blue w-full px-5 py-2">
              <em className="text-white font-bold text-lg">
                Scalar School of Bitcoin Developers
              </em>
            </header>
            <div className="font-bold flex flex-col gap-2 px-5 pt-7 not-italic text-primary-purple border border-primary-blue border-t-0 min-h-[512px] text-2xl">
              <span>
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                Inspiring the next generation of Bitcoin developers.{" "}
              </span>{" "}
              <span>
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                Continental dimensions require continental efforts.{" "}
              </span>{" "}
              <span>
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                We are here to change the world.{" "}
              </span>{" "}
              <span>
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                Start small, then scale.{" "}
              </span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
