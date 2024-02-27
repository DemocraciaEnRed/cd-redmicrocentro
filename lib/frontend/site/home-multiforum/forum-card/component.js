import React from 'react'
import { Link } from 'react-router'
import urlBuilder from 'lib/backend/url-builder'

export default ({ forum }) => (
  <div className='forum-card'>
    <div
      className='forum-card-img'
      style={{ backgroundImage: `url(${forum.coverUrl})` }}>
    </div>
    <div className='forum-card-data'>
      <div className='forum-card-header'>
        <h3 className='forum-card-title'>{forum.title}</h3>
        { forum.extra && forum.extra.owner &&
          <div>
           <span className='forum-card-author'>Autor:</span>
           <span className='forum-card-author forum-card-name'>{forum.extra.owner}</span>
           </div>
        }
      </div>
      <div className='forum-card-body'>
        <p className='forum-card-description'>{forum.summary}</p>
      </div>
      <div className='forum-card-footer'>
        <Link to={urlBuilder.for('site.forum', { forum: forum.name })}>
          <button className='btn btn-primary btn-conoce' >
            Conocé más
          </button>
        </Link>
      </div>
    </div>
  </div>
)