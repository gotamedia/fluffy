import type { DateDiffI18n, DateDiffUnitsI18n } from "@components/FormSystem/components/Validation/Form/DateDiff/i18nTypes"
import { DateDiffUnits } from "@components/FormSystem/components/Validation/Form/DateDiff/types"
import type * as FSTypes from "@components/FormSystem/types"
import type { FormDataValue } from "@components/FormSystem/types"

export const getFieldDate = (fieldName: string, formData: FSTypes.FormData) => {
    const value: FormDataValue = formData?.[fieldName]?.value
    return !value ? undefined : new Date(String(value))
}

const unitMap = new Map<DateDiffUnits, keyof DateDiffUnitsI18n>([
    [DateDiffUnits.Seconds, "seconds"],
    [DateDiffUnits.Minutes, "minutes"],
    [DateDiffUnits.Hours, "hours"],
    [DateDiffUnits.Days, "days"],
    [DateDiffUnits.Weeks, "weeks"],
    [DateDiffUnits.Years, "years"],
])

export const getUnitLabel = (
    propsI18n: DateDiffI18n = {},
    formI18n: DateDiffI18n = {},
    defaultI18n: DateDiffI18n,
    diff: number,
    diffUnit: DateDiffUnits
) => {
    if (!diffUnit || !unitMap.has(diffUnit)) {
        return ""
    }

    const unitKey = unitMap.get(diffUnit)
    const numberKey = diff === 1 ? "singular" : "plural"

    return !unitKey ? "" : String(
        propsI18n?.units?.[unitKey]?.[numberKey] ||
        formI18n?.units?.[unitKey]?.[numberKey] ||
        defaultI18n?.units?.[unitKey]?.[numberKey]
    )
}
