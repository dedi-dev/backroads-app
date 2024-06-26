import React from 'react'

import { socialLinks } from '../data';

const SocialLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
        {socialLinks.map((media) => {
          const { id, href, className } = media;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={itemClass}
              >
                <i className={className}></i>
              </a>
            </li>
          );
        })}
      </ul>
  )
}

export default SocialLinks