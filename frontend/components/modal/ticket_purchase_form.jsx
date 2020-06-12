import React from 'react';

class TicketPurchaseForm extends React.Component{
    constructor(props){
        super(props);

        this.convertDate = this.convertDate.bind(this);
        this.selectImage = this.selectImage.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.fetchEvent(this.props.location.pathname.split("/")[2])
    }

    convertDate(date){
        const formatDate = new Date(date)
        return `${formatDate.toLocaleString('en-US')}`
    }

    selectImage(title){
        if (title === 'EDCLV'){
            return <img className= "ticket-show-pic" src={window.edclvURL} />
        } else if (title === 'Oktoberfest NYC'){
            return <img className="ticket-show-pic" src={window.oktoberfestURL} />
        } else if (title === 'Toy Drive'){
            return <img className="ticket-show-pic" src={window.toyURL} />
        } else if (title === 'Anime Con 2020'){
            return <img className="ticket-show-pic" src={window.animeURL} />
        } else if (title === 'Frozen On Ice'){
            return <img className="ticket-show-pic" src={window.frozenURL} />
        } else if (title === 'Central Park Picnic Day'){
            return <img className="ticket-show-pic" src={window.picnicURL} />
        } else if (title === 'Food Drive'){
            return <img className="ticket-show-pic" src={window.food} />
        } else if (title === 'Doggy Playdate NYC'){
            return <img className="ticket-show-pic" src={window.dogs} />
        } else if (title === 'A Taste of the Mediterranean'){
            return <img className="ticket-show-pic" src={window.med} />
        } else if (title === 'Portals'){
            return <img className="ticket-show-pic" src={window.portals} />
        } else if (title === 'Gallery Showing'){
            return <img className="ticket-show-pic" src={window.gallery} />
        } else if (title === 'Run For Fun!'){
            return <img className="ticket-show-pic" src={window.marathon} />
        }
    }

    render(){
        // debugger

        if(!this.props.event){
            return null;
        }

        return (
            <div className="ticket-form-container">
                <form>
                    <div className="ticket-form-header">
                        <h1 className="ticket-form-title">{this.props.event.title}</h1>
                        <p className="ticket-date">{this.convertDate(this.props.event.start_date)} - {this.convertDate(this.props.event.end_date)}</p>                       
                    </div>
                    <aside className="ticket-aside">
                       <div className="ticket-img-container">
                            {this.selectImage(this.props.event.title)}
                       </div>
                       {/* <div>
                           Register for this event?
                       </div> */}
                    </aside>
                    <div className="ticket-option">
                        <p className="ticket-text">Would you like to register for this event?
                        <br/>
                        <br/>
                        <label>Please select number of registrations
                            <select className="ticket-dropdown">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </label>
                        </p>
                         
                    </div>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <div className="ticket-btn-container">
                        <button onClick={() => this.props.openModal("confirm")}className="ticket-btn">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TicketPurchaseForm;