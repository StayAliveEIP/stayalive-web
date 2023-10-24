import React from 'react';
import Image from 'next/image';

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={imageUrl} alt={title} width={200} height={150} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Voir</button>
            <div className="icon">
                <p>Michael</p>
            </div>
        </div>
    );
}

export default Card;
