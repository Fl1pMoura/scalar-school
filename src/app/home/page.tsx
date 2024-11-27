/* eslint-disable react/no-unescaped-entities */
import { BitcoinIcon } from "@/components/icons/BitcoinIcon";
import fs from "fs";
import Image from "next/image";
import path from "path";
import Header from "./components/Header";

export default function Home() {
  const posters = fs.readdirSync(path.join(process.cwd(), "public/posters"));
  return (
    <>
      <Header />
      <section>
        <div className="layout-center">
          <div className="flex items-center w-full max-w-[1220px] justify-center mx-auto gap-10 text-black mt-28 mb-16">
            <h1 className="text-6xl">:~$ Scalar School</h1>
            <BitcoinIcon className="size-[90px]" />
          </div>
          <a
            href="#"
            target="_blank"
            className="flex max-h-[68px] justify-center items-center font-bold text-3xl text-white bg-primary-pink max-w-[498px] w-full mx-auto rounded-full py-3.5 px-4"
          >
            Join our Discord server
          </a>
          <article className="max-w-[1030px] w-full mx-auto mt-20 mb-28">
            <header className="bg-primary-blue w-full px-5 py-2">
              <em className="text-white font-bold text-xl">
                Scalar School of Bitcoin Developers
              </em>
            </header>
            <div className="font-bold px-5 pt-6 not-italic text-primary-purple border border-primary-blue border-t-0 min-h-[372px] text-xl space-y-2">
              <span className="block">
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                Inspiring the next generation of Bitcoin developers.{" "}
              </span>{" "}
              <span className="block">
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                Continental dimensions require continental efforts.{" "}
              </span>{" "}
              <span className="block">
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                We are here to change the world.{" "}
              </span>{" "}
              <span className="block">
                <em className="not-italic text-primary-pink">
                  scalar@bitcoin :~$
                </em>{" "}
                Start small, then scale.{" "}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section>
        <div className="layout-center">
          <h2 className="text-heading">Vision</h2>
          <div className="space-y-5">
            <p className="text-lg text-black">
              Scalar School was created from a shared dream: to make Bitcoin
              open-source development inclusive and accessible for beginners.
            </p>
            <p className="text-lg text-black">
              Established at{" "}
              <strong className="text-primary-pink">block 834812</strong> by{" "}
              <strong className="text-primary-pink">Luciana Ferreira</strong>
              and{" "}
              <strong className="text-primary-pink">
                Rachel Rybarczyk
              </strong>{" "}
              with a generous grant from the{" "}
              <strong className="text-primary-pink">
                Human Rights Foundation
              </strong>
              , we have been able to drive change within our developer community
              and amplify our voice. We are now expanding our reach and
              increasing our impact.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="layout-center">
          <h2 className="text-heading">Values</h2>
          <div className="space-y-5">
            <p className="text-lg text-black">
              <strong className="text-primary-pink">
                We believe in open source.
              </strong>{" "}
              As stewards of freedom, progress, and the free flow of
              information, everything we produce is MIT-licensed. Scalar School
              is built to span generations and create a lasting impact on
              humanity.
            </p>
            <p className="text-lg text-black">
              <strong className="text-primary-pink">
                Low time preference, high sense of urgency.
              </strong>{" "}
              We value agency and taking bold steps today to create meaningful
              change, confident in our ability to learn and adapt as we grow.
            </p>
            <p className="text-lg text-black">
              <strong className="text-primary-pink">
                Impact through playfulness.
              </strong>{" "}
              Technical rigor doesn’t have to be boring, and life is better when
              we learn with joy. Even the hardest days are brightened when we
              come together as a community to study, code, and grow.
            </p>{" "}
            <p className="text-lg text-black">
              <strong className="text-primary-pink">Abundance mindset.</strong>{" "}
              We believe money is energy, a force that flows freely, and that
              the prosperity of our peers uplifts us all.
            </p>{" "}
            <p className="text-lg text-black">
              <strong className="text-primary-pink">
                Harmony in diversity.
              </strong>{" "}
              We embrace emergence as the natural result of collective effort
              and diverse perspectives. Through collaboration, adaptation, and
              the free exchange of ideas, we catalyze innovation and progress.
            </p>{" "}
            <p className="text-lg text-black">
              <strong className="text-primary-pink">We forgive.</strong>{" "}
              Relationships and shared values come before being right. We
              embrace mistakes as opportunities to grow, keeping empathy and
              collaboration at the heart of everything we do.
            </p>{" "}
            <p className="text-lg text-black">
              <strong className="text-primary-pink">We dream big.</strong> Want
              to become a core dev? It's perfectly possible. Here, imagination
              knows no limits, and with focus and hard work, there's no end to
              what we can achieve together.
            </p>{" "}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="layout-center">
          <h2 className="text-heading">What we do</h2>
          <div className="space-y-5">
            <p className="text-lg text-black">
              <strong className="text-primary-pink">We meet.</strong> Hosting
              nightly sessions on Discord where we come together to code and
              learn. The community is open to activity proposals and lessons,
              and members can count on our engagement and peer review. Our
              activities are outlined in the #schedule channel.
            </p>
            <p className="text-lg text-black">
              <strong className="text-primary-pink">We build community.</strong>{" "}
              We support universities in bootstrapping their Bitcoin Clubs
              through the Bitcoin Students Network. Check out the hall of clubs
              kickstarted and nurtured by Scalar School.
            </p>
          </div>
          <a
            className="block font-bold text-center text-2xl text-primary-pink my-6"
            href="https://x.com/fatecbitcoin"
            target="_blank"
          >
            Fatec Bitcoin Club
          </a>
          <a
            className="block font-bold text-center text-2xl text-primary-pink mb-6"
            href="https://x.com/ubtcx"
            target="_blank"
          >
            UFSCar Bitcoin Club
          </a>
          <p className="text-lg text-black">
            We are also proud organizers of the classic Bitdevs events in the
            countryside of São Paulo state, covering Ribeirão Preto-SP and São
            Carlos-SP, collectively known as Bitdevs Interior:
          </p>
          <a
            className="block font-bold text-center text-2xl text-primary-pink my-6"
            href="https://github.com/bitdevsinterior"
            target="_blank"
          >
            https://github.com/bitdevsinterior
          </a>
          <a
            className="block font-bold text-center text-2xl text-primary-pink my-6"
            href="https://github.com/bitdevsinterior"
            target="_blank"
          >
            https://x.com/bitdevsinterior
          </a>
          <p className="text-lg text-black max-w-[820px]">
            Check out the artwork created by the students for the genesis
            meeting of the UFSCar Bitcoin Club:
          </p>
          <div className="flex mt-7">
            {posters.map((poster) => (
              <figure key={poster} className="w-1/5">
                <Image
                  alt="Poster ufscar bitcoin club"
                  src={`/posters/${poster}`}
                  // O Next.js pegará width/height automaticamente da imagem
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto" // Para responsividade
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="layout-center">
          <h2 className="text-heading">Attention from the press:</h2>
          <p className="text-lg text-black">
            We were honored to receive coverage from BeInCrypto when we launched
            our first Bitcoin course cohort for women.
          </p>
          <a
            className="block font-bold text-center text-2xl text-primary-pink my-6"
            href="https://br.beincrypto.com/mulheres-acesso-curso-gartuito-bitcoin-brasil/"
            target="_blank"
          >
            School offers a free Bitcoin course for women
          </a>
          <p className="text-lg text-black">
            See this iconic post from the first cohort of Scalar School.
          </p>
          <a
            className="block font-bold text-center text-2xl text-primary-pink my-6"
            href="https://x.com/scalarschool/status/1851794719962964150"
            target="_blank"
          >
            https://x.com/scalarschool/status/1851794719962964150
          </a>
        </div>
      </section>
    </>
  );
}
