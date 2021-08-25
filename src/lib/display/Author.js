// import log from '../utils/log'
// import { cloneElement } from 'react'
// import useImage from '../hooks/useImage'
// import { EmailLink, Link } from '../navigation'
// import { Text } from '../typography'
// import { Flex, Center } from '../layout'
// import { Image } from '../media'

// const Author = ({
//     name,
//     imageUrl,
//     imageAlt,
//     children,
//     imageSize = 50,
//     ...rest
// }) => {
//     const { url } = useImage(imageUrl, { width: imageSize, height: imageSize })

//     const extendedChildren = children ? cloneElement(children, {name, ...children.props}) : children
//     const nameFallback = name ? name : children?.props?.name

//     if (!imageAlt && !extendedChildren?.props?.name && !name) {
//         log.warning('cannot create alt attribute without name property')
//         return null
//     }

//     return (
//         <Flex>
//             {
//                 url && (
//                     <Image
//                         src={url}
//                         borderRadius={"full"}
//                         boxSize={imageSize}
//                         alt={imageAlt || `Bild på ${nameFallback} som har skapat sidinnehållet`}
//                     />
//                 )
//             }

//             {extendedChildren || <AuthorMeta name={name} {...rest} />}
//         </Flex>
//     )
// }

// export default Author

// export const AuthorMeta = ({
//     name,
//     email,
//     twitter,
//     emailLabel,
//     ...rest
// }) => (
//     <Flex
//         flexDirection={"column"}
//         ml="3"
//         {...rest}
//     >
//         <Text
//             mt="auto"
//             mb="1"
//             fontWeight="bold"
//         >
//                 {name}
//         </Text>
//         <EmailLink
//             email={email}
//             label={emailLabel || email}
//             mb="auto"
//             ml={0}
//         />
//     </Flex>
// )