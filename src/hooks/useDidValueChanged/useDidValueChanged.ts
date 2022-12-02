import deepCompareEquals from '@utils/deepCompareEquals'
import usePreviousPersistent from '@hooks/usePreviousPersistent'
import * as Types from './types'

const useDidValueChanged: Types.UseDidValueChanged =  (
    value,
    isEqual = deepCompareEquals
) => {
    const prev = usePreviousPersistent(value)
    return !isEqual(prev, value)
}


export default useDidValueChanged
