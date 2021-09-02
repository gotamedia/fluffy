import useImengine from '../hooks/useImengine'
import { Flex } from '../layout'
import { Image } from '../media'
import Text from '../typography/Text'

const Author = ({
    name,
    imageUrl,
    imageAlt,
    children,
    imageSize = 100,
    ...rest
}) => {
    const { url } = useImengine(imageUrl, { width: imageSize, height: imageSize })

    return (
        <Flex>
            {
                url && (
                    <Image
                        src={url}
                        borderRadius={"full"}
                        boxSize={imageSize}
                        alt={imageAlt || `Bild på ${name} som har skapat sidinnehållet`}
                        {...rest}
                    />
                )
            }

            {name && (
                <Text
                    ml={3}
                    fontWeight="bold"
                >{name}</Text>
            )}

            <Flex>{children}</Flex>
        </Flex>
    )
}

export default Author