import { useToast } from '@chakra-ui/react'

const useNotification = () => {
    const toast = useToast()

    return ({
        ...rest
    }) => toast({
        status: 'success',
        isClosable: true,
        ...rest
    })
}

// render: () => {
//     return (
//         <Box bg="gray.300" p={4}>
//             <Text>{title}</Text>
//             <Text>{description}</Text>
//         </Box>
//     )
// }

export default useNotification