import React from 'react';
// import Background from '../../../app/assets/images/backround';

class EventShow extends React.Component{
    constructor(props){
        super(props);

        this.selectImage = this.selectImage.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.fetchEvent(this.props.match.params.eventId);
        this.props.fetchEvents();
    }

    selectImage(title){
        if (title === 'EDCLV'){
            return <img className= "event-show-pic" src={window.edclvURL} />
        } else if (title === 'Oktoberfest NYC'){
            return <img className="event-show-pic" src={window.oktoberfestURL} />
        } else if (title === 'Toy Drive'){
            return <img className="event-show-pic" src={window.toyURL} />
        } else if (title === 'Anime Con 2020'){
            return <img className="event-show-pic" src={window.animeURL} />
        } else if (title === 'Frozen On Ice'){
            return <img className="event-show-pic" src={window.frozenURL} />
        } else if (title === 'Central Park Picnic Day'){
            return <img className="event-show-pic" src={window.picnicURL} />
        } else if (title === 'Food Drive'){
            return <img className="event-show-pic" src={window.food} />
        } else if (title === 'Doggy Playdate NYC'){
            return <img className="event-show-pic" src={window.dogs} />
        } else if (title === 'A Taste of the Mediterranean'){
            return <img className="event-show-pic" src={window.med} />
        } else if (title === 'Portals'){
            return <img className="event-show-pic" src={window.portals} />
        } else if (title === 'Gallery Showing'){
            return <img className="event-show-pic" src={window.gallery} />
        } else if (title === 'Run For Fun!'){
            return <img className="event-show-pic" src={window.marathon} />
        }
    }

    render(){
        // debugger

        if (!this.props.event){
            return null;
        }

        return (
            <div className="show-container">
                <div className="show-back-container">
                    <img src={window.backround} className="show-background" />
                </div>
                <div className="show-content">
                    <div className="event-show-pic-container">
                        {this.selectImage(this.props.event.title)}
                    </div>
                    <div className="show-info">
                        <div className="show-title">
                            {this.props.event.title}
                        </div>
                       
                        {/* {this.props.event.start_date}
                        {this.props.event.end_date} */}
                        {this.props.event.price}
                    </div>
                </div>
                 <div className="show-description">
                    {this.props.event.description}
                </div>
            </div>
        )
    }
}

export default EventShow;