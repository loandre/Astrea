import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
  };

  const paragraphStyle = {
    fontSize: '11px',
    color: '#929292',
  };

  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>© copyright {currentYear} - Aurum Software - Versão 2.02</p>
    </footer>
  );
}


export default Footer;
