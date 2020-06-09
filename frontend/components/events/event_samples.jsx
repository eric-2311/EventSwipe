import React from 'react';
import EventIndexItem from '../events/event_index_item';

class EventSamples extends React.Component{
    constructor(props){
        super(props);

        // this.renderSamples = this.renderSamples.bind(this)
    }

    componentDidMount(){
        this.props.fetchEvents()
    }

    // renderSamples(){
    //     for(let i = 0; i < 6; i++){
    //         let events = this.props.events;
    //         return <EventIndexItem 
    //                 id={events[i].id}
    //                 title={events[i].title}
    //                 startDate={events[i].start_date}
    //                 endDate={events[i].end_date}/>
    //     }
    // }

    render(){
        return (
            <ul className="splash-samples">
                {this.props.events.map((event, i) =>{
                    return <EventIndexItem 
                            id={event.id}
                            key={i}
                            title={event.title}
                            startDate={event.start_date}
                            endDate={event.end_date}
                            price={event.price}/>
                })}
            </ul>
        )
    }
}

export default EventSamples;