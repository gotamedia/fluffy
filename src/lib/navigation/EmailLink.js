import React from 'react'
import Link from './Link'
import propTypes from '@styled-system/prop-types'

const EmailLink = ({
    email,
    label,
    ...rest
}) => email ? (
    <Link title="Email länk" {...rest} href={`mailto:${email}`}>
        {label}
    </Link>
) : null

export default EmailLink

EmailLink.defaultProps = {}

EmailLink.propTypes = {
    ...propTypes.typography,
    ...propTypes.color
}
