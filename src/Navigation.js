import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import translations from './translations';

const Navigation = ({ language, toggleLanguage }) => {
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, rgba(225, 215, 200, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        padding: '0.25rem 2rem',
        height: '120px',
        boxSizing: 'border-box',
        overflow: 'visible',
        zIndex: 1000,
        borderBottom: '1px solid rgba(210, 180, 140, 0.3)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="nav-container" style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '0.75rem',
          paddingTop: '0.25rem'
        }}>
          {/* Logo */}
          <a href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'flex-start', marginRight: 'auto', marginTop: '-0.75rem' }}>
            <img
              src="/images/gallery/banner_logo.png"
              alt="Leung Noodle"
              className="nav-logo-img"
              style={{ height: '9rem' }}
            />
          </a>

          {/* Hamburger button (mobile only) */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 1002
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5d4e37" strokeWidth="2" strokeLinecap="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          {/* Navigation items */}
          <div className={`nav-items-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            height: '100%'
          }}>
              <a
                href="/#menu"
                className="nav-link"
                onClick={closeMobileMenu}
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
                className="social-dropdown-container"
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
                  onClick={() => setShowSocialDropdown(!showSocialDropdown)}
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
                  <div className="social-dropdown" style={{
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
                        onClick={closeMobileMenu}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        Instagram
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Facebook
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="nav-link"
                onClick={closeMobileMenu}
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
                {t.about}
              </Link>

              <Link
                to="/contact"
                className="nav-link"
                onClick={closeMobileMenu}
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
      </nav>

      {/* Mobile menu overlay - closes menu when tapping outside */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMobileMenu}
          style={{
            display: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 998
          }}
        />
      )}

      {/* CSS for responsive behavior */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        /* Desktop view - nav items aligned to the right */
        @media (min-width: 769px) {
          nav {
            padding: 0.25rem 2rem !important;
            height: 120px !important;
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
            align-items: center !important;
          }

          .nav-link {
            font-size: 1rem !important;
            letter-spacing: 0.05em !important;
          }

          .language-toggle {
            font-size: 0.85rem !important;
            padding: 0.5rem 1rem !important;
          }

          .hamburger-btn {
            display: none !important;
          }
        }

        /* Mobile view */
        @media (max-width: 768px) {
          nav {
            height: 70px !important;
            padding: 0.25rem 1rem !important;
          }

          .nav-logo {
            margin-top: -0.25rem !important;
          }

          .nav-logo-img {
            height: 5rem !important;
          }

          .nav-container {
            align-items: center !important;
            padding-top: 0 !important;
          }

          .hamburger-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .nav-items-wrapper {
            display: none !important;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: linear-gradient(180deg, rgba(245, 241, 232, 0.99) 0%, rgba(255, 255, 255, 0.98) 100%);
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: stretch;
            padding: 1rem 1.5rem;
            gap: 0;
            border-bottom: 1px solid rgba(210, 180, 140, 0.3);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            z-index: 999;
            height: auto;
          }

          .nav-items-wrapper.mobile-open {
            display: flex !important;
          }

          .nav-items-wrapper .nav-link {
            font-size: 1rem !important;
            padding: 0.85rem 0 !important;
            height: auto !important;
            border-bottom: 1px solid rgba(210, 180, 140, 0.15);
            letter-spacing: 0.05em !important;
          }

          .social-dropdown-container {
            flex-direction: column !important;
            align-items: stretch !important;
            height: auto !important;
          }

          .social-dropdown-container .nav-link {
            width: 100%;
          }

          .social-dropdown {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            padding-top: 0 !important;
          }

          .social-dropdown > div {
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
            padding: 0 0 0 1rem !important;
          }

          .language-toggle {
            margin-top: 0.5rem;
            align-self: flex-start;
            font-size: 0.85rem !important;
            padding: 0.5rem 1rem !important;
          }

          .mobile-overlay {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
