'use client';

import { useState } from 'react';

type PageKey =
  | 'home'
  | 'research'
  | 'people'
  | 'publications'
  | 'news'
  | 'join'
  | 'person-0'
  | 'person-1'
  | 'person-2'
  | 'person-3';

const navItems: { key: Exclude<PageKey, 'person-0' | 'person-1' | 'person-2' | 'person-3'>; label: string }[] = [
  { key: 'home', label: 'HOME' },
  { key: 'research', label: 'RESEARCH' },
  { key: 'people', label: 'TEAM' },
  { key: 'publications', label: 'PUBLICATIONS' },
  { key: 'news', label: 'NEWS' },
  { key: 'join', label: 'CONTACT' },
];

const people = [
  {
    name: 'Yaxi Wang',
    role: 'Assistant professor of microbiology',
    image: '/images/yaxi-profile.jpg',
    bio: 'Yaxi, pronounced “Yashi” (yes, it sounds a bit like that green dinosaur in Super Mario), grew up in an ancient city in northern China. He received his Ph.D. in Biochemistry from Texas A&M with Dr. Vytas Bankaitis and did postdoctoral training with Dr. Joseph Mougous, first at the University of Washington and later at Yale. After experiencing life in the South, Pacific Northwest, and Northeast, Yaxi is glad to be landing in Ohio, where the climate and latitude are very similar to those of his hometown. Besides working in the lab, he enjoys watching professional basketball (Go Spurs Go), birding, and spending time with his wife and two boys.',
  },
  {
    name: 'Future Lab Member',
    role: 'Postdoctoral Fellow',
    image: '',
    bio: 'Add a short bio for each lab member, including research interests and training background.',
  },
  {
    name: 'Future Lab Member',
    role: 'Graduate Student',
    image: '',
    bio: 'Add a short bio for each lab member, including projects, interests, and contact links if desired.',
  },
  {
    name: 'Future Lab Member',
    role: 'Graduate Student',
    image: '',
    bio: 'Add a short bio for each lab member here.',
  },
];

const selectedPublications = [
  {
    title: 'Protein interactions in human pathogens revealed through deep learning',
    authors:
      'Humphreys IR*, Zhang J*, Baek M*, [Wang Y]*, Krishnakumar A, Pei J, Anishchenko I, Tower CA, Jackson BA, Warrier T, Hung DT, Peterson SB, Mougous JD, Cong Q, Baker D.',
    journal: 'Nature Microbiology',
    date: '2024',
    link: 'https://doi.org/10.1038/s41564-024-01791-x',
    image: '/images/publication-selected-1.png',
    alt: 'Illustration for Protein interactions in human pathogens revealed through deep learning',
  },
  {
    title: 'Genetic manipulation of Patescibacteria provides mechanistic insights into microbial dark matter and the epibiotic lifestyle',
    authors:
      '[Wang Y]*, Gallagher LA*, Andrade PA, Liu A, Humphreys IR, Turkarslan S, Cutler KJ, Arrieta-Ortiz ML, Li Y, Radey MC, McLean JS, Cong Q, Baker D, Baliga NS, Peterson SB, Mougous JD.',
    journal: 'Cell',
    date: '2023',
    link: 'https://doi.org/10.1016/j.cell.2023.08.017',
    image: '/images/publication-selected-2.png',
    alt: 'Illustration for Genetic manipulation of Patescibacteria provides mechanistic insights into microbial dark matter and the epibiotic lifestyle',
  },
  {
    title: 'Discovery of a glutathione utilization pathway in Francisella that shows functional divergence between environmental and pathogenic species',
    authors:
      '[Wang Y], Ledvina HE, Tower CA, Kambarev S, Liu E, Charity JC, Kreuk LSM, Tang Q, Chen Q, Gallagher LA, Radey MC, Rerolle GF, Li Y, Penewit KM, Turkarslan S, Skerrett SJ, Salipante SJ, Baliga NS, Woodward JJ, Dove SL, Peterson SB, Celli J, Mougous JD.',
    journal: 'Cell Host & Microbe',
    date: '2023',
    link: 'https://doi.org/10.1016/j.chom.2023.06.010',
    image: '/images/publication-selected-3.png',
    alt: 'Illustration for Discovery of a glutathione utilization pathway in Francisella that shows functional divergence between environmental and pathogenic species',
  },
  {
    title: 'Noncanonical regulation of phosphatidylserine metabolism by a Sec14-like protein and a lipid kinase',
    authors:
      '[Wang Y], Yuan P, Grabon A, Tripathi A, Lee D, Rodriguez M, Lönnfors M, Eisenberg-Bord M, Wang Z, Lam SM, Schuldiner M, Bankaitis VA.',
    journal: 'Journal of Cell Biology',
    date: '2020',
    link: 'https://doi.org/10.1083/jcb.201907128',
    image: '/images/publication-selected-4.png',
    alt: 'Illustration for Noncanonical regulation of phosphatidylserine metabolism by a Sec14-like protein and a lipid kinase',
  },
];

