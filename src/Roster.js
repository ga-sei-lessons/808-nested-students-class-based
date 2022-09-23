import React, { Component } from 'react'
import Student from './Student'

export default class Roster extends Component {
    render() {
        // console.log(this.props)

        const studentsComponents = this.props.students.map((student, i) => {
            return (
                <Student 
                    name={student.name}
                    bio={student.bio}
                    scores={student.scores}
                    key={`student-${i}`}
                />
            )
        })

        return (    
            <div>
                {studentsComponents}
            </div>
        )
    }
}