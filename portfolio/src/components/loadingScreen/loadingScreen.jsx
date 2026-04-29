import { useState, useEffect } from 'react';
import './loadingScreen.css';

const bootLines = [
    'Initializing jameboyyyOS...',
    'Loading portfolio modules...',
    'Mounting /projects',
    'Mounting /skills',
    'Starting terminal service...',
    'Starting monitoring dashboard...',
    'System ready.'
]

const LoadingScreen = ({ onComplete }) => {
    const [lineIndex, setLineIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < bootLines.length - 1) {
            const timer = setTimeout(() => {
                setLineIndex((prev) => prev + 1)
            }, 450)

            return () => clearTimeout(timer)
        }
        const completeTimer = setTimeout(() => {
            onComplete() 
        }, 800)

        return () => clearTimeout(completeTimer)
    }, [lineIndex, onComplete])
    
    return (
        <section className="loadingScreen">
            <div className="loadingScreenContainer">
                <p className="bootLabel">jameboyyyOS v1.0</p>

                <div className="bootWindow">
                    {bootLines.slice(0, lineIndex + 1).map((line, index) => (
                        <p key={index} className="bootLine">
                            <span>[ OK ]</span> {line}
                        </p>
                    ))}
                </div>

                <div className="loadingBar">
                    <div className="loadingProgress"
                    style ={{
                        width: `${((lineIndex + 1) / bootLines.length) * 100}%`,
                    }}
                    />
                </div>
            </div>
        </section>

    );
}

export default LoadingScreen;
