'use client';

import { useState } from 'react';

type PageKey =
  | 'landing'
  | 'home'
  | 'research'
  | 'people'
  | 'publications'
  | 'news'
  | 'join';

const navItems: { key: Exclude<PageKey, 'landing'>; label: string }[] = [
  { key: 'home', label: 'HOME' },
  { key: 'research', label: 'RESEARCH' },
  { key: 'people', label: 'TEAM' },
  { key: 'publications', label: 'PUBLICATIONS' },
  { key: 'news', label: 'NEWS' },
  { key: 'join', label: 'CONTACT US' },
];

const people = [
  {
    name: 'Yaxi Wang',
    role: 'Principal Investigator',
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
    role: 'Research Assistant',
    image: '',
    bio: 'Add a short bio for each lab member here.',
  },
];

const publications = [
  {
    title: 'De Novo Design of High-Affinity Miniprotein Binders Targeting Francisella Tularensis Virulence Factor',
    authors:
      'Gokce-Alpkilic G, Huang B, Liu A, Kreuk LSM, [Wang Y], Adebomi V, Bueso YF, Bera AK, Kang A, Gerben SR, Rettie S, Vafeados DK, Roullier N, Goreshnik I, Li X, Baker D, Woodward JJ, Mougous JD, Bhardwaj G.',
    journal: 'Angewandte Chemie International Edition',
    date: '2025',
  },
  {
    title: 'Protein interactions in human pathogens revealed through deep learning',
    authors:
      'Humphreys IR*, Zhang J*, Baek M*, [Wang Y]*, Krishnakumar A, Pei J, Anishchenko I, Tower CA, Jackson BA, Warrier T, Hung DT, Peterson SB, Mougous JD, Cong Q, Baker D.',
    journal: 'Nature Microbiology',
    date: '2024',
  },
  {
    title: 'Streptomyces umbrella toxin particles block hyphal growth of competing species',
    authors:
      'Zhao Q, Bertolli S, Park YJ, Tan Y, Cutler KJ, Srinivas P, Asfahl KL, Fonesca-García C, Gallagher LA, Li Y, [Wang Y], Coleman-Derr D, DiMaio F, Zhang D, Peterson SB, Veesler D, Mougous JD.',
    journal: 'Nature',
    date: '2024',
  },
  {
    title: 'The wide world of non-mammalian phospholipase D enzymes',
    authors: '[Wang Y], Wakelam MJO, Bankaitis VA, McDermott MI.',
    journal: 'Advances in Biological Regulation',
    date: '2024',
  },
  {
    title: 'Genetic manipulation of Patescibacteria provides mechanistic insights into microbial dark matter and the epibiotic lifestyle',
    authors:
      '[Wang Y]*, Gallagher LA*, Andrade PA, Liu A, Humphreys IR, Turkarslan S, Cutler KJ, Arrieta-Ortiz ML, Li Y, Radey MC, McLean JS, Cong Q, Baker D, Baliga NS, Peterson SB, Mougous JD.',
    journal: 'Cell',
    date: '2023',
  },
  {
    title: 'Discovery of a glutathione utilization pathway in Francisella that shows functional divergence between environmental and pathogenic species',
    authors:
      '[Wang Y], Ledvina HE, Tower CA, Kambarev S, Liu E, Charity JC, Kreuk LSM, Tang Q, Chen Q, Gallagher LA, Radey MC, Rerolle GF, Li Y, Penewit KM, Turkarslan S, Skerrett SJ, Salipante SJ, Baliga NS, Woodward JJ, Dove SL, Peterson SB, Celli J, Mougous JD.',
    journal: 'Cell Host & Microbe',
    date: '2023',
  },
  {
    title: 'Noncanonical regulation of phosphatidylserine metabolism by a Sec14-like protein and a lipid kinase',
    authors:
      '[Wang Y], Yuan P, Grabon A, Tripathi A, Lee D, Rodriguez M, Lönnfors M, Eisenberg-Bord M, Wang Z, Lam SM, Schuldiner M, Bankaitis VA.',
    journal: 'Journal of Cell Biology',
    date: '2020',
  },
  {
    title: 'Mammalian phospholipase D: Function, and therapeutics',
    authors: 'McDermott MI, [Wang Y], Wakelam MJO, Bankaitis VA.',
    journal: 'Progress in Lipid Research',
    date: '2020',
  },
  {
    title: 'An equal opportunity collaboration between lipid metabolism and proteins in the control of membrane trafficking in the trans-Golgi and endosomal systems',
    authors: '[Wang Y], Mousley CJ, Lete MG, Bankaitis VA.',
    journal: 'Current Opinion in Cell Biology',
    date: '2019',
  },
  {
    title: 'Insights into sRNA Genes Regulated by Two-Component Systems in the Bacillus cereus Group',
    authors: 'Mei H, Tang Q, Li X, [Wang Y], Wang J, He J.',
    journal: 'Current Bioinformatics',
    date: '2015',
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
      <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white/92 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 lg:px-18">
          <button type="button" onClick={() => setPage('landing')} className="flex items-center gap-4 text-left">
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
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2 lg:px-8">
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
      </footer>
    </div>
  );
}

