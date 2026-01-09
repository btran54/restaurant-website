import React, { useState } from 'react';
import { X, MapPin, Clock, Phone } from 'lucide-react';

// ============================================================================
// SECTION 1: RESTAURANT INFORMATION
// ============================================================================
// MODIFY ALL VALUES BELOW to match your restaurant's details

const RESTAURANT_INFO = {
  name: "Leung Noodle",                                    // MODIFY: Your restaurant name
  tagline: "Authentic Asian Noodles & Soups",              // MODIFY: Your tagline/slogan
  address: "Insert address",          // MODIFY: Your full address
  phone: "(408) 622-8352",                                 // MODIFY: Your phone number
  hours: "Mon-Sun: 10:00 AM - 9:00 PM"                     // MODIFY: Your operating hours
};

// ============================================================================
// SECTION 2: MENU DATA
// ============================================================================
// MODIFY ALL VALUES BELOW to match your actual menu items
// You can add or remove categories, items, and customization options

const MENU_DATA = {
  categories: [
    // CATEGORY 1: Signature Noodles
    {
      name: "Signature Noodles",                           // MODIFY: Category name
      items: [
        {
          id: 1,                                           // Keep unique - increment for new items
          name: "Hu Tieu Nam Vang",                             // MODIFY: Item name
          description: "Traditional Vietnamese beef noodle soup with aromatic herbs and spices", // MODIFY: Item description
          basePrice: 12.99,                                // MODIFY: Base price
          image: "🍜",                                      // MODIFY: Emoji or later replace with image URL
          customizations: {
            noodleType: ["Rice Noodles", "Egg Noodles", "Glass Noodles"],     // MODIFY: Add/remove noodle options
            protein: ["Beef Brisket", "Chicken", "Tofu", "Shrimp", "Mixed"],  // MODIFY: Add/remove protein options
            veggies: ["Bean Sprouts", "Thai Basil", "Cilantro", "Green Onions", "Jalapeños", "Lime"] // MODIFY: Add/remove veggie options
          }
        }
        // TO ADD MORE ITEMS: Copy the block above and modify the values
      ]
    },
    
    // CATEGORY 2: Appetizers
    {
      name: "Appetizers",                                  // MODIFY: Category name
      items: [
        {
          id: 5,
          name: "Siu Mai",                            // MODIFY: Item name
          description: "Minced pork and shrimp dumplings steamed to perfection", // MODIFY: Item description
          basePrice: 7.99,                                 // MODIFY: Price
          image: "🥬",
          customizations: {
            protein: ["Shrimp", "Tofu", "Pork", "Chicken"],
            veggies: ["Lettuce", "Mint", "Cilantro", "Carrots", "Cucumber"]
          }
        },
        // TO ADD MORE APPETIZERS: Copy the block above and modify
      ]
    }
    // TO ADD MORE CATEGORIES: Copy one of the category blocks above and modify
  ]
};

