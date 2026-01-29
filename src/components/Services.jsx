export default function Services() {
  const services = [
    "Puja (Worship)",
    "Hawan (Fire Ritual)",
    "Katha (Sacred Stories)",
    "Gemstone Consultation"
  ];

  return (
    <section>
      <h2>Our Sacred Services</h2>
      <div className="cards">
        {services.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </section>
  );
}
