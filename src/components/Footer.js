import React from 'react'

const Footer = () => {
    return (
        <footer className="footer text-center text-white py-4">
            <div className="container">
                <p>
                    © {new Date().getFullYear()} Shahad Al-kazzaz | Alla
                    rättigheter förbehållna
                </p>

                <div className="social-icons d-flex justify-content-center mt-3">
                    <a
                        href="https://github.com/ShahadAlkazzaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-3"
                    >
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shahad-al-kazzaz-2085b8186/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-3"
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a
                        href="mailto:shahad.alqazzaz@yahoo.com"
                        className="text-white mx-3"
                    >
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>
                    <a href="tel:0720288625" className="text-white mx-3">
                        <i className="fas fa-phone fa-2x"></i>
                    </a>
                </div>
                <button
                    className="btn scroll-to-top"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                >
                    ↑
                </button>
            </div>
        </footer>
    )
}

export default Footer
