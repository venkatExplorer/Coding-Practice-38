import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg">
      <h1 className="h1">
        MY JOURNEY OF
        <br /> CCBP 4.0
      </h1>

      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard key={each.id} item={each} />
          }
          return <ProjectTimelineCard key={each.id} item={each} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
