const PillVariants = {
    Success: "success" as const,
    Alert: "alert" as const,
    Warning: "warning" as const,
    Disabled: "disabled" as const,
}

const PillShapes = {
    Round: "round" as const,
    Rectangle: "rectangle" as const,
}

const PillSizes = {
    Small: "small" as const,
}

export { PillVariants, PillShapes, PillSizes }
