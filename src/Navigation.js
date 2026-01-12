import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  return (
    <>
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
        <div className="nav-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Center Logo - Shows on top for mobile */}
          <Link to="/" className="nav-logo" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#C49A6C',
            fontSize: 'clamp(0.85rem, 3.5vw, 1.5rem)',
            fontWeight: '800',
            letterSpacing: 'clamp(0.02em, 0.4vw, 0.1em)'
          }}>
            LEUNG NOODLE
          </Link>

          {/* Navigation items - Shows below logo */}
          <div className="nav-items" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(0.2rem, 1.5vw, 1.5rem)',
            flexWrap: 'nowrap',
            width: '100%'
          }}>
            <a
              href="/#menu"
              style={{
                color: '#5d4e37',
                textDecoration: 'none',
                fontSize: 'clamp(0.55rem, 2.2vw, 1rem)',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: 'clamp(0.01em, 0.2vw, 0.05em)',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
            >
              Menu
            </a>

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
                  fontSize: 'clamp(0.55rem, 2.2vw, 1rem)',
                  fontWeight: '500',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: 'clamp(0.01em, 0.2vw, 0.05em)',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: 0,
                  whiteSpace: 'nowrap'
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

            <a
              href="/#gallery"
              style={{
                color: '#5d4e37',
                textDecoration: 'none',
                fontSize: 'clamp(0.55rem, 2.2vw, 1rem)',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: 'clamp(0.01em, 0.2vw, 0.05em)',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
            >
              Gallery
            </a>

            <Link
              to="/contact"
              style={{
                color: '#5d4e37',
                textDecoration: 'none',
                fontSize: 'clamp(0.55rem, 2.2vw, 1rem)',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: 'clamp(0.01em, 0.2vw, 0.05em)',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* CSS for responsive behavior */}
      <style>{`
        /* Desktop view - horizontal layout with logo in center */
        @media (min-width: 769px) {
          .nav-container {
            flex-direction: row !important;
            justify-content: space-between !important;
            gap: 2rem !important;
          }

          .nav-logo {
            order: 2;
            flex: 0 0 auto !important;
          }

          .nav-items {
            order: 1;
            flex: 1 !important;
            justify-content: space-between !important;
          }

          .nav-items a:nth-child(1),
          .nav-items > div:nth-child(2) {
            margin-right: auto;
          }

          .nav-items a:nth-child(3),
          .nav-items a:nth-child(4) {
            margin-left: auto;
          }
        }

        /* Mobile view - logo on top, items below */
        @media (max-width: 768px) {
          nav {
            padding: 0.5rem 0.25rem !important;
          }

          .nav-container {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }

          .nav-items {
            justify-content: space-evenly !important;
            flex-wrap: nowrap !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
