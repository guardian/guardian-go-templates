import React, { useState, useEffect } from 'react';
import { getScrollPercentage } from '../utils';
import './Back.css'

export default function Back() {
    const [percentage, setPercentage] = useState(0);
    let ticking = false;

    useEffect(() => {
        const scrollListener = document.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    setPercentage(getScrollPercentage());
                    ticking = false;
                });
    
                ticking = true;
            }
        });

        return () => {
            document.removeEventListener('scroll', scrollListener);
        }
    }, [percentage]);



    return (
        <div className={percentage > 80 ? "back complete" : "back"} onClick={() => { Android.close() }}>
            <svg viewbox="0 0 40 40">
                <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
        </div>
    );
}