const components = {
    Button: {
        baseStyle: {
            borderRadius: 'sm',
            fontFamily: 'button'
        },
        defaultProps: {
            colorScheme: 'green',
            size: 'lg'
        }
    },
    Heading: {
        defaultProps: {
            as: "h2",
            variant: "h2"
        },
        variants: {
            h1: {
                fontSize: "4xl"
            },
            h2: {
                fontSize: "3xl"
            },
            h3: {
                fontSize: "2xl"
            },
            h4: {
                fontSize: "xl"
            },
            h5: {
                fontSize: "lg"
            },
            h6: {
                fontSize: "md"
            }
        }
    },
    Text: {
        baseStyle: {
            mb: 3
        }
    },
    Input: {
        baseStyle: {
            field: {
                fontFamily: 'input'
            }
        }
    },
    Select: {
        baseStyle: {
            field: {
                fontFamily: 'input'
            }
        }
    },
    Menu: {
        baseStyle: {
            borderRadius: 'sm',
            fontFamily: 'button'
        },
        defaultProps: {
            colorScheme: 'green',
            size: 'lg'
        }
    }
}

export default components