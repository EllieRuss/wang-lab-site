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
    bio: 'Yaxi, pronounced “Yashi” (yes, it sounds a bit like that green dinosaur in Super Mario), grew up in an ancient city in northern China. He received his Ph.D. in Biochemistry from Texas A&M, where he had fun studying lipid transfer proteins and lipid kinases in Dr. Vytas Bankaitis’s lab. For his postdoctoral training with Dr. Joseph Mougous, first at the University of Washington and later at Yale, Yaxi worked on a variety of topics spanning nutrient utilization in intracellular bacterial pathogens, bacterial protein-protein interactions, and interbacterial interactions. After experiencing life in the South, Pacific Northwest, and the East Coast, Yaxi is excited to move to Ohio, where the climate and latitude are very similar to those of his hometown. Outside of the lab, Yaxi enjoys watching professional basketball (Go Spurs!), exploring everything related to biology, and spending time with his family.',
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
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white/100 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 lg:px-18">
          <button type="button" onClick={() => setPage('home')} className="flex items-center gap-4 text-left">
            <img
              src="/images/lab-logo.jpg"
              alt="Wang Lab logo"
              className="h-20 w-auto object-contain"
            />
            <div className="text-2xl font-bold tracking-tight text-slate-900">
              WANG LAB
            </div>
          </button>

          <nav className="ml-4 flex flex-wrap items-center justify-end gap-x-8 gap-y-3 text-lg text-slate-900">
            {navItems.map((item) => {
              const active = page === item.key;
              return (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setPage(item.key)}
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
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-lg font-semibold text-slate-900">Wang Lab @ OSU</div>
              <p className="mt-3 max-w-md leading-7 text-slate-600">
                Department of Microbiology
                <br />
                The Ohio State University
                <br />
                Columbus, Ohio
              </p>
            </div>

            <div className="md:text-right">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Contact</div>
              <p className="mt-3 leading-7 text-slate-700">
                yaxi621@gmail.com
                <br />
                476 Biological Sciences Building, 484 W. 12th Ave
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            © 2026 Wang Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function LandingPage() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/images/osu-building-hero.png"
        alt="Biological Sciences Building at The Ohio State University"
        className="h-[80vh] w-full object-cover object-[center_35%]"
      />

      <div className="absolute inset-0 bg-black/12" />
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/55 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-5xl px-6 text-center text-white">
          <h1 className="text-3xl tracking-tight md:text-4xl">
            WELCOME TO THE
          </h1>
          <p className="mt-20 text-3xl font-semibold leading-40 text-white/95 md:text-8xl">
            WANG LAB
          </p>
        </div>
      </div>
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
    <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-10">
      <div className="mb-14">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          What we do
        </h2>
        <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-slate-700">
          The Wang Lab investigates the molecular mechanisms underlying bacterial host interactions,
          with a particular focus on Patescibacteria, surface structures, adhesion, and interspecies
          relationships in host-associated environments.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <h1 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Patescibacteria: microbial dark matter
        </h1>

        <div className="text-lg leading-8 text-slate-900">
          <img
            src="/images/research-pic.png"
            alt="Scanning electron micrograph showing Saccharibacteria attached to host bacteria"
            className="mb-4 w-full max-w-[320px] sm:float-left sm:mr-8 sm:mb-4"
          />

          <p>
            The major focus of our group is on a group of bacteria called Patescibacteria (also
            known as Candidate Phyla Radiation, CPR). These bacteria unproportionally contribute to
            the “microbial dark matter” – the large group of microorganisms on our planet that are
            difficult to cultivate and the biology of which remain largely unknown. Patescibacteria
            comprise a significant proportion of bacterial diversity (as high as 25% based on some
            estimates) and are widespread in environment and human microbiomes. They share unique
            features that distinguish them from most other bacteria: ultrasmall (~0.2 µm in width),
            streamlined genomes (less than 1 Mbp), limited metabolic capability (generally lacking
            biosynthetic capacity for nucleic acids, amino acids, and fatty acids), and living as
            obligate epibionts on host bacteria. Given their unique biology and the phylogenetic
            distance from well-studied model bacteria, Patescibacteria represent a reservoir of
            unexplored biological mechanisms and biosynthetic pathways with bioengineering and
            pharmaceutical potentials. In addition, these bacteria are prevalent in the human oral
            microbiota and are closely associated with human oral health and disease. Thus, the study
            of Patescibacteria will also provide insights into their ecological role in human
            microbiome and their health relevance.
          </p>

          <div className="clear-both" />
        </div>
      </div>

      <div className="mt-20 max-w-6xl space-y-2 text-lg leading-8 text-slate-900">
        <p>
          We use a combination of genetic, biochemical, structural, and bioinformatic approaches to
          study these enigmatic bacteria and their interactions with hosts. Some of our current
          focuses include:
        </p>
        <ol className="list-decimal space-y-3 pl-6">
          <li>What is the range of host microorganisms that Patescibacteria can infect?</li>
          <li>
            What are the molecular mechanisms governing Patescibacteria-host attachment and host
            specificity?
          </li>
          <li>
            How do host bacteria respond to Patescibacteria infection and defend against
            Patescibacteria?
          </li>
          <li>
            How do Patescibacteria and their interactions with host bacteria influence the human
            oral microbiome and human health?
          </li>
        </ol>
        <p>
          Beyond Patescibacteria, we are broadly interested in studying interactions between
          microbes, including bacteria, phages, and archaea, especially those that reside in human
          microbiomes. Through these investigations, we aim to contribute to our understanding of
          how intermicrobial interactions shape the microbiome and ultimately impact human health.
        </p>
      </div>
    </section>
  );
}

function PeoplePage({ setPage }: { setPage: (page: PageKey) => void }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person, index) => (
          <button
            key={person.name + person.role + index}
            type="button"
            onClick={() => setPage(`person-${index}` as PageKey)}
            className="text-left"
          >
            <div className="overflow-hidden rounded-2xl bg-white">
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-[420px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                  Photo
                </div>
              )}
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {person.name}
              </h2>
              <div className="mt-1 text-slate-600">{person.role}</div>
            </div>
          </button>
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
    <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
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
          className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 underline underline-offset-4 hover:text-slate-700"
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
    <div className="grid gap-8 pb-8 md:grid-cols-[300px_1fr] md:items-start">
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
          className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 underline underline-offset-4 hover:text-slate-700"
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
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-10">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/images/publications-banner.png"
          alt="Playdough-style campus illustration"
          className="h-[34vh] w-full object-cover"
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

      <div className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Other Publications
        </h2>
      </div>

      <div className="mt-10 space-y-10">
        {otherPublications.map((pub) => (
          <PublicationCard key={pub.title} pub={pub} />
        ))}
      </div>
    </section>
  );
}

function NewsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
      <div className="space-y-16">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            LAB NEWS
          </h1>

          <div className="mt-10 space-y-8">
            <div className="border-b border-slate-200 pb-8">
              <div className="text-2xl font-semibold tracking-tight text-slate-900">
                Wang Lab starts in January, 2027!
              </div>
              <p className="mt-4 max-w-4xl leading-8 text-slate-700">
                And the adventure begins.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            ACTIVITIES
          </h2>

          <div className="mt-10 space-y-8">
            <div className="border-b border-slate-200 pb-8">
              <div className="text-2xl font-semibold tracking-tight text-slate-900"></div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500"></div>
              <p className="mt-4 max-w-4xl leading-8 text-slate-700"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function JoinPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[640px_1fr] lg:items-start">
        <div>
          <img
            src="/images/contact-bg.png"
            alt="Columbus skyline with deer statue"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Contact
          </h1>

          <div className="mt-8 space-y-4 text-slate-800">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Students</h2>
              <p className="mt-2 text-sm leading-6">
                Graduate students and undergraduate students are welcome to inquire.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Postdoctoral fellow
              </h2>
              <p className="mt-2 text-sm leading-6">
                Candidates with experience in microbiology, biochemistry, molecular biology and
                genetics are encouraged to send application and CV to the email address below.
              </p>
            </div>

            <div className="border-w border-slate-300 pt-6">
              <h2 className="text-3xl space-y-12 font-bold text-slate-900">Get in touch</h2>
              <div className="mt-3 space-y-6 text-sm leading-6">
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
                    476 Biological Sciences Building, 484 W. 12th Ave
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
      {page === 'home' && (
        <>
          <LandingPage />
          <HomePage />
        </>
      )}
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
