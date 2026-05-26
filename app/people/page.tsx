import Image from "next/image";
import Link from "next/link";
import alumniData from "@/data/alumni.json";
import teamData from "@/data/team.json";

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

type AlumniEntry = {
  name: string;
  year: number;
  photo?: string;
};

const team = teamData as TeamMember[];
const alumni = alumniData as AlumniEntry[];

const navigation = [
  { label: "Home", href: "/" },
  { label: "People", href: "/people/" },
  { label: "Publications", href: "/publications/" },
  { label: "Contact", href: "/#contact" },
];

export default function PeoplePage() {
  return (
    <>
      <header className="site-header">
        <div className="page-shell header-inner">
          <div>
            <Link className="brand" href="/">
              Syntax Lab
            </Link>
          </div>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <section className="intro" aria-labelledby="people-title">
          <h1 id="people-title">People</h1>
        </section>

        <section className="content-section" id="team">
          <h2>Researchers</h2>
          <div className="people-grid">
            {team.map((member) => (
              <article className="person-card" key={`${member.name}-${member.role}`}>
                {member.photo ? (
                  <Image
                    className="person-photo"
                    src={member.photo}
                    alt={member.name}
                    width={140}
                    height={140}
                  />
                ) : (
                  <div className="person-placeholder" aria-hidden="true">
                    Photo
                  </div>
                )}
                <h3>{member.name}</h3>
                <p className="person-meta">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="alumni">
          <h2>Alumni</h2>
          <div className="people-grid">
            {alumni.map((entry) => (
              <article className="person-card" key={entry.name}>
                {entry.photo ? (
                  <Image
                    className="person-photo"
                    src={entry.photo}
                    alt={entry.name}
                    width={140}
                    height={140}
                  />
                ) : (
                  <div className="person-placeholder" aria-hidden="true">
                    Photo
                  </div>
                )}
                <h3>{entry.name}</h3>
                <p className="person-meta">{entry.year}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
