import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center text-white py-4">
      <div className="container">
        <p>© {new Date().getFullYear()} Shahad Al-kazzaz | Alla rättigheter förbehållna</p>
        <div className="social-icons d-flex justify-content-center mt-3">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-white mx-3"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
        <button
          className="btn scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
