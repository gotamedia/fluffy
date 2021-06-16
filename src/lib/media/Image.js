import { useState, useEffect } from 'react'
import { Image as ImgClient, Img as ImgServer } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'

const Image = props => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => setIsClient(true), [])

    return isClient ? <ImgClient {...props} /> : <ImgServer {...props} />
}

export default Image

Image.defaultProps = {}

Image.propTypes = {
    ...propTypes.space,
    ...propTypes.layout,
    ...propTypes.border,
    ...propTypes.position,
    ...propTypes.shadow
}
