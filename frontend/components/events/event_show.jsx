import React from 'react';

class EventShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvent();
    }

    render(){
        return <div>Show page for event</div>
    }
}

export default EventShow;