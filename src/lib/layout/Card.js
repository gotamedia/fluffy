import { Flex as F, useStyleConfig } from '@chakra-ui/react'
import propTypes from '@styled-system/prop-types'
import { Heading } from '../typography'

const Card = ({ variant, children, ...cardProps }) => {
const styles = useStyleConfig("Card", { variant })

return (    
    <F
        __css={styles} 
        {...cardProps} 
    > 
        {children}
    </F>
)
}



export const CardTitle = ({ children, ...headingProps }) => (
    <Heading as={"h3"} {...headingProps}>{children}</Heading>
)

export default Card

Card.defaultProps = {}

Card.propTypes = {
    ...propTypes.layout,
    ...propTypes.color,
    ...propTypes.space,
    ...propTypes.shadow
}
