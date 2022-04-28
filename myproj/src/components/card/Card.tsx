

import './card.css';

type CardProps = {
    name: string;
    bio: string;
    contacts: string;
}
const Card: React.FC<CardProps> = (props) => (
    <div className='card'>
        <h2>{props.name}</h2>
        <p className='bio'>{props.bio}</p>
        <p className='contacts'>{props.contacts}</p>
    </div>
)

export default Card;
