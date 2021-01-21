import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from './components/AlbumList'
import './style.css'

AlbumFeature.propTypes = {

}


function AlbumFeature( {props} ) {
  const albumList = [
    {
      id: 1,
      name: "'Tuesday' Nên Nghe?",
      thumnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/a/b/1/6ab126346deaa2d9fb61a6618c306742.jpg"
    },
    {
      id: 2,
      name: "Yêu Để Thành Người Xấu",
      thumnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/0/0/2/400280b231b627048aa7cbd1bb5dbba5.jpg"
    },
    {
      id: 3,
      name: "Sống Thật Còn Hơn Sống FAKE",
      thumnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/a/d/4/0ad428ea2f5ae3e91d9432e9f1870300.jpg"
    }
  ]
  return (
    <div className="album">
      <div className="container">
        <h2>UỐNG TRÀ NGHE NHẠC</h2>
        <AlbumList albumList={albumList} />
      </div>
    </div>
  )
}


export default AlbumFeature

