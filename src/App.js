import React, { useState } from 'react';
import { X, MapPin, Clock, Phone } from 'lucide-react';

// ============================================================================
// SECTION 1: RESTAURANT INFORMATION
// ============================================================================
// MODIFY ALL VALUES BELOW to match your restaurant's details

const RESTAURANT_INFO = {
  name: "Leung Noodle",
  tagline: "Authentic Vietnamese Noodles",
  squareUrl: "https://leung-noodle.square.site",
  locations: [
    {
      name: "Senter Road Location",  // MODIFY: Name for location 1
      address: "2859 Senter Rd, San Jose, CA, 95111",
      phone: "(408) 705-9848",
      hours: "Mon-Sun: 10:00 AM - 9:00 PM"
    },
    {
      name: "Silver Creek Location",  // MODIFY: Name for location 2
      address: "3005 Silver Creek Rd Ste #130, San Jose, CA, 95121",  // MODIFY: Address for location 2
      phone: "(408) 622-8352",  // MODIFY: Phone for location 2
      hours: "Mon-Sun: 10:00 AM - 9:00 PM"  // MODIFY: Hours for location 2
    }
  ],
  // Restaurant storefront images
  galleryImages: [
    "/images/gallery/senter.jpg",         // Senter Road location
    "/images/gallery/silver-creek.jpg"    // Silver Creek location
  ]
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
      name: "Signature Noodles",
      items: [
        {
          id: 1,
          name: "Nam Vang",
          description: "Sliced pork, grounded pork, liver, heart, quail egg, shrimp, squid, fried garlic, green onion, cilantro",
          basePrice: 15.95,
          image: "🍜"
        },
        {
          id: 2,
          name: "Dac Biet",
          description: "Saigon shrimp & pork (#1) with a bone marrow",
          basePrice: 16.95,
          image: "🍜"
        },
        {
          id: 3,
          name: "Do Bien",
          description: "Shrimp, squid, fried garlic, green onion, cilantro",
          basePrice: 16.95,
          image: "🍜"
        },
        {
          id: 4,
          name: "Trieu Chau",
          description: "Shrimp, squid, liver, heart, pork slices, meat ball, fried onion, green onion, cilantro, chives",
          basePrice: 16.95,
          image: "🍜"
        },
        {
          id: 5,
          name: "Suon Non",
          description: "Pork spareribs, carrot, fried onion, green onion, cilantro, chives",
          basePrice: 15.95,
          image: "🍜"
        },
        {
          id: 6,
          name: "Sui Cao",
          description: "Shrimp wonton, fried onion, green onion, cilantro, chives",
          basePrice: 16.50,
          image: "🍜"
        },
        {
          id: 7,
          name: "Hoanh Thanh",
          description: "Wonton, BBQ pork slices, fried onion, green onion, cilantro, chives",
          basePrice: 16.50,
          image: "🍜"
        },
        {
          id: 8,
          name: "Xa Xiu",
          description: "BBQ pork slices, fried onion, green onion, cilantro, chives",
          basePrice: 15.95,
          image: "🍜"
        },
        {
          id: 9,
          name: "Gio Heo",
          description: "Pork hock, pork slices, fried onion, green onion, cilantro, chives",
          basePrice: 15.95,
          image: "🍜"
        },
        {
          id: 10,
          name: "Ga Xe",
          description: "Shredded chicken, fried garlic, green onion, cilantro",
          basePrice: 15.95,
          image: "🍜"
        },
        {
          id: 11,
          name: "Bo Vien",
          description: "Beef meatballs, fried onion, green onion, cilantro, chives",
          basePrice: 15.95,
          image: "🍜"
        },
        {
          id: 12,
          name: "Hoanh Thanh La",
          description: "Wonton skin, mini meat ball, dried shrimp, grounded pork, fried onion, green onion, cilantro, chives",
          basePrice: 15.95,
          image: "🍜"
        }
        // TO ADD MORE ITEMS: Copy the block above and modify the values
      ]
    },

    // CATEGORY 2: Appetizers
    {
      name: "Appetizers",
      items: [
        {
          id: 13,
          name: "Xiu Mai (Meat Ball)",
          description: "Meat ball, cilantro, green onion, fried onion",
          basePrice: 6.25,
          image: "🍢"
        },
        {
          id: 14,
          name: "Xi Quach (4 pcs) (Bone Marrow Soup)",
          description: "Bone marrow (4), cilantro, fried garlic, green onion",
          basePrice: 13.75,
          image: "🍲"
        },
        {
          id: 15,
          name: "Xi Quach (1 pc) (Bone Marrow Soup)",
          description: "Bone marrow (1), cilantro, fried garlic, green onion",
          basePrice: 3.75,
          image: "🍲"
        },
        {
          id: 16,
          name: "Soup Bo Vien (Beef Meatball Soup)",
          description: "Beef meatball, cilantro, fried onion, green onion",
          basePrice: 6.75,
          image: "🍲"
        },
        {
          id: 17,
          name: "Ha Cao Chien (Fried Shrimp Dumplings)",
          description: "",
          basePrice: 7.75,
          image: "🥟"
        },
        {
          id: 18,
          name: "Sui Cao Chien (Fried Shrimp Wonton)",
          description: "",
          basePrice: 7.75,
          image: "🥟"
        },
        {
          id: 19,
          name: "Hoanh Thanh Chien (Fried Pork Wonton)",
          description: "",
          basePrice: 7.75,
          image: "🥟"
        },
        {
          id: 20,
          name: "Cha Gio Chien (Fried Egg Rolls)",
          description: "",
          basePrice: 7.75,
          image: "🥟"
        },
        {
          id: 21,
          name: "Banh Quay (Chinese Donut)",
          description: "",
          basePrice: 2.75,
          image: "🥟"
        }
        // TO ADD MORE APPETIZERS: Copy the block above and modify
      ]
    },
    {
      name: "Beverages",
      items: [
        {
          id: 22,
          name: "Cafe Sua Da (Vietnamese Iced Coffee)",
          description: "",
          basePrice: 5.50,
          image: "☕"
        },
        {
          id: 23,
          name: "Bong Cuc (Herbal Chrysanthemum Tea)",
          description: "",
          basePrice: 5.50,
          image: "🍵"
        },
        {
          id: 24,
          name: "Mia Lao (Herbal Sugarcane Juice)",
          description: "",
          basePrice: 5.50,
          image: "🥤"
        },
        {
          id: 25,
          name: "Rong Bien (Herbal Seaweed Drink)",
          description: "",
          basePrice: 5.50,
          image: "🧃"
        },
        {
          id: 26,
          name: "7-Up Tac Muoi (Salted Plum 7-Up)",
          description: "",
          basePrice: 5.50,
          image: "🥤"
        },
        {
          id: 27,
          name: "Tra Chanh (Lemon Iced Tea)",
          description: "",
          basePrice: 5.50,
          image: "🍹"
        },
        {
          id: 28,
          name: "Mang Cau Dam (Mashed Soursop Drink)",
          description: "",
          basePrice: 5.50,
          image: "🍹"
        },
        {
          id: 29,
          name: "Trai Dua (Fresh Coconut)",
          description: "",
          basePrice: 5.50,
          image: "🥥"
        },
        {
          id: 30,
          name: "Soda",
          description: "",
          basePrice: 2.50,
          image: "🥤"
        },
        {
          id: 31,
          name: "Tra Nong (Hot/Iced Tea)",
          description: "",
          basePrice: 1.25,
          image: "🍵"
        },
        {
          id: 32,
          name: "Tra Chanh Mat Ong",
          description: "Honey Lemon Tea",
          basePrice: 5.50,
          image: ""
        },
        {
          id: 33,
          name: "Chanh Day Mat Ong",
          description: "Passion Fruit Honey Drink",
          basePrice: 5.50,
          image: ""
        }
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
      background: 'linear-gradient(135deg, #F5F1E8 0%, #EDE8DC 100%)',
      color: '#2d2d2d',
      fontFamily: '"Nunito", sans-serif'
    }}>
      {/* Header with restaurant name and logo */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(245,241,232,0.95) 0%, rgba(250,247,242,0.9) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(210,195,170,0.3)',        
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
            marginBottom: '-0.5rem'
          }}>
            <img src="logo.png" alt="Leung Noodle Logo" style={{ height: '4rem' }} />
          </div>
          
          {/* Restaurant name */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            letterSpacing: '0.05em',
            margin: 0,
            textAlign: 'center',
            color: 'rgb(225, 39, 37)',
            textShadow: '2px 2px 0 #333, -2px -2px 0 #333, 2px -2px 0 #333, -2px 2px 0 #333, 1px 1px 0 #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333'
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
          Address, hours, and phone number bar - displays all locations */}
      <div style={{
        background: 'rgba(210, 180, 140, 0.15)',  // MODIFY: Info bar background color
        borderBottom: '1px solid rgba(210, 180, 140, 0.3)',
        padding: '1rem 2rem',
        animation: 'fadeIn 0.8s ease-out 0.2s both'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {/* Map through all locations and display each one */}
          {RESTAURANT_INFO.locations.map((location, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                fontSize: '0.95rem',
                fontFamily: '"Inter", sans-serif',
                paddingBottom: index < RESTAURANT_INFO.locations.length - 1 ? '1.5rem' : '0',
                borderBottom: index < RESTAURANT_INFO.locations.length - 1 ? '1px solid rgba(210, 180, 140, 0.2)' : 'none'
              }}
            >
              {/* Clickable address - opens in user's map app */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
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
                <span>{location.address}</span>
              </a>

              {/* Operating hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff6b6b' }}>
                <Clock size={18} />
                <span>{location.hours}</span>
              </div>

              {/* Clickable phone number */}
              <a
                href={`tel:${location.phone}`}
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
                <span>{location.phone}</span>
              </a>
            </div>
          ))}

          {/* Order Online button - centered below all locations */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '0.5rem'
          }}>
            <a
              href={RESTAURANT_INFO.squareUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.5rem 1.5rem',
                background: 'linear-gradient(135deg, #C49A6C 0%, #D4AF7A 100%)',
                borderRadius: '50px',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(139, 119, 101, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 119, 101, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 119, 101, 0.3)';
              }}
            >
              🛒 Order Online
            </a>
          </div>
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
                  ? 'linear-gradient(135deg, #C49A6C 0%, #D4AF7A 100%)'  // MODIFY: Active tab color
                  : 'rgba(196,154,108,0.25)',
                border: activeCategory === index 
                  ? 'none'
                  : '1px solid rgba(139,119,101,0.5)',
                borderRadius: '50px',
                color: activeCategory === index ? '#fff' : '#3d2817',
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
                  e.currentTarget.style.background = 'rgba(210,180,140,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(139,119,101,0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.background = 'rgba(210,195,170,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(139,119,101,0.3)';
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
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(245,241,232,0.6) 100%)',  // MODIFY: Card background
                border: '1px solid rgba(210,195,170,0.4)',
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
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 119, 101, 0.2)';  // MODIFY: Hover shadow color
                e.currentTarget.style.borderColor = 'rgba(139, 119, 101, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(210,195,170,0.4)';
              }}            >
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
                color: '#3d3d3d'
              }}>
                {item.name}
              </h3>
              
              {/* Item description */}
              <p style={{
                fontSize: '0.95rem',
                color: '#5d4e37',
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
                color: '#8B6F47',   // MODIFY: Price color
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
            background: 'rgba(0, 0, 0, 0.7)',  // MODIFY: Modal backdrop color/opacity            
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
              background: 'linear-gradient(135deg, #FAF7F2 0%, #F5F1E8 100%)',  // MODIFY: Modal background
              borderRadius: '30px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              border: '1px solid rgba(139,119,101,0.3)',
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
                e.currentTarget.style.background = 'rgba(139, 119, 101, 0.3)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(210,195,170,0.2)';
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
                  color: '#3d3d3d'
                }}>
                  {selectedItem.name}
                </h2>
                <p style={{
                  fontSize: '1rem',
                  color: '#5d4e37',
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
                        color: '#8B6F47',  // MODIFY: Category label color
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
                                  ? 'linear-gradient(135deg, rgba(196, 154, 108, 0.3) 0%, rgba(212, 175, 122, 0.3) 100%)'  // MODIFY: Selected option background
                                  : 'rgba(245,241,232,0.5)',
                                border: isSelected 
                                  ? '2px solid #8B6F47'  // MODIFY: Selected option border color
                                  : '1px solid rgba(210,195,170,0.4)',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '0.95rem'
                              }}
                              onMouseEnter={(e) => {
                                if (!isSelected) {
                                  e.currentTarget.style.background = 'rgba(210,195,170,0.4)';
                                  e.currentTarget.style.borderColor = 'rgba(139,119,101,0.5)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isSelected) {
                                  e.currentTarget.style.background = 'rgba(245,241,232,0.5)';
                                  e.currentTarget.style.borderColor = 'rgba(210,195,170,0.4)';
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
                              <span style={{ color: isSelected ? '#3d3d3d' : '#5d4e37' }}>
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
              <a
                href={RESTAURANT_INFO.squareUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  marginTop: '2rem',
                  background: 'linear-gradient(135deg, #C49A6C 0%, #D4AF7A 100%)',
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
                  boxShadow: '0 10px 30px rgba(139, 119, 101, 0.3)',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 119, 101, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 119, 101, 0.3)';
                }}              
              >
                Order on Square
              </a>            </div>
          </div>
        </div>
      )}

      {/* ============================================================================
          SECTION 8: PHOTO GALLERY
          ============================================================================
          Restaurant images section */}
      <section style={{
        maxWidth: '1200px',
        margin: '4rem auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: '300',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#3d3d3d',
          letterSpacing: '0.05em'
        }}>
          Our Restaurant
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          animation: 'fadeIn 1s ease-out'
        }}>
          {RESTAURANT_INFO.galleryImages.map((imageUrl, index) => (
            <div
              key={index}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(139, 119, 101, 0.2)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 119, 101, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 119, 101, 0.2)';
              }}
            >
              <img
                src={imageUrl}
                alt={`${RESTAURANT_INFO.name} - Photo ${index + 1}`}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================================
          SECTION 9: FOOTER
          ============================================================================
          Bottom copyright section */}
      <footer style={{
        borderTop: '1px solid rgba(210,195,170,0.3)',
        padding: '3rem 2rem',
        textAlign: 'center',
        background: 'rgba(237,232,220,0.5)',
        marginTop: '4rem'
      }}>
        <p style={{
          color: '#8B7355',  // MODIFY: Footer text color
          fontSize: '0.9rem',
          fontFamily: '"Inter", sans-serif'
        }}>
          © 2026 {RESTAURANT_INFO.name}. All rights reserved.  {/* MODIFY: Update year as needed */}
        </p>
      </footer>

      {/* ============================================================================
          SECTION 10: ANIMATIONS & STYLES
          ============================================================================
          CSS animations and global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=Nunito:wght@300;400;500;600&display=swap');
        
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
