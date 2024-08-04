import React from 'react'
import { IconsContainer, ImageTech } from './styles'

import jsIcon from './svgs/js.svg'
import htmlIcon from './svgs/html.svg'
import cssIcon from './svgs/css.svg'
import playwrightIcon from './svgs/playwright.svg'
import laravelIcon from './svgs/laravel.svg'

const IconsStack = ({ iconTech = [], sizeIcon }) => {
  const renderImage = (nameImage) => {
    const images = {
      js: jsIcon,
      html: htmlIcon,
      css: cssIcon,
      playwright: playwrightIcon,
      laravel: laravelIcon
    }
    if (Array.isArray(nameImage)) {
      const icons = nameImage.map((tech, index) => {
        let icon = null
        if (images[tech]) {
          icon = images[tech]
        }
        return { icon, index }
      })
      return icons.map(({ key, icon, index }) => (
        icon == null ? <React.Fragment key={index} /> : <ImageTech size={sizeIcon} key={index} src={icon} alt={`Tech Icon ${index}`} />
      ))
    }
  }

  return (
    <IconsContainer>
      {renderImage(iconTech)}
    </IconsContainer>
  )
}

export default IconsStack
