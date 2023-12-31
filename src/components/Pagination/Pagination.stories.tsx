import {
    useState,
    useCallback
} from 'react'

import Pagination from './index'

import {
    PaginationVariants,
    PaginationSizes
} from './types'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.PaginationProps> = (props) => {
    const [activePage, setActivePage] = useState(props.activePage || 1)

    const handleOnChange = useCallback((page: number) => {
        setActivePage(page)
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {`Aactive page: ${activePage}`}

            <Pagination
                {...props}
                activePage={activePage}
                onChange={handleOnChange}
            />
        </div>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/Pagination',
    component: Pagination,
    argTypes: {},
    args: {
        size: PaginationSizes.Normal,
        variant: PaginationVariants.Primary,
        disabled: false,
        activePage: 1,
        totalPages: 100,
        visiblePages: 10,
        showPreviousPageButton: true,
        showFirstPageButton: true,
        showSeparationIndicator: true,
        showLastPageButton: true,
        showNextPageButton: true
    }
} as Meta<typeof Pagination>