import React from 'react';

class EventShow extends React.Component{
    constructor(props){
        super(props);
        // debugger
        this.selectImage = this.selectImage.bind(this);
        this.convertDate = this.convertDate.bind(this);
        this.eventMonth = this.eventMonth.bind(this);
        this.eventDay = this.eventDay.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.fetchEvent(this.props.match.params.eventId);
        this.props.fetchEvents();
    }

    convertDate(date){
        const formatDate = new Date(date)
        return `${formatDate.toLocaleString('en-US')}`
    }

    eventMonth(date){
        const formatDate = new Date(date);
        const eventDate = formatDate.getUTCMonth()

        if (eventDate === 0){
            return "JAN"
        } else if (eventDate === 1){
            return "FEB"
        } else if (eventDate === 2){
            return "MAR"
        } else if (eventDate === 3){
            return "APR"
        } else if (eventDate === 4){
            return "MAY"
        } else if (eventDate === 5){
            return "JUN"
        } else if (eventDate === 6){
            return "JUL"
        } else if (eventDate === 7){
            return "AUG"
        } else if (eventDate === 8){
            return "SEP"
        } else if (eventDate === 9){
            return "OCT"
        } else if (eventDate === 10){
            return "NOV"
        } else if (eventDate === 11){
            return "DEC"
        }
    }

    eventDay(date){
        const formatDate = new Date(date);
        let day = formatDate.getDate();

        if (day < 10){
            return `0${day}`
        }

        return day;
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
        // debugger
        return (
            <div className="show-container">
                <div className="show-back-container">
                    <img src={window.backround} className="show-background" />
                </div>
                <div className="show-content">
                    <div className="save-me">
                        {this.selectImage(this.props.event.title)}
                        <div className="show-description">
                            {this.props.event.description}
                        </div>
                    </div>
                    <div className="show-info">
                        <div className="show-date">
                            {this.eventMonth(this.props.event.start_date)}
                            <br/>
                            {this.eventDay(this.props.event.start_date)}
                        </div>
                        <div className="show-title">
                            {this.props.event.title}
                        </div>
                        
                        {/* {this.props.event.start_date}
                        {this.props.event.end_date} */}
                        <div className="show-price">
                            ${this.props.event.price}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default EventShow;