const otherPublications = [
  {
    title: 'De Novo Design of High-Affinity Miniprotein Binders Targeting Francisella Tularensis Virulence Factor',
    authors:
      'Gokce-Alpkilic G, Huang B, Liu A, Kreuk LSM, [Wang Y], Adebomi V, Bueso YF, Bera AK, Kang A, Gerben SR, Rettie S, Vafeados DK, Roullier N, Goreshnik I, Li X, Baker D, Woodward JJ, Mougous JD, Bhardwaj G.',
    journal: 'Angewandte Chemie International Edition',
    date: '2025',
    link: 'https://doi.org/10.1002/anie.202516058',
  },
  {
    title: 'Streptomyces umbrella toxin particles block hyphal growth of competing species',
    authors:
      'Zhao Q, Bertolli S, Park YJ, Tan Y, Cutler KJ, Srinivas P, Asfahl KL, Fonesca-García C, Gallagher LA, Li Y, [Wang Y], Coleman-Derr D, DiMaio F, Zhang D, Peterson SB, Veesler D, Mougous JD.',
    journal: 'Nature',
    date: '2024',
    link: 'https://doi.org/10.1038/s41586-024-07298-z',
  },
  {
    title: 'The wide world of non-mammalian phospholipase D enzymes',
    authors: '[Wang Y], Wakelam MJO, Bankaitis VA, McDermott MI.',
    journal: 'Advances in Biological Regulation',
    date: '2024',
    link: 'https://doi.org/10.1016/j.jbior.2023.101000',
  },
  {
    title: 'Mammalian phospholipase D: Function, and therapeutics',
    authors: 'McDermott MI, [Wang Y], Wakelam MJO, Bankaitis VA.',
    journal: 'Progress in Lipid Research',
    date: '2020',
    link: 'https://doi.org/10.1016/j.plipres.2019.101018',
  },
  {
    title: 'An equal opportunity collaboration between lipid metabolism and proteins in the control of membrane trafficking in the trans-Golgi and endosomal systems',
    authors: '[Wang Y], Mousley CJ, Lete MG, Bankaitis VA.',
    journal: 'Current Opinion in Cell Biology',
    date: '2019',
    link: 'https://doi.org/10.1016/j.ceb.2019.03.012',
  },
  {
    title: 'Insights into sRNA Genes Regulated by Two-Component Systems in the Bacillus cereus Group',
    authors: 'Mei H, Tang Q, Li X, [Wang Y], Wang J, He J.',
    journal: 'Current Bioinformatics',
    date: '2015',
    link: 'https://doi.org/10.2174/157489361004150922151028',
  },
];

function Layout({
  page,
  setPage,
  children,
}: {
  page: PageKey;
  setPage: (page: PageKey) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black px-3 py-5 text-stone-900 sm:px-6 sm:py-8 lg:px-10">
      {children}
    </div>
  );
}


