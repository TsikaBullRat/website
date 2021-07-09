import React from 'react';

export const Headline = props => {
    return (
        <div className="row headline_box">
            <div className="line"></div>
            <h2>{props.headline}</h2>
            <div className="line"></div>
        </div>
    )
}