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
        padding: '0.75rem 0.5rem',
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
          gap: '0.75rem'
        }}>
          {/* Center Logo */}
          <Link to="/" className="nav-logo" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#C49A6C',
            fontSize: '1.25rem',
            fontWeight: '800',
            letterSpacing: '0.05em'
          }}>
            LEUNG NOODLE
          </Link>

          {/* Navigation items wrapper for mobile */}
          <div className="nav-items-wrapper" style={{
            display: 'flex',
            gap: '0.5rem',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Left side navigation items */}
            <div className="nav-left" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
            <a
              href="/#menu"
              className="nav-link"
              style={{
                color: '#5d4e37',
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
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
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  color: showSocialDropdown ? '#C49A6C' : '#5d4e37',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.02em',
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
            </div>

            {/* Right side navigation items */}
            <div className="nav-right" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
            <a
              href="/#gallery"
              className="nav-link"
              style={{
                color: '#5d4e37',
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
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
              className="nav-link"
              style={{
                color: '#5d4e37',
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontWeight: '500',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.02em',
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
        </div>
      </nav>

      {/* CSS for responsive behavior */}
      <style>{`
        /* Desktop view - horizontal split layout with logo in center */
        @media (min-width: 769px) {
          nav {
            padding: 1rem 2rem !important;
          }

          .nav-container {
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 0 !important;
          }

          .nav-items-wrapper {
            display: contents !important;
          }

          .nav-logo {
            order: 1 !important;
            font-size: 1.5rem !important;
            letter-spacing: 0.1em !important;
            flex: 0 0 auto !important;
            margin: 0 3rem !important;
          }

          .nav-left {
            order: 0 !important;
            display: flex !important;
            align-items: center !important;
            gap: 1.5rem !important;
            justify-content: flex-end !important;
          }

          .nav-right {
            order: 2 !important;
            display: flex !important;
            align-items: center !important;
            gap: 1.5rem !important;
            justify-content: flex-start !important;
          }

          .nav-link {
            font-size: 1rem !important;
            letter-spacing: 0.05em !important;
          }
        }

        /* Mobile view - logo on top, items in row below */
        @media (max-width: 768px) {
          .nav-left,
          .nav-right {
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