function PixelIcon({ type }: { type: 'home' | 'research' | 'people' | 'publications' | 'news' | 'join' }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'square' as const,
    strokeLinejoin: 'miter' as const,
    'aria-hidden': true,
  };

  if (type === 'home') {
    return (
      <svg {...common}>
        <path d="M4 15 16 5l12 10v12H20v-8h-8v8H4Z" />
        <path d="M9 27h14M7 13h18" />
      </svg>
    );
  }

  if (type === 'research') {
    return (
      <svg {...common}>
        <path d="M10 4h12M13 4v7L7 25c-.7 1.8.2 3 2 3h14c1.8 0 2.7-1.2 2-3L19 11V4" />
        <path d="M10 21h12M12 17h8" />
        <path d="M14 24h1M18 19h1M20 24h1" />
      </svg>
    );
  }

  if (type === 'people') {
    return (
      <svg {...common}>
        <path d="M11 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 27v-5c0-4 3-7 7-7s7 3 7 7v5M14 27v-4c0-4 3-7 7-7s7 3 7 7v4" />
      </svg>
    );
  }

  if (type === 'publications') {
    return (
      <svg {...common}>
        <path d="M8 4h13l4 4v20H8Z" />
        <path d="M21 4v5h5M12 13h10M12 17h10M12 21h8" />
      </svg>
    );
  }

  if (type === 'news') {
    return (
      <svg {...common}>
        <path d="M5 7h22v18H5Z" />
        <path d="m5 8 11 9L27 8M7 23l7-7M25 23l-7-7" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 8h22v16H5Z" />
      <path d="m5 9 11 9L27 9" />
      <path d="M11 5h10M8 27h16" />
    </svg>
  );
}

function PageCorner({
  position,
}: {
  position: 'tl' | 'tr' | 'bl' | 'br';
}) {
  const transform =
    position === 'tl'
      ? ''
      : position === 'tr'
        ? 'scale(-1 1) translate(-32 0)'
        : position === 'bl'
          ? 'scale(1 -1) translate(0 -32)'
          : 'scale(-1 -1) translate(-32 -32)';

  return (
    <svg
      viewBox="0 0 32 32"
      className="absolute h-8 w-8 text-stone-700/75"
      style={{
        top: position.startsWith('t') ? 10 : undefined,
        bottom: position.startsWith('b') ? 10 : undefined,
        left: position.endsWith('l') ? 10 : undefined,
        right: position.endsWith('r') ? 10 : undefined,
      }}
      aria-hidden="true"
    >
      <g transform={transform} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
        <path d="M2 14V2h12" />
        <path d="M5 14V5h9" />
        <path d="M9 2v4M2 9h4" />
        <path d="M14 8h4v4h-4z" />
        <path d="M19 3h3v3h-3z" />
      </g>
    </svg>
  );
}

