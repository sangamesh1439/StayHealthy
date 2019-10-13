


import React, { useState } from 'react';
import { Text, ImageBackground, View, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Button, Icon } from 'native-base';
import { imageCarouselStyles } from './ImageCarousel.styles';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const ImageCarouselComponent = (props) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View style={{ height: 200 }}>
            <Carousel
                data={props.images}
                renderItem={() => {
                    let imageData = props.images[activeSlide];
                    return (
                        <ImageBackground
                            source={{ uri: imageData.uri }}
                            style={
                                imageCarouselStyles.imageBackground
                            }
                        >
                            <LinearGradient
                                colors={[colors.LIGHTBLACK, colors.TRANSPARENT]}
                                style={imageCarouselStyles.linearGradientStyle}>
                                <View style={{ flex: 1, backgroundColor: "transparent", justifyContent: "flex-end" }}>
                                    <Text style={imageCarouselStyles.recipeTypeDecription}>{imageData.name}</Text>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    )
                }}
                sliderWidth={Dimensions.get('screen').width}
                itemWidth={Dimensions.get('screen').width}
                style={{ backgroundColor: 'green' }}
                onSnapToItem={setActiveSlide}
            />

            <Pagination
                dotsLength={props.images.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    backgroundColor: 'transparent',
                    position: "absolute",
                    right: 0,
                    bottom: -20
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'white'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
            <View style={{ flex: 1, backgroundColor: "transparent", justifyContent: "flex-end" }}>

                <Text style={imageCarouselStyles.title}>{props.title}</Text>

            </View>
        </View>
    )
}

export const ImageCarousel = ImageCarouselComponent