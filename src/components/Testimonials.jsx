export default function Testimonials() {
  const reviews = [
    { name: "Rahul Sharma", text: "Very peaceful puja. Highly recommended ⭐⭐⭐⭐⭐" },
    { name: "Anita Verma", text: "Pandit ji explained everything beautifully ⭐⭐⭐⭐⭐" }
  ];

  return (
    <section>
      <h2>What Our Clients Say</h2>
      {reviews.map((r, i) => (
        <div key={i} className="review">
          <strong>{r.name}</strong>
          <p>{r.text}</p>
        </div>
      ))}
    </section>
  );
}