function BookNav({
  page,
  setPage,
}: {
  page: PageKey;
  setPage: (page: PageKey) => void;
}) {
  return (
    <nav className="mt-7 grid grid-cols-3 gap-2 border-t-2 border-stone-700/70 pt-4 sm:grid-cols-6">
      {navItems.map((item) => {
        const active =
          page === item.key ||
          (item.key === 'people' && page.startsWith('person-'));

        return (
          <button
            type="button"
            key={item.key}
            onClick={() => {
              setPage(item.key);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={
              active
                ? 'flex min-h-[76px] flex-col items-center justify-center border-2 border-stone-800 bg-[#ddc8a3] px-1 py-2 text-[#8f2d24]'
                : 'flex min-h-[76px] flex-col items-center justify-center border-2 border-stone-700 bg-[#efe0c2] px-1 py-2 text-stone-900 hover:bg-[#e3cfaa]'
            }
          >
            <PixelIcon type={item.key} />
            <span className="mt-2 text-[7px] leading-4 tracking-[-0.03em] sm:text-[8px]">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}


function BookShell({
  page,
  setPage,
  left,
  right,
}: {
  page: PageKey;
  setPage: (page: PageKey) => void;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="relative px-3 pb-4 pt-2 sm:px-5 sm:pb-6">
        {/* stacked page edges behind the book */}
        <div className="absolute inset-x-8 bottom-0 top-6 rounded-[18px] bg-[#8d7654]" />
        <div className="absolute inset-x-6 bottom-2 top-5 rounded-[18px] border border-stone-700 bg-[#ae956b]" />
        <div className="absolute inset-x-4 bottom-4 top-4 rounded-[18px] border border-stone-700/80 bg-[#c7ae83]" />
        <div className="absolute inset-x-2 bottom-6 top-3 rounded-[18px] border border-stone-700/70 bg-[#d7c197]" />

        {/* visible paper/page stripes */}
        <div className="pointer-events-none absolute bottom-5 left-7 right-7 h-4 rounded-b-[16px] border-x border-b border-stone-700/60 bg-[repeating-linear-gradient(to_bottom,#d8c49e_0px,#d8c49e_2px,#bca47b_2px,#bca47b_3px)]" />
        <div className="pointer-events-none absolute bottom-8 left-5 top-7 w-4 rounded-l-[14px] border-y border-l border-stone-700/50 bg-[repeating-linear-gradient(to_right,#d8c49e_0px,#d8c49e_2px,#bca47b_2px,#bca47b_3px)]" />
        <div className="pointer-events-none absolute bottom-8 right-5 top-7 w-4 rounded-r-[14px] border-y border-r border-stone-700/50 bg-[repeating-linear-gradient(to_left,#d8c49e_0px,#d8c49e_2px,#bca47b_2px,#bca47b_3px)]" />

        <div className="relative overflow-hidden rounded-[16px] border border-stone-800 bg-[#c5ad82] shadow-[0_30px_90px_rgba(0,0,0,0.78)]">
          {/* pixel corner ornaments matching the retro-manual mockup */}
          <PageCorner position="tl" />
          <PageCorner position="tr" />
          <PageCorner position="bl" />
          <PageCorner position="br" />

          <div className="grid min-h-[760px] md:grid-cols-2">
            <section className="relative overflow-hidden border-b border-stone-500/50 bg-[#ead9b8] p-6 sm:p-9 md:border-b-0 md:border-r md:p-11 lg:p-14">
              <PageCorner position="tl" />
              <PageCorner position="bl" />
              <div
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 18% 16%, rgba(93,62,28,.24), transparent 24%), radial-gradient(circle at 82% 74%, rgba(93,62,28,.14), transparent 24%)',
                }}
              />
              <div className="relative h-full">{left}</div>
            </section>

            <section className="relative overflow-hidden bg-[#f0e1c5] p-6 sm:p-9 md:p-11 lg:p-14">
              <PageCorner position="tr" />
              <PageCorner position="br" />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r from-black/10 to-transparent md:block" />
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 82% 15%, rgba(93,62,28,.18), transparent 22%), radial-gradient(circle at 24% 82%, rgba(93,62,28,.14), transparent 24%)',
                }}
              />
              <div className="relative flex h-full flex-col">
                <div className="flex-1">{right}</div>
                <BookNav page={page} setPage={setPage} />
              </div>
            </section>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-stone-800/30 md:block" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent md:block" />
        </div>
      </div>
    </div>
  );
}


function LandingPage({
  setPage,
}: {
  setPage: (page: PageKey) => void;
}) {
  return (
    <BookShell
      page="home"
      setPage={setPage}
      left={
        <div className="flex h-full flex-col">
          <div className="text-center">
            <div className="font-pixel text-xl leading-relaxed sm:text-2xl">
              Patescibacteria
            </div>
            <div className="mt-2 text-base italic text-[#9b1c1c]">
              — The Hidden World —
            </div>
          </div>

          <div className="mx-auto mt-5 w-full max-w-[470px] flex-1">
            <img
              src="/images/landing-bacteria.png"
              alt="Cartoon showing bacterial interactions"
              className="mx-auto block h-auto max-h-[500px] w-full object-contain"
            />
          </div>

          <div className="mt-5 border-2 border-stone-700 bg-[#f7ead0]/70 p-4 font-pixel text-[9px] leading-6 sm:text-[10px]">
            STUDY THE UNSEEN.
            <br />
            UNDERSTAND THE INTERACTIONS.
            <br />
            REVEAL THE SECRETS.
          </div>
        </div>
      }
      right={
        <div className="flex h-full flex-col justify-center">
          <div className="mt-6 font-pixel text-2xl leading-[1.6] sm:text-3xl lg:text-4xl">
            WELCOME TO
            <br />
            WANG LAB
          </div>

          <div className="mt-5 h-1 w-20 bg-[#9b1c1c]" />

          <p className="mt-8 max-w-xl text-xl leading-8 sm:text-2xl sm:leading-9 text-stone-900 sm:text-lg sm:leading-8">
            Our group is fascinated by the molecular mechanisms underlying intermicrobial interactions,
            particularly how ultrasmall Patescibacteria infect their bacterial hosts and how those hosts respond.
          </p>

        </div>
      }
    />
  );
}

function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-12">
      <div className="pt-2">
        <p className="text-lg leading-8 text-slate-700"></p>
      </div>
    </section>
  );
}

