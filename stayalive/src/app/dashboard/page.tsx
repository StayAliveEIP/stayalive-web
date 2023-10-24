import React from 'react';
import Card from '../dashboard/Card';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="container">
            <h1>DASHBOARD</h1>
            <h2>Tout savoir sur votre activité</h2>

            <div className="cards">
                <Card 
                    title="Sauvetage"
                    description="Vous pouvez consulter à n’importe quel moment l’historique de vos sauvetages"
                    imageUrl="/path/to/sauvetage-image.jpg" 
                />
                <Card 
                    title="Défibrilateur"
                    description="Vous pouvez consulter à n’importe quel moment l’historique de vos signalements de défibrilateur"
                    imageUrl="/path/to/defibrilateur-image.jpg" 
                />
                <Card 
                    title="Succès"
                    description="Vous pouvez consulter à n’importe quel moment vos succès et ceux que vous n’avez pas encore débloqué"
                    imageUrl="/path/to/succes-image.jpg" 
                />
            </div>
        </div>
    );
}