function LandingPage({ setPage }: { setPage: (page: PageKey) => void }) {
  return (
    <section className="relative min-h-[calc(100vh-108px)] w-full overflow-hidden">
      <img
        src="/images/osu-building-hero.png"
        alt="Biological Sciences Building at The Ohio State University"
        className="h-[calc(100vh-108px)] w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/25 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="px-6 pb-12 lg:px-10 lg:pb-16">
          <div className="max-w-3xl text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/90">
              The Ohio State University
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Wang Lab
            </h1>
            <p className="mt-4 text-lg leading-8 text-white/90 md:text-xl">
              Department of Microbiology
            </p>
            <button
              type="button"
              onClick={() => setPage('home')}
              className="mt-8 rounded-full border border-white/80 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
            >
              Enter Site
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setPage }: { setPage: (page: PageKey) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[700px_1fr] lg:items-start">
        <div className="relative overflow-hidden">
          <img
            src="/images/saccharibacteria-feature.png"
            alt="Scanning electron micrograph showing Saccharibacteria attached to host bacteria"
            className="w-full h-auto"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/70 via-white/30 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/60 via-white/20 to-transparent" />
        </div>

        <div>
          <button
            type="button"
            onClick={() => setPage('research')}
            className="text-left text-2xl font-bold tracking-normal text-slate-900 md:text-3xl md:leading-snug"
          >
            Decoding the Interactions Between Ultrasmall Epibiotic Bacteria and Their Hosts
          </button>
          <p className="mt-12 text-lg leading-8 text-slate-900">
            The Wang Lab investigates the molecular mechanisms underlying bacterial host interactions,
            with a particular focus on Patescibacteria, surface structures, adhesion, and
            interspecies relationships in host-associated environments.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResearchPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-10">
      <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-start">
        <div>
          <img
            src="/images/research-pic.png"
            alt="Scanning electron micrograph showing Saccharibacteria attached to host bacteria"
            className="w-full h-auto"
          />
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            What is Patescibacteria?
          </h1>

          <div className="mt-8 space-y-2 text-lg leading-8 text-slate-900">
            <p>
              The major focus of our group is a group of bacteria called Patescibacteria, also known as
              Candidate Phyla Radiation (CPR). These bacteria disproportionately contribute to the
              ‘microbial dark matter’—the large group of microorganisms on our planet that are
              difficult to cultivate and whose biology remains largely unknown.
            </p>

            <p>
              Patescibacteria comprise a substantial proportion of bacterial diversity, with some
              estimates placing them as high as 25%, and they are widespread in both environmental
              settings and human microbiomes. They share several unusual features that distinguish them
              from most other bacteria: ultrasmall cell size (~0.2 µm in width), streamlined genomes
              (&lt;1 Mbp), limited metabolic capability, and an obligate epibiotic lifestyle in which
              they rely on host bacteria for propagation while living on the host cell surface.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 max-w-6xl space-y-2 text-lg leading-8 text-slate-900">
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

function PeoplePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
      <div className="mt-12 space-y-12">
        {people.map((person) => (
          <div
            key={person.name + person.role}
            className="grid gap-6 border-w border-slate-200 pb-10 md:grid-cols-[200px_1fr]"
          >
            <div>
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="aspect-[4/5] w-full object-cover border border-slate-200"
                />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center border border-slate-200 bg-slate-100 text-slate-500">
                  Photo
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {person.name}
              </h2>
              <div className="mt-1 text-slate-600">{person.role}</div>
              <p className="mt-4 leading-8 text-slate-700">{person.bio}</p>
            </div>
          </div>
        ))}
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

function PublicationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-10">
      <div className="max-w-5xl">
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Selected publications, listed with the most recent published work first.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {publications.map((pub) => (
          <div key={pub.title} className="border-w border-slate-200 pb-8">
            <div className="text-2xl font-semibold leading-tight tracking-tight text-slate-900">
              {pub.title}
            </div>

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
                News Item Title
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                Month Year
              </div>
              <p className="mt-4 max-w-4xl leading-8 text-slate-700">
                Add a short description of the update here.
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
              <div className="text-2xl font-semibold tracking-tight text-slate-900">
                Activity Title
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                Month Year
              </div>
              <p className="mt-4 max-w-4xl leading-8 text-slate-700">
                Add a short description of talks, outreach, conferences, or lab activities here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function JoinPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.png"
          alt="Columbus skyline with deer statue"
          className="h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-white/45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl bg-white/50 p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Join us
            </h2>

            <div className="mt-6 space-y-6 text-slate-800">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Students</h3>
                <p className="mt-2 text-lg leading-8">
                  Graduate students and undergraduate students are welcome to inquire.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Postdoctoral fellow
                </h3>
                <p className="mt-2 text-lg leading-8">
                  Candidates with experience in microbiology, biochemistry, molecular biology and
                  genetics are encouraged to send application and CV to the email address below.
                </p>
              </div>

              <div className="border-t border-slate-300 pt-6">
                <h3 className="text-lg font-semibold text-slate-900">Get in touch</h3>
                <div className="mt-3 space-y-3 text-lg leading-8">
                  <p>
                    <span className="font-semibold">Email:</span> yaxi621@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Our lab is located at:</span>{' '}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=476+Biological+Sciences+Building,+484+W.+12th+Ave,+Columbus,+OH"
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
      </div>
    </section>
  );
}
export default function Page() {
  const [page, setPage] = useState<PageKey>('landing');

  return (
    <Layout page={page} setPage={setPage}>
      {page === 'landing' && <LandingPage setPage={setPage} />}
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'research' && <ResearchPage />}
      {page === 'people' && <PeoplePage />}
      {page === 'publications' && <PublicationsPage />}
      {page === 'news' && <NewsPage />}
      {page === 'join' && <JoinPage />}
    </Layout>
  );
}
