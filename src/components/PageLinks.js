import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink '

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <PageLink key={link.id} link={link} itemClass={itemClass}/>
          // <li key={link.id}>
          //   <a href={link.href} className={itemClass}>
          //     {link.text}
          //   </a>
          // </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
