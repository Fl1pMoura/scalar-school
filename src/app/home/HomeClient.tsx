"use client";
/* eslint-disable react/no-unescaped-entities */
import { BitcoinIcon } from "@/components/icons/BitcoinIcon";
import Image from "next/image";

import Header from "./components/Header";
import PersonCard from "./components/PersonCard";
import Typewriter from "./components/Typewriter";
import { useHome } from "./useHome";

export default function Home({
  initialData,
}: {
  initialData: ReturnType<typeof useHome>;
}) {
  const { posters, ourPeople } = useHome(initialData);
  return (
    <>
      <Header />
      <section>
        <div className="layout-center">
          <div className="hidden items-center w-full max-w-[1220px] justify-center mx-auto gap-10 text-black mt-28 mb-16 lg:flex">
            <h1 className="text-6xl">:~$ Scalar School</h1>
            <BitcoinIcon className="size-[90px]" />
          </div>
          <a
            href="https://discord.gg/PbYCWhVKgV"
            target="_blank"
            className="mt-6 flex max-h-[68px] justify-center items-center font-bold text-xl text-white bg-primary-pink max-w-[498px] w-full mx-auto rounded-full py-3.5 px-4 transition-all hover:bg-heading-purple active:bg-primary-blue lg:mt-0 lg:text-3xl"
          >
            Join our Discord server
          </a>
          <article className="max-w-[1030px] mt-6 mb-8 w-[calc(100%+40px)] -ml-5 lg:w-full lg:mt-20 lg:mb-28 lg:mx-auto">
            <header className="bg-primary-blue w-full px-4 py-2 lg:px-5">
              <em className="text-white font-bold text-base lg:text-xl">
                Scalar School of Bitcoin Developers
              </em>
            </header>
            <div className="font-bold px-5 py-4 not-italic text-primary-purple border border-primary-blue border-t-0 min-h-[297px] lg:min-h-[372px] text-base space-y-2 lg:text-xl lg:pt-6 lg:py-0">
              <Typewriter />
            </div>
          </article>
        </div>
      </section>

      <section id="home">
        <div className="layout-center">
          <h2 className="text-heading">Vision</h2>
          <div className="space-y-5">
            <p className="text-base lg:text-lg text-black leading-normal">
              Scalar School was created from a shared dream: to make Bitcoin
              open-source development inclusive and accessible for beginners.
            </p>
            <p className="text-base lg:text-lg text-black leading-normal">
              Established at{" "}
              <strong className="text-primary-pink">block 834812</strong> by{" "}
              <strong className="text-primary-pink">Luciana Ferreira</strong>{" "}
              and{" "}
              <strong className="text-primary-pink">Rachel Rybarczyk</strong>{" "}
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

      <section id="values" className="mt-8 lg:mt-12">
        <div className="layout-center">
          <h2 className="text-heading">Values</h2>
          <div className="space-y-5">
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">
                We believe in open source.
              </strong>{" "}
              As stewards of freedom, progress, and the free flow of
              information, everything we produce is MIT-licensed. Scalar School
              is built to span generations and create a lasting impact on
              humanity.
            </p>
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">
                Low time preference, high sense of urgency.
              </strong>{" "}
              We value agency and taking bold steps today to create meaningful
              change, confident in our ability to learn and adapt as we grow.
            </p>
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">
                Impact through playfulness.
              </strong>{" "}
              Technical rigor doesn’t have to be boring, and life is better when
              we learn with joy. Even the hardest days are brightened when we
              come together as a community to study, code, and grow.
            </p>{" "}
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">Abundance mindset.</strong>{" "}
              We believe money is energy, a force that flows freely, and that
              the prosperity of our peers uplifts us all.
            </p>{" "}
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">
                Harmony in diversity.
              </strong>{" "}
              We embrace emergence as the natural result of collective effort
              and diverse perspectives. Through collaboration, adaptation, and
              the free exchange of ideas, we catalyze innovation and progress.
            </p>{" "}
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">We forgive.</strong>{" "}
              Relationships and shared values come before being right. We
              embrace mistakes as opportunities to grow, keeping empathy and
              collaboration at the heart of everything we do.
            </p>{" "}
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">We dream big.</strong> Want
              to become a core dev? It's perfectly possible. Here, imagination
              knows no limits, and with focus and hard work, there's no end to
              what we can achieve together.
            </p>{" "}
          </div>
        </div>
      </section>

      <section id="whatWeDo" className="mt-8 lg:mt-12">
        <div className="layout-center">
          <h2 className="text-heading">What we do</h2>
          <div className="space-y-4 lg:space-y-8">
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">We meet.</strong> Hosting
              nightly sessions on Discord where we come together to code and
              learn. The community is open to activity proposals and lessons,
              and members can count on our engagement and peer review.
            </p>
            <a
              className="underline underline-offset-2 lg:no-underline block font-bold text-center text-primary-pink group relative w-fit mx-auto my-4 lg:text-2xl lg:my-6"
              href="https://discord.gg/PbYCWhVKgV"
              target="_blank"
            >
              <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
              Join our Discord server
            </a>
            <a
              className="underline underline-offset-2 lg:no-underline block font-bold text-center text-primary-pink group relative w-fit mx-auto my-4 lg:text-2xl lg:my-6"
              href="https://x.com/scalarschool"
              target="_blank"
            >
              <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
              Scalar School X
            </a>
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">We design.</strong> The
              ecosystem lacks educational materials in Brazilian Portuguese. We
              focus on translating existing content and designing brand-new
              instructional materials compiled from the best sources.
            </p>
            <a
              className="underline underline-offset-2 lg:no-underline block font-bold text-center text-primary-pink group relative w-fit mx-auto lg:text-2xl lg:my-6"
              href="https://bony-soapwort-32f.notion.site/Scalar-School-Didactic-Materials-61b74ce365a74791b98b182513137747?pvs=4"
              target="_blank"
            >
              <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
              Check out the didactic materials we created in Brazilian
              Portuguese
            </a>
            <p className="text-base lg:text-lg text-black leading-normal">
              <strong className="text-primary-pink">We build community.</strong>{" "}
              We support universities in bootstrapping their Bitcoin Clubs
              through the{" "}
              <em className="not-italic underline underline-offset-2">
                Bitcoin Students Network
              </em>
              . Check out the hall of clubs kickstarted and nurtured by Scalar
              School.
            </p>
          </div>
          <a
            className="underline underline-offset-2 lg:no-underline block font-bold text-center text-primary-pink group relative w-fit mx-auto my-4 lg:text-2xl lg:my-6"
            href="https://x.com/fatecbitcoin"
            target="_blank"
          >
            <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
            Fatec Bitcoin Club X
          </a>
          <a
            className="underline underline-offset-2 lg:no-underline block font-bold text-center text-primary-pink group relative w-fit mx-auto mb-4 lg:text-2xl lg:mb-6"
            href="https://x.com/ubtcx"
            target="_blank"
          >
            <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
            UFSCar Bitcoin Club X
          </a>
          <p className="text-base lg:text-lg text-black leading-normal">
            We are also proud organizers of the classic Bitdevs events in the
            countryside of São Paulo state, covering Ribeirão Preto-SP and São
            Carlos-SP, collectively known as Bitdevs Interior:
          </p>
          <a
            className="underline underline-offset-2 lg:no-underline block font-bold text-center text-primary-pink my-4 group relative w-fit mx-auto lg:text-2xl lg:my-6"
            href="https://github.com/bitdevsinterior/bitdevsinterior.github.io/issues/1"
            target="_blank"
          >
            <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
            Bitdevs Interior GitHub Organization
          </a>
          <a
            className="underline underline-offset-2 lg:no-underline block font-bold text-center text-primary-pink group my-4 relative w-fit mx-auto lg:text-2xl lg:my-6"
            href="https://x.com/scalarschool/status/1862347909385113797"
            target="_blank"
          >
            <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
            Bitdevs Interior X
          </a>
          <p className="text-base lg:text-lg text-black leading-normal">
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

      <section className="mt-8 lg:mt-14">
        <div className="layout-center">
          <h2 className="text-heading">Attention from the press</h2>
          <p className="text-base lg:text-lg text-black leading-normal">
            We were honored to receive coverage from BeInCrypto when we launched
            our first Bitcoin course cohort for women.
          </p>
          <a
            className="underline underline-offset-2 lg:no-underline block my-4 font-bold text-center text-primary-pink group relative w-fit mx-auto lg:text-2xl lg:my-6"
            href="https://br.beincrypto.com/mulheres-acesso-curso-gartuito-bitcoin-brasil/"
            target="_blank"
          >
            <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
            School offers a free Bitcoin course for women
          </a>
          <p className="text-base lg:text-lg text-black leading-normal">
            See this iconic post from the first cohort of Scalar School.
          </p>
          <a
            className="underline underline-offset-2 lg:no-underline block font-bold break-words text-center text-primary-pink my-4 group relative w-fit mx-auto lg:text-2xl lg:my-6"
            href="https://x.com/scalarschool/status/1851794719962964150"
            target="_blank"
          >
            <span className="hidden lg:block bg-primary-pink absolute bottom-[1px] h-[1px] group-hover:w-full w-0 transition-all" />
            First Cohort Scalar School X
          </a>
        </div>
      </section>

      <section id="ourPeople" className="mt-8 lg:mt-14">
        <div className="layout-center">
          <h2 className="text-heading">Our people</h2>
          <p className="text-base lg:text-lg text-black leading-normal max-w-[600px] mx-auto mb-12">
            “Life is a cooperative game. Don’t let anyone make you believe that
            this is a competition.”{" "}
            <strong className="text-primary-pink">—Luciana Ferreira</strong>
          </p>
          <div>
            <div className="flex gap-8 px-2 overflow-x-auto w-[calc(100%+40px)] -ml-5 lg:grid lg:grid-cols-[repeat(auto-fit,_minmax(214px,_1fr))] lg:gap-6 lg:ml-0 lg:w-auto">
              {ourPeople.map((person) => (
                <PersonCard
                  key={person.image}
                  imageSrc={`/our-people/${person.image}`}
                  name={person.name}
                  role={person.role}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="" className="mt-8 lg:mt-28">
        <div className="layout-center">
          <h2 className="text-heading leading-tight">
            Here’s what our students from the first cohort shared through the
            anonymous feedback form
          </h2>
          <div className="space-y-7">
            <p className="text-base lg:text-lg text-black leading-normal">
              "Luciana's teaching method is excellent and covered the entire
              explanation of how Bitcoin works, which was exactly what I wanted
              to learn." <b className="text-heading-purple">—Anonymous</b>
            </p>
            <p className="text-base lg:text-lg text-black leading-normal">
              "Luciana understands the need to adapt her approach for a
              Brazilian female audience. It wouldn’t be convincing if it were
              just for marketing purposes."{" "}
              <b className="text-heading-purple">—Anonymous</b>
            </p>
            <p className="text-base lg:text-lg text-black leading-normal">
              "Luciana's work is incredible and has been essential for the
              growth of the community."{" "}
              <b className="text-heading-purple">—Anonymous</b>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 lg:mt-14">
        <div className="layout-center">
          <h2 className="text-heading leading-tight">
            And here’s what our valued community members are saying{" "}
          </h2>
          <p className="text-base lg:text-lg text-black leading-normal">
            “Scalar School is doing an essential work: educating junior
            developers in Latin America about bitcoin app development, with an
            emphasis on inclusion. I have been particularly proud to contribute
            a Bitcoin Script workshop to their educational curriculum and I look
            forward to working with them even more in the future. Without the
            support of Scalar School, many potential developers might not find a
            place to learn how to make bitcoin apps, or be chased away from
            toxic environments that aren't friendly to women or lack the
            patience to teach junior developers the basics. Scalar School fixes
            this and they have my full endorsement.”{" "}
            <b className="text-heading-purple">—Super Testnet</b>
          </p>
        </div>
      </section>

      <section id="sponsors" className="mt-8 lg:mt-14">
        <div className="layout-center">
          <h2 className="text-heading leading-tight">Sponsors</h2>
          <div className="relative mx-auto w-[200px] h-[66px] lg:mb-16 lg:w-[400px] lg:h-[132px]">
            <Image
              alt="Human Rights Foundation"
              src="/human-rights-foundation-logo.webp"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section id="partners" className="mt-8 lg:mt-28">
        <div className="layout-center">
          <h2 className="text-heading leading-tight">Partners</h2>
          <div className="relative w-[200px] h-[66px] mx-auto lg:mb-16 lg:w-[400px] lg:h-[132px]">
            <Image
              alt="Human Rights Foundation"
              src="/bsn-logo.webp"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section id="supportUs" className="my-10 lg:mt-28 lg:mb-[72px]">
        <div className="layout-center">
          <h2 className="text-heading leading-tight">Support our mission</h2>
          <p className="text-base lg:text-lg text-black leading-normal">
            We welcome all kinds of partnerships, big or small. <br />
            Feel free to contact us at{" "}
            <a
              className="underline underline-offset-2 lg:no-underline text-heading-purple font-bold relative group"
              href="mailto:luciana@scalarschool.org"
            >
              <span className=" hidden lg:block bg-heading-purple absolute bottom-[1px] h-[1px] left-0 group-hover:w-full w-0 transition-all" />
              luciana@scalarschool.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
