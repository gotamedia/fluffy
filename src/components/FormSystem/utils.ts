import type * as FSTypes from "@components/FormSystem/types"

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

export const getAgeFromSSN = (ssn: string) => {
    const regExp = /^(\d{4})(\d{2})(\d{2})/
    const matchResults = ssn.match(regExp)

    if (!matchResults?.[1] || !matchResults?.[2] || !matchResults?.[3]) {
        return undefined
    }

    const date = new Date(`${matchResults[1]}-${matchResults[2]}-${matchResults[3]}`)
    const diff = Date.now() - Number(date)
    const diffDate = new Date(diff)

    return Math.abs(diffDate.getUTCFullYear() - 1970);
}

export const containsLowerCase = (text: string) => {
    return Boolean(text.match(/[a-z]/gm))
}

export const containsUpperCase = (text: string) => {
    return Boolean(text.match(/[A-Z]/gm))
}

export const containsNumber = (text: string) => {
    return Boolean(text.match(/[0-9]/gm))
}

export const containsSpecialChars = (text: string) => {
    return Boolean(text.match(/[^a-zA-Z0-9]/gm))
}

export const containsGiven = (text: string, search: string[]) => {
    return search.some(searchItem => text.includes(searchItem));
}
