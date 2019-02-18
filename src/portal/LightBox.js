import React from 'react';
import {
    LightBox as StyledLightBox,
    LightBoxImage as StyledLightBoxImage,
    LightBoxVideo as StyledLightBoxVideo
} from './../styled-components'

export default ({previewSRC, media_type, title}) => {
    return (
        <StyledLightBox>
            {title}
            {
                media_type === 'image' 
                ?   <StyledLightBoxImage imageSRC={previewSRC}/>
                :   <StyledLightBoxVideo 
                        allowFullScreen 
                        src="http://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~orig.mp4" 
                        type="video/mp4">
                    </StyledLightBoxVideo>
            }   
        </StyledLightBox>
    )
}