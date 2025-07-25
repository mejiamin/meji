import React from 'react'
import { skillItems } from './skillItems'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills container section__margin'>

      <h1 className="title gradient__text">Навыки</h1>
      <ul className='skill-list'>
        {skillItems.map(({ title, items, percent }) => (

          <li key={title}>

            <div className='skill' >
              <h2 className='title gradient__text-1'>{title}</h2>

              <div className='skill-percents'>
                <div className="percents">
                  <div className="percent" style={{ width: `${percent}%` }}></div>
                </div>
                
                <span>{percent}%</span>
              </div>

            </div>


            <ul className='skill-items'>
              {items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>

          </li>

        ))}
      </ul>

    </div>
  )
}

export default Skills
