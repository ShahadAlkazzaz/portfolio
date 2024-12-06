import React from 'react'
import PortfolioNavbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <PortfolioNavbar />
            <main>
                <Home />
            </main>

            <Footer />
        </div>
    )
}

export default App
