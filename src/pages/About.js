import './About.css';

export default function About() {
  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      
      <div className="about-hero">
        <h1 style={{ fontFamily:"Poppins"}}>About Traders Club @BPHC</h1>
        <p>
          We are the epicenter of financial literacy, quantitative modeling, and market execution 
          at BITS Pilani, Hyderabad Campus. 
        </p>
      </div>

      <section className="about-section">
        <h2 style={{ fontFamily:"Poppins"}}>What We Do</h2>
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '30px', borderRadius: '8px' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Traders Club serves as a collaborative sandbox for students passionate about the financial markets. 
            From fundamental equity research and macro-economic evaluations to coding algorithmic execution scripts 
            and options spread simulations, we bridge the gap between academic theory and real-world market application. 
            We organize regular lectures, paper-trading leagues, backtesting workshops, and speaker sessions with industry leaders.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2 style={{ fontFamily:"Poppins"}}>Mission & Vision</h2>
        <div className="mission-grid">
          <div className="mission-box">
            <h3>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              To demystify financial markets for engineering and science students by providing hands-on 
              exposure to trading frameworks, risk management strategies, and rigorous data analysis.
            </p>
          </div>
          <div className="mission-box">
            <h3>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              To build a self-sustaining ecosystem of quantitative thinkers and market analysts who can 
              confidently navigate global financial landscapes and pioneer tech-driven trading solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 style={{ fontFamily:"Poppins"}}>Key Activities</h2>
        <div className="mission-grid">
          <div className="mission-box">
            <h3>📈 Paper Trading Leagues</h3>
            <p style={{ color: 'var(--text-muted)' }}>Competitive semester-long mock simulations tracking real-time asset pricing without financial risk.</p>
          </div>
          <div className="mission-box">
            <h3>💻 Quant & Backtesting Labs</h3>
            <p style={{ color: 'var(--text-muted)' }}>Hands-on coding sessions utilizing Python libraries to test and optimize technical trading strategies.</p>
          </div>
          <div className="mission-box">
            <h3>🎙️ Guest Lectures & Panels</h3>
            <p style={{ color: 'var(--text-muted)' }}>Interactions with alumni working in hedge funds, proprietary trading firms, and investment banks.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 style={{ fontFamily:"Poppins"}}>Our Teams</h2>
        <div className="teams-grid">
          <div className="team-card">
            <h3>Quant & Tech Team</h3>
            <p>Handles algorithm development, data scraping pipelines, and backtesting infrastructure.</p>
          </div>
          <div className="team-card">
            <h3>Research & Analytics</h3>
            <p>Focuses on fundamental company evaluations, macroeconomic trends, and equity reports.</p>
          </div>
          <div className="team-card">
            <h3>Events & Operations</h3>
            <p>Manages workshop logistics, guest speaker coordination, and campus-wide trading competitions.</p>
          </div>
          <div className="team-card">
            <h3>Design & Outreach</h3>
            <p>Handles brand aesthetics, social media announcements, and community engagement.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 style={{ fontFamily:"Poppins"}}>Connect With Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>Get in Touch</h3>
            <p>Have questions about joining the club, collaborating, or sponsoring our events? Reach out through any of our channels below.</p>
            <p style={{ marginTop: '15px' }}><strong>Location:</strong> BITS Pilani, Hyderabad Campus, Jawahar Nagar, Kapra, Secunderabad, Telangana 500078</p>
          </div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>Social Channels</h3>
            <ul className="contact-links-list">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram: @{"insta_handle"}</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn: Traders Club @ BPHC</a></li>
              <li><a href="mailto:@hyderabad.bits-pilani.ac.in">Email: {"<email>"}@hyderabad.bits-pilani.ac.in</a></li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}