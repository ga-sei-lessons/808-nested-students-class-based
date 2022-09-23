import React, { Component } from 'react'
import Score from './Score'

export default class Student extends Component {
    render() {
        // console.log(this.props)
        const scoreComponents = this.props.scores.map((element, i) => {
            return (
                <Score 
                    score={element.score}
                    date={element.date}
                    key={`banana---${i}`}
                />
            )
        })
        return (
            <div>
                <h1>{this.props.name}</h1>

                <p>{this.props.bio}</p>

                {scoreComponents}
            </div>
        )
    }
}