import Link from "next/link";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Research", href: "#research" },
  { label: "People", href: "/people/" },
  { label: "Publications", href: "/publications/" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    title: "Structure in real time",
    text: "We study how syntactic structure is assembled online as readers and listeners encounter ambiguity, agreement, and long-distance dependencies.",
  },
  {
    title: "Hebrew and beyond",
    text: "Our work uses Hebrew as a core testing ground while placing it in a broader typological and theoretical conversation.",
  },
  {
    title: "Methods that triangulate",
    text: "We combine behavioral experiments, acceptability judgments, corpus-driven questions, and time-sensitive measures of comprehension.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header" id="home">
        <div className="page-shell header-inner">
          <div>
            <a className="brand" href="#home">
              Syntax Lab
            </a>
          </div>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/") ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <section className="intro" aria-labelledby="site-title">
          <h1 id="site-title">Theoretical and Experimental Syntax</h1>
          <p className="lead"></p>
          <p className="intro-links">
            <a href="#research">Research areas</a>
            <span>|</span>
            <Link href="/people/">People</Link>
            <span>|</span>
            <Link href="/publications/">Publications</Link>
            <span>|</span>
            <a href="#contact">Contact the lab</a>
          </p>
        </section>

        <section className="content-section" id="research">
          <h2>Research</h2>
          <div className="content-grid">
            <div className="main-column">
              <p>We investigate syntactic....</p>
            </div>
            <div className="side-column">
              {focusAreas.map((item) => (
                <article className="text-block" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="contact">
          <h2>Contact</h2>
          <div className="contact-panel">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:syntaxlab@tauexample.ac.il">siloni@tauex.ac.il</a>
            </p>
            <p>
              <strong>Location:</strong> Webb 404 Building, Tel Aviv University
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
