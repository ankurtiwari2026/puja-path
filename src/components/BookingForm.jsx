export default function BookingForm() {
  return (
    <section className="form-box">
      <h2>Book a Service</h2>

      <form
        action="https://formspree.io/f/xaqqjbbe"
        method="POST"
      >
        <input name="name" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone Number" required />

        <select name="service">
          <option>Puja</option>
          <option>Hawan</option>
          <option>Katha</option>
          <option>Gemstone</option>
        </select>

        <input type="date" name="date" />
        <input type="time" name="time" />
        <input name="location" placeholder="Location" />
        <textarea name="message" placeholder="Additional Details"></textarea>

        <button className="btn">Book Now</button>
      </form>
    </section>
  );
}
