import * as FSTypes from "@components/FormSystem/types"

export const buildDatePickerValueProps = (value: FSTypes.FormDataValue) => {
    let selected: Date | undefined = undefined
    let startDate: Date | undefined = undefined
    let endDate: Date | undefined = undefined

    if (typeof value === "string" && value.length > 0) {
        if (value.includes("~")) {
            const dates: string[] = value.split("~")
            startDate = dates[0].length > 0 ? new Date(dates[0]) : undefined
            endDate = dates[1].length > 0 ? new Date(dates[1]) : undefined
            selected = startDate
        } else {
            selected = new Date(value)
        }
    }

    return {
        selected,
        startDate,
        endDate
    }
}

export const getDateValue = (date: Date | null | [Date | null, Date | null]) => {
    let value: string | undefined

    if (Array.isArray(date)) {
        if (
            date.length === 2 &&
            (
                (
                    date[0] instanceof Date ||
                    date[0] === undefined
                ) ||
                (
                    date[1] instanceof Date ||
                    date[1] === undefined
                )
            )
        ) {
            value = date.map((dateObj) => dateObj instanceof Date ? dateObj.toISOString() : "").join("~")
        } else if (typeof date[1] === "string") {
            value = date[1] as string
        }
    } else if (date instanceof Date) {
        value = date.toISOString()
    }

    return value
}
