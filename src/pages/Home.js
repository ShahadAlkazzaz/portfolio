import React from 'react'
import Timeline from '../components/Timeline'
const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <h1>Hej, jag heter Shahad Al-kazzaz</h1>
                <p>
                    Frontend-utvecklare som skapar moderna och användarvänliga
                    webbplatser.
                </p>
                <button className="btn-primary">Ladda CV</button>
            </section>

            {/* Översikts-sektion */}
            <section className="overview">
                <h2>Vad du hittar här</h2>
                <div className="overview-grid">
                    <div className="overview-item">
                        <div className="icon">👤</div>
                        <h3>Om mig</h3>
                        <ul>
                            <li>Lär känna min bakgrund.</li>
                            <li>Utforska mina färdigheter.</li>
                        </ul>
                        <a href="/about" className="btn-secondary">
                            Läs mer
                        </a>
                    </div>
                    <div className="overview-item">
                        <div className="icon">📂</div>
                        <h3>Projekt</h3>
                        <ul>
                            <li>Utforska mina senaste projekt.</li>
                            <li>Se detaljerade case studies.</li>
                        </ul>
                        <a href="/portfolio" className="btn-secondary">
                            Se projekt
                        </a>
                    </div>
                    <div className="overview-item">
                        <div className="icon">✉️</div>
                        <h3>Kontakt</h3>
                        <ul>
                            <li>Hör av dig för samarbete.</li>
                            <li>Få svar på dina frågor.</li>
                        </ul>
                        <a href="/contact" className="btn-secondary">
                            Kontakta mig
                        </a>
                    </div>
                </div>
            </section>
<Timeline/>
        </div>
    )
}

export default Home
