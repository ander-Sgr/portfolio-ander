import React from 'react'
import {
  WorkExperience,
  ContainerInfoJob,
  ContainerDescriptionJob,
  NameCompany, DescriptionJob,
  DotTimeLine
} from './styles'

const TimeLineWork = ({ nameCompany, titleJob, location, dateStart, descriptionJob }) => {
  return (
    <WorkExperience>
      <ContainerInfoJob>
        <NameCompany>{titleJob}</NameCompany>
        <div>{nameCompany}</div>
        <div>{dateStart}</div>
      </ContainerInfoJob>
      <ContainerDescriptionJob>
        <DotTimeLine />
        <DescriptionJob>
          {descriptionJob}
        </DescriptionJob>
      </ContainerDescriptionJob>
    </WorkExperience>
  )
}

export default TimeLineWork
