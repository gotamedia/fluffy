import React, { useState } from 'react'
import Input, { InputGroup, InputRightElement } from './Input'
import Button from './Button'

const PasswordInput = ({
    placeholder,
    onChange,
    show = "Visa",
    hide = "Göm"
}) => {
    const [display, setDisplay] = useState(false)
    const handleClick = () => setDisplay(!display)

    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={display ? "text" : "password"}
          placeholder={placeholder}
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            { display ? hide : show }
          </Button>
        </InputRightElement>
      </InputGroup>
    )
}

export default PasswordInput