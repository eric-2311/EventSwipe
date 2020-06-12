import React from 'react';

class Thanks extends React.Component{
    render(){
        return (
            <div className="thanks">
                <div 
                    className="confirm-thanks">Swipe confirmed! Thank you for choosing <p className="thanks-e">Eventswipe!</p>
                    <div className="thanks-btn-container">
                        <button className="thanks-btn" onClick={() => this.props.closeModal()}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thanks