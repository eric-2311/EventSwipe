import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component{
    constructor(props){
        super(props);

        this.convertDate = this.convertDate.bind(this);
        this.selectImage = this.selectImage.bind(this);
    }

    convertDate(date){
        const formatDate = new Date(date)
        return `${formatDate.toLocaleString('en-US')}`
    }

    selectImage(title){
        if (title === 'EDCLV'){
            return <img className= "event-pic" src={window.edclvURL} />
        } else if (title === 'Oktoberfest NYC'){
            return <img className="event-pic" src={window.oktoberfestURL} />
        } else if (title === 'Toy Drive'){
            return <img className="event-pic" src={window.toyURL} />
        } else if (title === 'Anime Con 2020'){
            return <img className="event-pic" src={window.animeURL} />
        } else if (title === 'Frozen On Ice'){
            return <img className="event-pic" src={window.frozenURL} />
        } else if (title === 'Central Park Picnic Day'){
            return <img className="event-pic" src={window.picnicURL} />
        } else if (title === 'Food Drive'){
            return <img className="event-pic" src={window.food} />
        } else if (title === 'Doggy Playdate NYC'){
            return <img className="event-pic" src={window.dogs} />
        } else if (title === 'A Taste of the Mediterranean'){
            return <img className="event-pic" src={window.med} />
        } else if (title === 'Portals'){
            return <img className="event-pic" src={window.portals} />
        } else if (title === 'Gallery Showing'){
            return <img className="event-pic" src={window.gallery} />
        } else if (title === 'Run For Fun!'){
            return <img className="event-pic" src={window.marathon} />
        }
    }

    render(){
        return (
            <li className="event-index-item">
                <div className="index-item-img">
                    {this.selectImage(this.props.title)}
                </div>
                <br/>
                <div className="index-item-container">
                <div className="event-date">
                    {this.convertDate(this.props.startDate)}
                </div>
                <br/>
                {/* {this.props.description} */}
                <Link to={`/events/${this.props.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                    {this.props.title}
                </Link>
                <br/>
                {/* $ {this.props.price} */}
                </div>
            </li>
        )
    }
}

export default EventIndexItem;