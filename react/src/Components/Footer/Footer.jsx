import React from "react";
import './Footer.css'

const footerBody = (
  <div className="footer__body">
    <div className="footer__body-name">
      <p>&copy; 2022 Resource Company LTD.</p>
    </div>
    <div className="footer-block">
      Powered by NEFEDOV_IT and Simeon_Ermolin
    </div>
  </div>
)

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {footerBody}
      </div>
    </footer>
  )
}
