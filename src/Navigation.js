import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import translations from './translations';

const Navigation = ({ language, toggleLanguage }) => {
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);
  const t = translations[language].nav;

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, rgba(225, 215, 200, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        padding: '1.75rem 2rem',
        zIndex: 1000,
        borderBottom: '1px solid rgba(210, 180, 140, 0.3)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="nav-container" style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '0.75rem'
        }}>
          {/* Navigation items wrapper */}
          <div className="nav-items-wrapper" style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {/* Left side navigation items */}
            <div className="nav-left" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center',
              height: '100%'
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
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
              >
                {t.menu}
              </a>

              {/* Social Media Dropdown */}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
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
                    margin: 0,
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    lineHeight: 'normal'
                  }}
                >
                  {t.socialMedia} ▾
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
              justifyContent: 'center',
              height: '100%'
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
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
              >
                {t.gallery}
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
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C49A6C'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d4e37'}
              >
                {t.contactUs}
              </Link>

              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="language-toggle"
                style={{
                  background: 'linear-gradient(135deg, #C49A6C 0%, #D4AF7A 100%)',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '0.4rem 0.8rem',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  fontFamily: '"Inter", sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 2px 8px rgba(196, 154, 108, 0.3)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(196, 154, 108, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(196, 154, 108, 0.3)';
                }}
              >
                {language === 'en' ? 'VN' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CSS for responsive behavior */}
      <style>{`
        /* Desktop view - nav items aligned to the right */
        @media (min-width: 769px) {
          nav {
            padding: 1.75rem 2rem !important;
          }

          .nav-container {
            flex-direction: row !important;
            justify-content: flex-end !important;
            align-items: center !important;
            gap: 0 !important;
          }

          .nav-items-wrapper {
            display: flex !important;
            gap: 2rem !important;
          }

          .nav-left, .nav-right {
            display: flex !important;
            align-items: center !important;
            gap: 1.5rem !important;
          }

          .nav-link {
            font-size: 1rem !important;
            letter-spacing: 0.05em !important;
          }

          .language-toggle {
            font-size: 0.85rem !important;
            padding: 0.5rem 1rem !important;
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