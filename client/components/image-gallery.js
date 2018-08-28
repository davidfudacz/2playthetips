import React from 'react'
import { connect } from 'react-redux'
import ReactImageGallery from 'react-image-gallery'
import { defaultBorder } from '../styles';



const ImageGallery = ({images}) => (
  <div style={defaultBorder}>
    <ReactImageGallery items={images} autoPlay={true} />
  </div>
)

const mapState = () => ({
  images: [
    {
      original: 'http://www.2playthetips.com/images/Riviera/DSC_0002.jpg',
      thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0002.jpg',
    },
    {
      original: 'http://www.2playthetips.com/images/Riviera/DSC_0005.jpg',
      thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0005.jpg'
    },
    {
      original: 'http://www.2playthetips.com/images/Riviera/DSC_0007.jpg',
      thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0007.jpg'
    },
    {
      original: 'http://www.2playthetips.com/images/Riviera/DSC_0010.jpg',
      thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0010.jpg'
    },
    {
      original: 'http://www.2playthetips.com/images/Riviera/DSC_0013.jpg',
      thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0013.jpg'
    }
  ]
})

export default connect(mapState, null)(ImageGallery)