function ResearchPage({
  setPage,
}: {
  setPage: (page: PageKey) => void;
}) {
  return (
    <BookShell
      page="research"
      setPage={setPage}
      left={
        <div>
          <h1 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            PATESCIBACTERIA
          </h1>
          <div className="mt-2 text-base italic text-stone-600">
            An unexplored branch of microbial life
          </div>

          <img
            src="/images/research-pic.png"
            alt="Scanning electron micrograph showing Saccharibacteria attached to host bacteria"
            className="mx-auto mt-7 max-h-[340px] w-full object-contain"
          />

          <p className="mt-7 text-xl leading-8 sm:text-2xl sm:leading-9">
            Our lab studies Patescibacteria (also known as the Candidate Phyla Radiation, CPR), a large group of bacteria that is widespread in nature and prevalent in human oral microbiomes, where its members have been linked to both oral health and disease.
          </p>
        </div>
      }
      right={
        <div>

          <p className="mt-7 text-xl leading-8 sm:text-2xl sm:leading-9">
            These ultrasmall bacteria have streamlined genomes and limited metabolic capability (generally lacking biosynthetic pathways for nucleotides, amino acids, and fatty acids), and live as obligate epibionts on host bacteria. Their unique biology and phylogenetic distance from well-studied model bacteria make Patescibacteria a reservoir of unexplored biological mechanisms with bioengineering and pharmaceutical potential.
          </p>

          <p className="mt-5 text-xl leading-8 sm:text-2xl sm:leading-9">
            We combine genetic, biochemical, structural, and bioinformatic approaches to study these enigmatic bacteria and their interactions with hosts. Current projects include: 1) characterizing the molecular mechanisms governing Patescibacteria–host attachment and host-binding specificity; 2) investigating how host bacteria defend themselves against Patescibacteria; 3) discovering novel enzymes, pathways, and molecular machines in Patescibacteria using modern high-throughput techniques.
          </p>

          <p className="mt-5 text-xl leading-8 sm:text-2xl sm:leading-9">
            Beyond Patescibacteria, we are broadly interested in exploring mechanisms underlying intermicrobial interactions, especially those that are medically relevant or associated with human microbiomes.
          </p>
        </div>
      }
    />
  );
}

