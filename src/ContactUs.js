import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const RESTAURANT_INFO = {
  name: "Leung Noodle",
  locations: [
    {
      name: "Senter Road Location",
      address: "2859 Senter Rd, San Jose, CA, 95111",
      phone: "(408) 705-9848",
      hours: "Mon-Sun: 10:00 AM - 9:00 PM"
    },
    {
      name: "Silver Creek Location",
      address: "3005 Silver Creek Rd Ste #130, San Jose, CA, 95121",
      phone: "(408) 622-8352",
      hours: "Mon-Sun: 10:00 AM - 9:00 PM"
    }
  ]
};

const ContactUs = () => {
  const [showSocialDropdown, setShowSocialDropdown] = React.useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F5F1E8 0%, #EDE8DC 100%)',
      color: '#2d2d2d',
      fontFamily: '"Nunito", sans-serif'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(245, 241, 232, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        zIndex: 1000,
        borderBottom: '1px solid rgba(210, 180, 140, 0.3)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/"
            style={{
              color: '#5d4e37',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
          >
            Home
          </Link>
          <Link
            to="/#menu"
            style={{
              color: '#5d4e37',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
          >
            Menu
          </Link>
          <Link
            to="/contact"
            style={{
              color: '#5d4e37',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
          >
            Contact Us
          </Link>
          <Link
            to="/#gallery"
            style={{
              color: '#5d4e37',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
          >
            Gallery
          </Link>

          {/* Social Media Dropdown */}
          <div
            style={{
              position: 'relative'
            }}
            onMouseEnter={() => setShowSocialDropdown(true)}
            onMouseLeave={() => setShowSocialDropdown(false)}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                color: showSocialDropdown ? '#C49A6C' : '#5d4e37',
                fontSize: '1rem',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                padding: 0
              }}
            >
              Social Media ▾
            </button>

            {showSocialDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                paddingTop: '0.5rem',
                zIndex: 1001
              }}>
                <div style={{
                  background: 'rgba(245, 241, 232, 0.98)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '0.5rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(210, 180, 140, 0.3)',
                  minWidth: '160px',
                  animation: 'fadeIn 0.2s ease-out'
                }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    color: '#5d4e37',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontFamily: '"Inter", sans-serif',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(196, 154, 108, 0.2)';
                    e.currentTarget.style.color = '#C49A6C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#5d4e37';
                  }}
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    color: '#5d4e37',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontFamily: '"Inter", sans-serif',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(196, 154, 108, 0.2)';
                    e.currentTarget.style.color = '#C49A6C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#5d4e37';
                  }}
                >
                  Facebook
                </a>
                <a
                  href="https://yelp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    color: '#5d4e37',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontFamily: '"Inter", sans-serif',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(196, 154, 108, 0.2)';
                    e.currentTarget.style.color = '#C49A6C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#5d4e37';
                  }}
                >
                  Yelp
                </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Contact Us Section */}
      <section style={{
        paddingTop: '100px',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
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
            Contact Us
          </h2>

          {/* Location cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '2rem'
          }}>
            {RESTAURANT_INFO.locations.map((location, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(245,241,232,0.6) 100%)',
                  border: '1px solid rgba(210,195,170,0.4)',
                  borderRadius: '20px',
                  padding: 'clamp(1rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(139, 119, 101, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 119, 101, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 119, 101, 0.1)';
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '400',
                  marginBottom: '1.5rem',
                  color: '#3d3d3d'
                }}>
                  {location.name}
                </h3>

                {/* Address */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  color: '#5d4e37',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  <MapPin size={20} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#5d4e37',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
                  >
                    {location.address}
                  </a>
                </div>

                {/* Phone */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  <Phone size={20} style={{ flexShrink: 0 }} />
                  <a
                    href={`tel:${location.phone}`}
                    style={{
                      color: '#5d4e37',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Hours */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  color: '#5d4e37',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  <Clock size={20} style={{ flexShrink: 0 }} />
                  <span>{location.hours}</span>
                </div>

                {/* Google Maps Embed */}
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: 'clamp(200px, 40vw, 300px)',
                  border: '1px solid rgba(210, 180, 140, 0.3)',
                  width: '100%'
                }}>
                  <iframe
                    title={`Map of ${location.name}`}
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(location.address)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
          © 2026 {RESTAURANT_INFO.name}. All rights reserved.
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=Nunito:wght@300;400;500;600&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
