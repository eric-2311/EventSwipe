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
                <Link to={`/events/${this.props.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                    {this.props.title}
                </Link>
                <br/>
                {this.props.description}
                <br/>
                <div className="event-date">
                    {this.convertDate(this.props.startDate)} - {this.convertDate(this.props.endDate)}
                </div>
                $ {this.props.price}
                </div>
            </li>
        )
    }
}

export default EventIndexItem;