function PeoplePage({
  setPage,
}: {
  setPage: (page: PageKey) => void;
}) {
  const leftPeople = people.slice(0, 2);
  const rightPeople = people.slice(2);

  const memberEntry = (person: (typeof people)[number], index: number) => (
    <button
      key={person.name + person.role + index}
      type="button"
      onClick={() => setPage(`person-${index}` as PageKey)}
      className="grid w-full grid-cols-[115px_minmax(0,1fr)] gap-5 text-left sm:grid-cols-[145px_minmax(0,1fr)]"
    >
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className="aspect-[4/5] w-full border-2 border-stone-700 object-cover"
        />
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center border-2 border-stone-700 bg-[#dfcfac] font-pixel text-[8px] uppercase text-stone-500">
          PORTRAIT
        </div>
      )}

      <div>
        <div className="font-pixel text-[11px] leading-6 sm:text-xs">{person.name}</div>
        <div className="mt-1 text-sm italic text-[#9b1c1c]">{person.role}</div>
        <p className="mt-3 line-clamp-6 text-lg leading-7 text-stone-800">
          {person.bio}
        </p>
      </div>
    </button>
  );

  return (
    <BookShell
      page="people"
      setPage={setPage}
      left={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Party Roster
          </div>
          <h1 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            TEAM
          </h1>
          <div className="mt-8 space-y-10">
            {leftPeople.map((person, index) => memberEntry(person, index))}
          </div>
        </div>
      }
      right={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Party Roster
          </div>
          <h2 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            MEMBERS
          </h2>
          <div className="mt-8 space-y-10">
            {rightPeople.map((person, index) => memberEntry(person, index + 2))}
          </div>
        </div>
      }
    />
  );
}

function PersonDetailPage({
  person,
  setPage,
  personIndex,
}: {
  person: (typeof people)[number];
  setPage: (page: PageKey) => void;
  personIndex: number;
}) {
  return (
    <BookShell
      page={`person-${personIndex}` as PageKey}
      setPage={setPage}
      left={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Character Profile
          </div>
          <div className="mt-7">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className="mx-auto max-h-[560px] w-full max-w-[390px] border-2 border-stone-700 object-cover"
              />
            ) : (
              <div className="mx-auto flex aspect-[4/5] w-full max-w-[390px] items-center justify-center border-2 border-stone-700 bg-[#dfcfac] font-pixel text-[9px] text-stone-500">
                PORTRAIT
              </div>
            )}
          </div>
        </div>
      }
      right={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Entry {String(personIndex + 1).padStart(2, '0')}
          </div>
          <h1 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            {person.name.toUpperCase()}
          </h1>
          <div className="mt-3 text-lg italic text-[#9b1c1c]">{person.role}</div>
          <p className="mt-8 text-xl leading-8 sm:text-2xl sm:leading-9">{person.bio}</p>

          <button
            type="button"
            onClick={() => setPage('people')}
            className="mt-8 border-2 border-stone-700 px-4 py-3 font-pixel text-[9px] hover:bg-[#dfcfac]"
          >
            ← BACK TO TEAM
          </button>
        </div>
      }
    />
  );
}

