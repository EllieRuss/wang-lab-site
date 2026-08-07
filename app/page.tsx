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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (nextPage: PageKey) => {
    setPage(nextPage);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left sm:gap-4"
          >
            <img
              src="/images/lab-logo.jpg"
              alt="Wang Lab logo"
              className="h-10 w-auto object-contain sm:h-12 lg:h-15"
            />
            <div className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              WANG LAB
            </div>
          </button>

          <nav className="hidden items-center gap-x-6 text-base text-slate-900 md:flex lg:gap-x-8 lg:text-lg">
            {navItems.map((item) => {
              const active = page === item.key;
              return (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => navigateTo(item.key)}
                  className={
                    active
                      ? 'font-semibold text-slate-950 underline underline-offset-4'
                      : 'hover:text-slate-950'
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-900 md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-2xl leading-none">{mobileMenuOpen ? '×' : '☰'}</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="bg-white px-4 py-3 md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const active = page === item.key;
                return (
                  <button
                    type="button"
                    key={item.key}
                    onClick={() => navigateTo(item.key)}
                    className={
                      active
                        ? 'px-2 py-3 text-left font-semibold text-slate-950'
                        : 'px-2 py-3 text-left text-slate-700 hover:text-slate-950'
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <main
        className={
          page === 'home'
            ? 'min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-5.75rem)]'
            : ''
        }
      >
        {children}
      </main>

      <footer className={page === 'home' ? 'bg-slate-100' : 'mt-16 bg-slate-100'}>
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
              <img
                src="/images/osu-arts-sciences-logo.svg"
                alt="The Ohio State University College of Arts and Sciences logo"
                className="h-12 w-auto object-contain sm:h-16"
              />
            </div>

            <div className="text-center sm:text-right">
              <div className="text-lg font-semibold text-slate-900">Wang Lab @ OSU</div>
              <p className="mt-3 break-words leading-7 text-slate-600">
                Department of Microbiology
                <br />
                The Ohio State University
                <br />
                Columbus, Ohio
              </p>
            </div>
          </div>

          <div className="mt-8 pt-2 text-center text-sm text-slate-500">
            © 2026 Wang Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function LandingPage() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[42%_58%] md:gap-6">
        <div className="mx-auto w-full max-w-[300px] sm:max-w-[335px] md:max-w-[380px]">
          <img
            src="/images/landing-bacteria.png"
            alt="Cartoon showing bacterial interactions"
            className="block h-auto w-full"
          />
        </div>

        <div className="mx-auto w-full max-w-[300px] sm:max-w-[335px] md:max-w-[380px]">
          <img
            src="/images/landing-welcome.svg"
            alt="Welcome to the Wang Lab"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-6xl text-center text-base leading-7 text-slate-800 sm:mt-20 sm:text-2xl sm:leading-10">
        Our group is fascinated by the molecular mechanisms underlying intermicrobial interactions, particularly how ultrasmall Patescibacteria infect their bacterial hosts and how those hosts respond.
      </p>
    </section>
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

function ResearchPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
      <div className="mb-10">
        <p className="mx-auto max-w-5xl text-base leading-7 text-slate-900 sm:text-lg sm:leading-8">
         
        </p>
      </div>

      <div className="mx-auto max-w-6xl text-base leading-7 text-slate-900 sm:text-lg sm:leading-8">
        <img
          src="/images/research-pic.png"
          alt="Scanning electron micrograph showing Saccharibacteria attached to host bacteria"
          className="mb-4 w-full rounded-xl object-contain sm:float-right sm:mb-4 sm:ml-8 sm:max-w-[320px]"
        />

        <p>
          Our lab studies Patescibacteria (also known as the Candidate Phyla Radiation, CPR), a large group of bacteria that is widespread in nature and prevalent in human oral microbiomes, where its members have been linked to both oral health and disease. These ultrasmall bacteria have streamlined genomes and limited metabolic capability (generally lacking biosynthetic pathways for nucleotides, amino acids, and fatty acids), and live as obligate epibionts on host bacteria. Their unique biology and phylogenetic distance from well-studied model bacteria make Patescibacteria a reservoir of unexplored biological mechanisms with bioengineering and pharmaceutical potential.
        </p>

        <p className="mt-4">
          We combine genetic, biochemical, structural, and bioinformatic approaches to study these enigmatic bacteria and their interactions with hosts. Current projects include: 1) characterizing the molecular mechanisms governing Patescibacteria–host attachment and host-binding specificity; 2) investigating how host bacteria defend themselves against Patescibacteria; 3) discovering novel enzymes, pathways, and molecular machines in Patescibacteria using modern high-throughput techniques.
        </p>

        <div className="clear-both" />

        <p className="mt-4">
          Beyond Patescibacteria, we are broadly interested in exploring mechanisms underlying intermicrobial interactions, especially those that are medically relevant or associated with human microbiomes. Our goal is to understand how these interactions shape microbiomes and impact human health, and to harness the diverse antagonistic and cooperative strategies microbes have evolved over billions of years to address pressing medical and environmental challenges.
        </p>
      </div>
    </section>
  );
}

function PeoplePage({ setPage }: { setPage: (page: PageKey) => void }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="space-y-14">
        {people.map((person, index) => (
          <div
            key={person.name + person.role + index}
            className="grid gap-8 md:grid-cols-[320px_minmax(0,1fr)] md:items-start md:gap-10"
          >
            <button
              type="button"
              onClick={() => setPage(`person-${index}` as PageKey)}
              className="text-left"
            >
              <div className="overflow-hidden rounded-2xl bg-white">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-auto w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                    Photo
                  </div>
                )}
              </div>
            </button>

            <div className="md:pt-1">
              <button
                type="button"
                onClick={() => setPage(`person-${index}` as PageKey)}
                className="text-left"
              >
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  {person.name}
                </h2>
                <div className="mt-2 text-lg text-slate-600">{person.role}</div>
              </button>

              <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                {person.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PersonDetailPage({
  person,
  setPage,
}: {
  person: (typeof people)[number];
  setPage: (page: PageKey) => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <button
        type="button"
        onClick={() => setPage('people')}
        className="mb-8 text-sm font-medium text-slate-600 underline underline-offset-4"
      >
        Back to Team
      </button>

      <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-start">
        <div>
          {person.image ? (
            <img
              src={person.image}
              alt={person.name}
              className="w-full rounded-2xl object-cover"
            />
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              Photo
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {person.name}
          </h1>
          <div className="mt-2 text-lg text-slate-600">{person.role}</div>
          <p className="mt-6 text-lg leading-8 text-slate-700">{person.bio}</p>
        </div>
      </div>
    </section>
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

        <div className="mt-4 text-base leading-7 text-slate-700">
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

        <div className="mt-4 text-base leading-7 text-slate-700">
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

function PublicationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/images/publications-banner.png"
          alt="Playdough-style campus illustration"
          className="h-36 w-full object-cover sm:h-40 lg:h-44"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Publications
          </h1>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Selected Publications
        </h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
          Representative publications from the lab and prior work. Click each title to open the paper.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {selectedPublications.map((pub) => (
          <PublicationCard key={pub.title} pub={pub} illustrated />
        ))}
      </div>

      <div className="mt-15">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Other Publications
        </h2>
      </div>

      <div className="mt-6 space-y-3">
        {otherPublications.map((pub) => (
          <PublicationCard key={pub.title} pub={pub} />
        ))}
      </div>
    </section>
  );
}

function NewsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        LAB NEWS
      </h1>

      <div className="mt-10 space-y-14">
        <article className="grid gap-6 md:grid-cols-[280px_minmax(0,1fr)] md:items-start md:gap-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <img
              src="/images/news-lab-start-2027.png"
              alt="Wang Lab starting in January 2027"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>

          <div>
            <div className="text-base text-slate-500">January 2027</div>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
              Wang Lab starts in January 2027!
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            </p>
            <button
              type="button"
              className="mt-5 text-base font-medium text-slate-900 hover:text-slate-600 sm:text-lg"
            >
            </button>
          </div>
        </article>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          ACTIVITIES
        </h2>

        <div className="mt-10 space-y-14">
          <article className="grid gap-6 md:grid-cols-[280px_minmax(0,1fr)] md:items-start md:gap-10">
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-slate-100 text-slate-400">
              Photo
            </div>

            <div>
              <div className="text-base text-slate-500">Coming soon</div>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                Lab activities
              </h3>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Updates about lab events, conferences, celebrations, and group activities will appear here.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
function JoinPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:items-start lg:gap-10">
        <div>
          <img
            src="/images/contact-bg.png"
            alt="Columbus skyline with deer statue"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
            CONTACT
          </h1>

          <div className="mt-8 space-y-4 text-slate-800">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Students</h2>
              <p className="mt-2 text-lg leading-6">
                Graduate students and undergraduate students are welcome to inquire.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Postdoctoral fellow
              </h2>
              <p className="mt-2 text-lg leading-6">
                Candidates with experience in microbiology, biochemistry, molecular biology and
                genetics are encouraged to send application and CV to the email address below.
              </p>
            </div>

            <div className="border-w border-slate-300 pt-6">
              <h2 className="text-3xl space-y-12 font-bold text-slate-900">Get in touch</h2>
              <div className="mt-3 space-y-6 text-lg leading-6">
                <p>
                  <span className="font-semibold">Email:</span> yaxi621@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Our lab is located at:</span>{' '}
                  <a
                    href="https://maps.app.goo.gl/YKfoWQ6jLyxYZprF8"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-slate-950"
                  >
                    476 Biological Sciences Building, 484 W. 12th Ave, Columbus, Ohio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const [page, setPage] = useState<PageKey>('home');

  return (
    <Layout page={page} setPage={setPage}>
      {page === 'home' && <LandingPage />}

      {page === 'research' && <ResearchPage />}
      {page === 'people' && <PeoplePage setPage={setPage} />}
      {page === 'person-0' && <PersonDetailPage person={people[0]} setPage={setPage} />}
      {page === 'person-1' && <PersonDetailPage person={people[1]} setPage={setPage} />}
      {page === 'person-2' && <PersonDetailPage person={people[2]} setPage={setPage} />}
      {page === 'person-3' && <PersonDetailPage person={people[3]} setPage={setPage} />}
      {page === 'publications' && <PublicationsPage />}
      {page === 'news' && <NewsPage />}
      {page === 'join' && <JoinPage />}
    </Layout>
  );
}
