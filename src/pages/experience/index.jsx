import React from 'react'
import { ExperienceContainer, Ttile, StyledIconJobs } from './styles'
import TimeLineWork from '../../components/TimeLine'

const Experience = () => {
  return (
    <ExperienceContainer id='experience'>
      <Ttile>
        <StyledIconJobs />
        Experiencia Laboral
      </Ttile>
      <TimeLineWork
        titleJob='Soporte IT N2'
        nameCompany='i3 e Resources IT'
        dateStart='Actualmente'
        descriptionJob='En I3e IT Resources, desempeño el rol de soporte IT,
        gestionando altas y bajas de usuarios en Active Directory (AD)
        y proporcionando asistencia técnica a los usuarios. Además,
        administro y resuelvo solicitudes a través de
        un sistema de tickets de ServiceDesk.'
      />
      <TimeLineWork
        titleJob='Becario - FrontEnd Dev'
        nameCompany='Travelport'
        dateStart='2022-2023'
        descriptionJob='Durante mi estancia en Travelport, adquirí conocimientos de
        JavaScript, Gherkin y Cucumber para realizar pruebas BDD
        y aplicar metodología ágil en los proyectos. Además, obtuve
        conocimientos en React y Node.js. Asimismo, pude trabajar con
        el framework Orion de Travelport y participar en el proyecto
        de traducción de los textos de los repositorios de la organización.'
      />
    </ExperienceContainer>
  )
}

export default Experience