function highlightMyName(text: string) {
  const parts = text.split(/(\[Wang Y\]\*?)/g);

  return parts.map((part, index) => {
    if (part === '[Wang Y]' || part === '[Wang Y]*') {
      return (
        <span key={index} className="font-semibold text-slate-900">
          {part.replace('[', '').replace(']', '')}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function PublicationCard({
  pub,
  illustrated = false,
}: {
  pub: {
    title: string;
    authors: string;
    journal: string;
    date: string;
    link: string;
    image?: string;
    alt?: string;
  };
  illustrated?: boolean;
}) {
  if (!illustrated) {
    return (
      <div className="pb-8">
        <a
          href={pub.link}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold leading-tight tracking-tight text-slate-900 underline underline-offset-4 hover:text-slate-700 sm:text-2xl"
        >
          {pub.title}
        </a>

        <div className="mt-4 text-xl leading-8 sm:text-2xl sm:leading-9 text-slate-700">
          {highlightMyName(pub.authors)}
        </div>

        <div className="mt-3 text-base italic text-slate-700">
          {pub.journal}
        </div>

        <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
          {pub.date}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 pb-8 sm:gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:items-start lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="rounded-2xl bg-slate-50 p-2">
        {pub.image ? (
          <img
            src={pub.image}
            alt={pub.alt || pub.title}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="flex h-[220px] items-center justify-center bg-slate-100 text-slate-500">
            Illustration
          </div>
        )}
      </div>

      <div>
        <a
          href={pub.link}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold leading-tight tracking-tight text-slate-900 underline underline-offset-4 hover:text-slate-700 sm:text-2xl"
        >
          {pub.title}
        </a>

        <div className="mt-4 text-xl leading-8 sm:text-2xl sm:leading-9 text-slate-700">
          {highlightMyName(pub.authors)}
        </div>

        <div className="mt-3 text-base italic text-slate-700">
          {pub.journal}
        </div>

        <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
          {pub.date}
        </div>
      </div>
    </div>
  );
}

function PublicationsPage({
  setPage,
}: {
  setPage: (page: PageKey) => void;
}) {
  return (
    <BookShell
      page="publications"
      setPage={setPage}
      left={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Selected Works
          </div>
          <h1 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            PUBLICATIONS
          </h1>

          <div className="mt-8 space-y-8">
            {selectedPublications.map((pub) => (
              <article
                key={pub.title}
                className="grid grid-cols-[105px_minmax(0,1fr)] gap-4 border-b border-stone-500/40 pb-7 last:border-b-0 sm:grid-cols-[125px_minmax(0,1fr)]"
              >
                <img
                  src={pub.image}
                  alt={pub.alt || pub.title}
                  className="w-full border-2 border-stone-700 bg-[#f7ead0] object-contain"
                />
                <div>
                  <div className="font-pixel text-[7px] uppercase leading-4 tracking-[0.08em] text-[#9b1c1c]">
                    {pub.date} · {pub.journal}
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-lg font-semibold leading-7 underline decoration-stone-500 underline-offset-4 hover:text-[#9b1c1c]"
                  >
                    {pub.title}
                  </a>
                  <div className="mt-2 text-base leading-6 text-stone-700">
                    {highlightMyName(pub.authors)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      }
      right={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Complete Archive
          </div>
          <h2 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            OTHER WORKS
          </h2>

          <div className="mt-8 space-y-6">
            {otherPublications.map((pub) => (
              <article
                key={pub.title}
                className="border-b border-stone-500/40 pb-5 last:border-b-0"
              >
                <div className="font-pixel text-[7px] uppercase leading-4 tracking-[0.08em] text-[#9b1c1c]">
                  {pub.date} · {pub.journal}
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-lg font-semibold leading-7 underline decoration-stone-500 underline-offset-4 hover:text-[#9b1c1c]"
                >
                  {pub.title}
                </a>
                <div className="mt-2 text-base leading-6 text-stone-700">
                  {highlightMyName(pub.authors)}
                </div>
              </article>
            ))}
          </div>
        </div>
      }
    />
  );
}

function NewsPage({
  setPage,
}: {
  setPage: (page: PageKey) => void;
}) {
  return (
    <BookShell
      page="news"
      setPage={setPage}
      left={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Chronicle
          </div>
          <h1 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            LAB NEWS
          </h1>

          <img
            src="/images/news-lab-start-2027.png"
            alt="Wang Lab starting in January 2027"
            className="mt-8 aspect-[4/3] w-full border-2 border-stone-700 object-cover"
          />

          <div className="mt-5 font-pixel text-[8px] uppercase tracking-[0.1em] text-[#9b1c1c]">
            January 2027
          </div>
          <h2 className="mt-3 text-2xl font-semibold">
            Wang Lab starts in January 2027!
          </h2>
        </div>
      }
      right={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Side Quests
          </div>
          <h2 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            ACTIVITIES
          </h2>

          <div className="mt-8 flex aspect-[4/3] items-center justify-center border-2 border-stone-700 bg-[#dfcfac] font-pixel text-[9px] text-stone-500">
            PHOTO
          </div>

          <div className="mt-5 font-pixel text-[8px] uppercase tracking-[0.1em] text-[#9b1c1c]">
            Coming Soon
          </div>
          <h3 className="mt-3 text-2xl font-semibold">
            Lab activities
          </h3>
          <p className="mt-4 text-xl leading-8 sm:text-2xl sm:leading-9">
            Updates about lab events, conferences, celebrations, and group activities will appear here.
          </p>
        </div>
      }
    />
  );
}

function JoinPage({
  setPage,
}: {
  setPage: (page: PageKey) => void;
}) {
  return (
    <BookShell
      page="join"
      setPage={setPage}
      left={
        <div className="flex h-full items-center justify-center">
          <img
            src="/images/contact-bg.png"
            alt="Columbus skyline with deer statue"
            className="w-full border-2 border-stone-700 object-cover"
          />
        </div>
      }
      right={
        <div>
          <div className="font-pixel text-[9px] uppercase tracking-[0.12em] text-[#9b1c1c]">
            Contact
          </div>
          <h1 className="mt-4 font-pixel text-xl leading-relaxed sm:text-2xl">
            JOIN THE LAB
          </h1>

          <div className="mt-8 space-y-7">
            <div>
              <div className="font-pixel text-[9px] text-[#9b1c1c]">STUDENTS</div>
              <p className="mt-3 text-xl leading-8 sm:text-2xl sm:leading-9">
                We welcome graduate students interested in rotations, as well as undergraduate students interested in joining the lab. Please email us for more information.
              </p>
            </div>

            <div className="border-t border-stone-500/40 pt-6">
              <div className="font-pixel text-[9px] text-[#9b1c1c]">POSTDOCTORAL FELLOW</div>
              <p className="mt-3 text-xl leading-8 sm:text-2xl sm:leading-9">
                Candidates with experience in microbiology, biochemistry, molecular biology and genetics are encouraged to send application to the email address below.
              </p>
            </div>

            <div className="border-t border-stone-500/40 pt-6">
              <div className="font-pixel text-[9px] text-[#9b1c1c]">EMAIL</div>
              <p className="mt-3 text-xl">wang.21271@osu.edu</p>
            </div>

            <div className="border-t border-stone-500/40 pt-6">
              <div className="font-pixel text-[9px] text-[#9b1c1c]">LOCATION</div>
              <a
                href="https://maps.app.goo.gl/YKfoWQ6jLyxYZprF8"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-xl leading-8 underline underline-offset-4 hover:text-[#9b1c1c]"
              >
                476 Biological Sciences Building, 484 W. 12th Ave, Columbus, Ohio
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default function Page() {
  const [page, setPage] = useState<PageKey>('home');

  return (
    <Layout page={page} setPage={setPage}>
      {page === 'home' && <LandingPage setPage={setPage} />}
      {page === 'research' && <ResearchPage setPage={setPage} />}
      {page === 'people' && <PeoplePage setPage={setPage} />}
      {page === 'person-0' && <PersonDetailPage person={people[0]} personIndex={0} setPage={setPage} />}
      {page === 'person-1' && <PersonDetailPage person={people[1]} personIndex={1} setPage={setPage} />}
      {page === 'person-2' && <PersonDetailPage person={people[2]} personIndex={2} setPage={setPage} />}
      {page === 'person-3' && <PersonDetailPage person={people[3]} personIndex={3} setPage={setPage} />}
      {page === 'publications' && <PublicationsPage setPage={setPage} />}
      {page === 'news' && <NewsPage setPage={setPage} />}
      {page === 'join' && <JoinPage setPage={setPage} />}
    </Layout>
  );
}
