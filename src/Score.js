import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return (
            <div>
                <p>Date: {this.props.date}</p>

                <p>Score: {this.props.score}</p>
            </div>
        )
    }
}