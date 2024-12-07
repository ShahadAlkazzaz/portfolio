import React from 'react'
import Typewriter from 'typewriter-effect'

const AnimatedText = () => {
    return (
        <div
            style={{
                color: 'var(--white)',
                fontSize: '1.5rem',
                textAlign: 'center'
            }}
        >
            <Typewriter
                options={{
                    strings: [
                        'Frontend Developer',
                        'React Specialist',
                        'Webbutvecklare'
                    ],
                    autoStart: true,
                    loop: true
                }}
            />
        </div>
    )
}

export default AnimatedText
