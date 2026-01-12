import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  return (
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
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem'
      }}>
        {/* Left side navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flex: 1,
          justifyContent: 'flex-end'
        }}>
          <a
            href="/#menu"
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

        {/* Center Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: '#C49A6C',
          fontSize: '1.5rem',
          fontWeight: '800',
          letterSpacing: '0.1em'
        }}>
          LEUNG NOODLE
        </Link>

        {/* Right side navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flex: 1,
          justifyContent: 'flex-start'
        }}>
          <a
            href="/#gallery"
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
          </a>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