const RestaurantWebsite = () => {
  // State management for modal and customizations
  const [selectedItem, setSelectedItem] = useState(null);
  const [customizations, setCustomizations] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  // Function to handle customization changes
  const handleCustomizationChange = (category, value) => {
    if (category === 'veggies') {
      // Veggies allow multiple selections (checkboxes)
      const currentVeggies = customizations.veggies || [];
      const updatedVeggies = currentVeggies.includes(value)
        ? currentVeggies.filter(v => v !== value)
        : [...currentVeggies, value];
      setCustomizations({ ...customizations, veggies: updatedVeggies });
    } else {
      // Other options are single selection (radio buttons)
      setCustomizations({ ...customizations, [category]: value });
    }
  };

  // Function to open the customization modal
  const openModal = (item) => {
    setSelectedItem(item);
    setCustomizations({});
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setCustomizations({});
  };

  // Function to calculate price with modifiers
  const calculatePrice = () => {
    if (!selectedItem) return 0;
    let price = selectedItem.basePrice;
    
    // MODIFY: Add custom price modifiers based on selections
    if (customizations.protein === "Shrimp" || customizations.protein === "Mixed Seafood") {
      price += 2;    // MODIFY: Change upcharge for premium proteins
    }
    if (customizations.protein === "Mixed") {
      price += 1.5;  // MODIFY: Change upcharge for mixed proteins
    }
    
    return price.toFixed(2);
  };

  // ============================================================================
  // SECTION 4: HERO/HEADER SECTION
  // ============================================================================
  // Top banner with logo, restaurant name, and tagline

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: '#f5f5f5',
      fontFamily: '"Crimson Pro", Georgia, serif'
    }}>
      {/* Header with restaurant name and logo */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        zIndex: 100,
        animation: 'slideDown 0.6s ease-out'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Logo emoji - MODIFY or replace with <img src="logo.png" /> */}
          <div style={{
            fontSize: '4rem',
            marginBottom: '-0.5rem'
          }}>🍜</div>
          
          {/* Restaurant name */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '300',
            letterSpacing: '0.05em',
            margin: 0,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%)',  // MODIFY: Gradient colors for name
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {RESTAURANT_INFO.name}
          </h1>
          
          {/* Tagline */}
          <p style={{
            fontSize: '1.1rem',
            color: '#aaa',  // MODIFY: Tagline text color
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            margin: 0,
            fontFamily: '"Inter", sans-serif',
            fontWeight: '300'
          }}>
            {RESTAURANT_INFO.tagline}
          </p>
        </div>
      </header>

      {/* ============================================================================
          SECTION 5: INFO BAR
          ============================================================================
          Address, hours, and phone number bar */}
      <div style={{
        background: 'rgba(255, 107, 107, 0.1)',  // MODIFY: Info bar background color
        borderBottom: '1px solid rgba(255, 107, 107, 0.2)',
        padding: '1rem 2rem',
        animation: 'fadeIn 0.8s ease-out 0.2s both'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          fontSize: '0.95rem',
          fontFamily: '"Inter", sans-serif'
        }}>
          {/* Clickable address - opens in user's map app */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#ff6b6b',  // MODIFY: Link color
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffd93d';  // MODIFY: Hover color
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ff6b6b';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <MapPin size={18} />
            <span>{RESTAURANT_INFO.address}</span>
          </a>
          
          {/* Operating hours */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ddd' }}>
            <Clock size={18} />
            <span>{RESTAURANT_INFO.hours}</span>
          </div>
          
          {/* Clickable phone number */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#ff6b6b',  // MODIFY: Phone link color
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffd93d';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ff6b6b';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Phone size={18} />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* ============================================================================
          SECTION 6: MENU SECTION
          ============================================================================
          Category tabs and menu items grid */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        {/* Category navigation tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          animation: 'fadeIn 1s ease-out 0.4s both'
        }}>
          {MENU_DATA.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              style={{
                padding: '0.75rem 2rem',
                background: activeCategory === index 
                  ? 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)'  // MODIFY: Active tab color
                  : 'rgba(255,255,255,0.05)',
                border: activeCategory === index 
                  ? 'none'
                  : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                color: activeCategory === index ? '#fff' : '#aaa',
                fontSize: '1rem',
                fontWeight: activeCategory === index ? '500' : '300',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                boxShadow: activeCategory === index 
                  ? '0 4px 15px rgba(255, 107, 107, 0.4)'
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu items grid - displays items from selected category */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          animation: 'fadeIn 1s ease-out 0.6s both'
        }}>
          {MENU_DATA.categories[activeCategory].items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',  // MODIFY: Card background
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.2)';  // MODIFY: Hover shadow color
                e.currentTarget.style.borderColor = 'rgba(255, 107, 107, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {/* Item image/emoji */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {item.image}
              </div>
              
              {/* Item name */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                marginBottom: '0.5rem',
                color: '#fff'
              }}>
                {item.name}
              </h3>
              
              {/* Item description */}
              <p style={{
                fontSize: '0.95rem',
                color: '#aaa',
                lineHeight: '1.6',
                marginBottom: '1rem',
                fontFamily: '"Inter", sans-serif'
              }}>
                {item.description}
              </p>
              
              {/* Item price */}
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#ff6b6b',  // MODIFY: Price color
                fontFamily: '"Inter", sans-serif'
              }}>
                ${item.basePrice.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ============================================================================
          SECTION 7: CUSTOMIZATION MODAL
          ============================================================================
          Popup that appears when clicking a menu item - DoorDash style */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',  // MODIFY: Modal backdrop color/opacity
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',  // MODIFY: Modal background
              borderRadius: '30px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              animation: 'zoomIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Close button (X) */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 107, 107, 0.3)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              <X size={20} color="#fff" />
            </button>

            <div style={{ padding: '3rem' }}>
              {/* Item header in modal */}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {selectedItem.image}
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '400',
                  marginBottom: '0.5rem',
                  color: '#fff'
                }}>
                  {selectedItem.name}
                </h2>
                <p style={{
                  fontSize: '1rem',
                  color: '#aaa',
                  lineHeight: '1.6',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  {selectedItem.description}
                </p>
              </div>

              {/* Customization options section */}
              {selectedItem.customizations && (
                <div style={{ marginTop: '2rem' }}>
                  {Object.entries(selectedItem.customizations).map(([category, options]) => (
                    <div key={category} style={{ marginBottom: '2rem' }}>
                      {/* Customization category label */}
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginBottom: '1rem',
                        color: '#ff6b6b',  // MODIFY: Category label color
                        textTransform: 'capitalize',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.05em'
                      }}>
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                        {category !== 'veggies' && ' *'}  {/* Required indicator */}
                      </h3>
                      
                      {/* Options grid */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: category === 'veggies' ? 'repeat(auto-fill, minmax(140px, 1fr))' : '1fr',
                        gap: '0.75rem'
                      }}>
                        {options.map((option) => {
                          const isSelected = category === 'veggies'
                            ? (customizations.veggies || []).includes(option)
                            : customizations[category] === option;

                          return (
                            <label
                              key={option}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '1rem',
                                background: isSelected 
                                  ? 'linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(255, 135, 135, 0.2) 100%)'  // MODIFY: Selected option background
                                  : 'rgba(255,255,255,0.05)',
                                border: isSelected 
                                  ? '2px solid #ff6b6b'  // MODIFY: Selected option border color
                                  : '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.95rem'
                              }}
                              onMouseEnter={(e) => {
                                if (!isSelected) {
                                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isSelected) {
                                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                }
                              }}
                            >
                              {/* Checkbox for veggies, radio for others */}
                              <input
                                type={category === 'veggies' ? 'checkbox' : 'radio'}
                                name={category}
                                value={option}
                                checked={isSelected}
                                onChange={() => handleCustomizationChange(category, option)}
                                style={{ marginRight: '0.75rem', cursor: 'pointer' }}
                              />
                              <span style={{ color: isSelected ? '#fff' : '#ddd' }}>
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add to Order button */}
              <button
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  marginTop: '2rem',
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)',  // MODIFY: Button color
                  border: 'none',
                  borderRadius: '15px',
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 107, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
                }}
              >
                Add to Order • ${calculatePrice()}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================================
          SECTION 8: FOOTER
          ============================================================================
          Bottom copyright section */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '3rem 2rem',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.3)',
        marginTop: '4rem'
      }}>
        <p style={{
          color: '#888',  // MODIFY: Footer text color
          fontSize: '0.9rem',
          fontFamily: '"Inter", sans-serif'
        }}>
          © 2026 {RESTAURANT_INFO.name}. All rights reserved.  {/* MODIFY: Update year as needed */}
        </p>
      </footer>

      {/* ============================================================================
          SECTION 9: ANIMATIONS & STYLES
          ============================================================================
          CSS animations and global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');
        
        /* Fade in animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Slide down animation (for header) */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Slide up animation (for menu items) */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Zoom in animation (for modal) */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Global reset */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          overflow-x: hidden;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          header > div {
            padding: 1.5rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          main {
            padding: 2rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RestaurantWebsite;
