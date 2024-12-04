import { useState, useEffect } from 'react';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This effect will run when the menu is toggled
  useEffect(() => {
    if (isMenuOpen) {
      // Disable body scroll when menu is open
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      // Enable body scroll when menu is closed
      document.body.style.position = "static";
      document.body.style.overflow = "visible";
      document.body.style.left = "0";
      document.body.style.right = "0";
    }

    // Cleanup effect when the component unmounts or state changes
    return () => {
      document.body.style.position = "static";
      document.body.style.overflow = "visible";
      document.body.style.left = "0";
      document.body.style.right = "0";
    };
  }, [isMenuOpen]); // This effect will run every time isMenuOpen changes

  // Toggle the menu when hamburger is clicked
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {/* You can replace this with your hamburger icon or CSS */}
        <span>☰</span>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;