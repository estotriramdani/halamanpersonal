import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-item-wrapper">
          <div className="footer-item">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com">Email</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2>Contributor</h2>
            <ul>
              <li>
                <a href="https://estotriramdani.github.io">Esto Triramdani N</a>
              </li>
              <li>
                <a href="https://github.com/mazuhdi">M Agung Zuhdi </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2>Contributing</h2>
            <ul>
              <li>
                <a href="https://github.com/estotriramdani">
                  Click Here To Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bottom-section">
        <p>Copyright © 2021 HalamanPersonal.id</p>
      </div>
    </div>
  );
};

export default Footer;
