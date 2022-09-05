import type * as Types from "@components/FormSystem/types"
import { addDays, subDays } from "date-fns"

export const getDates = (
    formData: Types.FormData,
    fieldName: string,
    minFieldName?: string,
    minExclusive?: boolean,
    maxFieldName?: string,
    maxExclusive?: boolean
) => {
    let compareDate = fieldName && formData[fieldName]?.value
        ? new Date(String(formData[fieldName]?.value))
        : undefined
    let minDate = minFieldName && formData[minFieldName]?.value
        ? new Date(String(formData[minFieldName]?.value))
        : undefined
    let maxDate = maxFieldName && formData[maxFieldName]?.value
        ? new Date(String(formData[maxFieldName]?.value))
        : undefined

    minDate = minDate && minExclusive ? addDays(minDate, 1) : minDate
    maxDate = maxDate && maxExclusive ? subDays(maxDate, 1) : maxDate

    return {
        compareDate,
        maxDate,
        minDate
    }
}
