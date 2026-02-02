function CVHeader({ name, email, tel }) {
  return (
    <header>
      <h1>{name}</h1>
      <address>{email}</address>
      <address>{tel}</address>
    </header>
  );
}

function CVSection ({ name }) {
  return (
    <section>
      <h2>{name}</h2>
      {/* @todo */}
    </section>
  );
}

export default function CV({ data }) {
  return (
    <article>
      <CVHeader name={data.name} email={data.email} tel={data.tel} />
      <CVSection name="Education" />
      <CVSection name="Experience" />
    </article>
  );
}