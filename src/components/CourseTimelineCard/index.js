// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  console.log(item)

  return (
    <div className="courseCard">
      <div className="header">
        <h1 className="h">{item.courseTitle}</h1>
        <div className="time">
          <AiFillClockCircle />
          <p className="p">{item.duration}</p>
        </div>
      </div>
      <p className="d">{item.description}</p>
      <div className="names">
        {item.tagsList.map(each => (
          <p key={each.id} className="btn" type="button">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
