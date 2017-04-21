import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles

  return (
    <Card>
      <CardSection style={thumbnailContainerStyle}>

        <View>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>

        <View style={headerContentStyle} >
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>

      <CardSection>
        <Image
          source={{uri: image}}
          style={imageStyle}
        />
      </CardSection>
    </Card>
    )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {

  },
  TextContainerStyling: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default AlbumDetail
