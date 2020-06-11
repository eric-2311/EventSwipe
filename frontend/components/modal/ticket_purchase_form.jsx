import React from 'react';

class TicketPurchaseForm extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // debugger
        this.props.fetchEvent(this.props.location.pathname.split("/")[2])
    }

    convertDate(date){
        const formatDate = new Date(date)
        return `${formatDate.toLocaleString('en-US')}`
    }

    render(){
        // debugger

        if(!this.props.event){
            return null;
        }

        return (
            <div className="ticket-form-container">
                <form>
                    <h1 className="ticket-form-title">{this.props.event.title}</h1>

                </form>
            </div>
        )
    }
}

export default TicketPurchaseForm;