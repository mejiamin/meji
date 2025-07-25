import React from 'react'
import './Projects.css'

const projectItems = [
  {
    title: 'Мой первый сайт (пока не готов)',
    description: 'Описание: Создать сайт',
  }
]

const Projects = () => {
  return (
    <div id='projects' className='projects gradient__bg-top'>
      <div className="container section__margin">

        <h1 className="title gradient__text">Проекты</h1>

        <ul className='project-list'>
          {projectItems.map(({ title, description }) => (
            <li key={title}>
              <h2 className='title'>{title}</h2>
              <ul className='project-items'>
                <li>{description}</li>
              </ul>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Projects
