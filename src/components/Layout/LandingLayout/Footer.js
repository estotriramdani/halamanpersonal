import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-item-wrapper">
          <div className="footer-item">
            <h2>Tentang</h2>
            <p style={{ color: 'white' }}>
              HalamanPersonal adalah website untuk membuat halaman personal yang
              dapat dijadikan sebagai alat untuk personal branding.
            </p>
          </div>
          <div className="footer-item">
            <h2>Contribute</h2>
            <ul>
              <li>
                <a
                  href="https://halamanpersonal-image.my.id/links"
                  target="_blank"
                  rel="noreferrer">
                  Contributor
                </a>
              </li>
              <li>
                <a
                  href="https://halamanpersonal-image.my.id/links"
                  target="_blank"
                  rel="noreferrer">
                  Contributing
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2>Contact</h2>
            <ul>
              <li>
                <a
                  href="https://instagram.com/estotriramdani"
                  target="_blank"
                  rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:estolagi@gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bottom-section">
        <p>Copyright © 2021 HalamanPersonal</p>
      </div>
    </div>
  );
};

export default Footer;
