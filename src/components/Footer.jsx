export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-section">
          <h3>The Puja Path</h3>
          <p>
            Authentic Vedic puja services performed with devotion, purity,
            and complete rituals for peace and prosperity.
          </p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Puja (Worship)</li>
            <li>Hawan (Fire Ritual)</li>
            <li>Katha (Sacred Stories)</li>
            <li>Gemstone Consultation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 Phone: +91 9XXXXXXXXX</p>
          <p>📧 Email: thepujapath@gmail.com</p>
          <p>📍 Location: Kanpur, Uttar Pradesh</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Book Service</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Puja Path. All rights reserved.</p>
      </div>
    </footer>
  );
}
