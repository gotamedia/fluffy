export interface DateDiffUnitI18n {
    singular: string,
    plural: string
}

export interface DateDiffUnitsI18n {
    seconds?: DateDiffUnitI18n
    minutes?: DateDiffUnitI18n
    hours?: DateDiffUnitI18n
    days?: DateDiffUnitI18n
    weeks?: DateDiffUnitI18n
    years?: DateDiffUnitI18n
}

export interface DateDiffI18n {
    max?: string
    min?: string
    units?: DateDiffUnitsI18n
}
