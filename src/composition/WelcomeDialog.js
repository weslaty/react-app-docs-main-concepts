import React from 'react'
import FancyBorder from './FancyBorder'

export default function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Bienvenue
            </h1>
            <p className="Dialog-message">
                Merci de visiter notre vaisseau spatial ! 
            </p>
        </FancyBorder>
    )
}