import React from 'react'
import PropTypes from 'prop-types'
import Album from '../Album'
import './style.css'

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired
}


function AlbumList( {albumList} ) {
  return (
    <ul className="album__list">
      {albumList.map(album => (
        <li className="album__item" key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  )
}

export default AlbumList
