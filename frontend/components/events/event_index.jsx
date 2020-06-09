import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchEvents()
    }

    render(){
        return (
            <div>
                <ul className="event-index-list">
                    {this.props.events.map((event, i) =>{
                        return <EventIndexItem
                                id={event.id}
                                key={i} 
                                title={event.title}
                                description={event.description}
                                startDate={event.start_date}
                                endDate={event.end_date}
                                price={event.price}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default EventIndex;