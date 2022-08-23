import { css } from 'styled-components'

const small = {
    wrapper: css`
        gap: 8px;
        height: 24px;
        border-radius: 12px;
        padding: 3px 8px;
    `,
    label: css`
        font-size: 12px;
    `,
    divider: css``,
    icon: css`
        width: 16px;
        height: 16px;
        margin: auto;
        min-width: unset;

        svg {
            height: 10px;
        }
    `
}

const normal = {
    wrapper: css`
        gap: 10px;
        height: 32px;
        border-radius: 16px;
        padding: 4px 14px;
    `,
    label: css`
        font-size: 14px;
    `,
    divider: css``,
    icon: css`
        width: 18px;
        height: 18px;
        margin: auto;
        min-width: unset;

        svg {
            height: 12px;
        }
    `
}

const big = {
    wrapper: css`
        gap: 12px;
        height: 40px;
        border-radius: 20px;
        padding: 4px 14px;
    `,
    label: css`
        font-size: 16px;
    `,
    divider: css`
        width: 2px;
    `,
    icon: css``
}

const sizes = {
    small,
    normal,
    big
}

export default sizes