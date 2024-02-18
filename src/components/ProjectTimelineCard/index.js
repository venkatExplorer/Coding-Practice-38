// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props

  return (
    <div className="courseCard">
      <img className="p-img" src={item.imageUrl} alt="project" />
      <div className="header">
        <h1 className="h">{item.projectTitle}</h1>
        <div className="time">
          <AiFillCalendar />
          <p className="p">{item.duration}</p>
        </div>
      </div>
      <p className="d">{item.description}</p>
      <a className="link" target="blank" href={item.projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
