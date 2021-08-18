import Link from './Link'
import propTypes from '@styled-system/prop-types'

const EmailLink = ({
    email,
    label,
    ...rest
}) => (
    <Link {...rest} href={`mailto:${email}`}>
        {label}
    </Link>
)

export default EmailLink

EmailLink.defaultProps = {}

EmailLink.propTypes = {
    ...propTypes.typography,
    ...propTypes.color
}
