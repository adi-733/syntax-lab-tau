import Link from "next/link";
import publications from "@/data/publications.json";

const navigation = [
  { label: "Home", href: "/" },
  { label: "People", href: "/people/" },
  { label: "Publications", href: "/publications/" },
  { label: "Contact", href: "/#contact" },
];

export default function PublicationsPage() {
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
        <section className="intro" aria-labelledby="publications-title">
          <h1 id="publications-title">Publications</h1>
        </section>

        <section className="content-section">
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication-row" key={publication.title}>
                <h3>{publication.title}</h3>
                <p className="meta">{publication.venue}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
