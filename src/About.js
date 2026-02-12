import Navigation from './Navigation';
import translations from './translations';

const About = ({ language, toggleLanguage }) => {
  const t = translations[language];
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F5F1E8 0%, #EDE8DC 100%)',
      color: '#2d2d2d',
      fontFamily: '"Nunito", sans-serif'
    }}>
      <Navigation language={language} toggleLanguage={toggleLanguage} />

      <section className="page-content" style={{
        padding: '4rem 2rem',
        paddingTop: '140px'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#3d3d3d',
            letterSpacing: '0.05em'
          }}>
            {t.about.title}
          </h2>

          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(245,241,232,0.6) 100%)',
            border: '1px solid rgba(210,195,170,0.4)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            boxShadow: '0 10px 30px rgba(139, 119, 101, 0.1)'
          }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#5d4e37',
              fontFamily: '"Inter", sans-serif'
            }}>
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      <footer style={{
        borderTop: '1px solid rgba(210,195,170,0.3)',
        padding: '3rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #F5F1E8 0%, #EDE8DC 100%)'
      }}>
        <p style={{
          color: '#8B7355',
          fontSize: '0.9rem',
          fontFamily: '"Inter", sans-serif'
        }}>
          © 2021 Leung Noodle. {t.home.footer}
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=Merienda:wght@400;700&family=Nunito:wght@300;400;500;600;700;800;900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .page-content {
            padding-top: 90px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
