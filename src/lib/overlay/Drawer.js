import React from 'react'
import {
    Drawer as D,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

const Drawer = ({
    size = "xs",
    position = "right",
    children,
    isOpen,
    onClose,
    finalFocusRef
}) => {
    return (
      <>
        <D
            size={size}
            isOpen={isOpen}
            placement={position}
            onClose={onClose}
            finalFocusRef={finalFocusRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                {children}
            </DrawerContent>
        </D>
      </>
    )
  }

  export default Drawer

  export {
      DrawerBody,
      DrawerHeader,
      DrawerFooter
  }
