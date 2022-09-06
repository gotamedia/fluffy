const classNames = (classes: Record<string, boolean>) => {
    let className = ''

    if (classes && typeof classes === 'object') {
        Object.entries(classes).forEach(([name, active]) => {
            if (name && name.length && active) {
                className = `${className} ${name}`
            }
        })
    }

    return className
}

export default classNames