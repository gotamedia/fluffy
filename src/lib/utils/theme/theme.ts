import themeHelpers from './helpers'

import type { DefaultTheme } from 'styled-components'

//TODO: Fix a better theme since this one were copied from NXT!

const theme: DefaultTheme = {
    //      0  1  2  3   4   5   6   7   8   9  10  11  12
    space: [0, 2, 4, 8, 12, 16, 20, 22, 24, 32, 40, 48, 64],
    //           0   1   2   3   4   5   6   7   8   9  10  11  12, 13,  14
    fontSizes: [12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 68, 86, 124],
    //              0       1       2       3       4       5       6       7       8       9      10      11      12       13       14
    lineHeights: ["16px", "18px", "20px", "24px", "28px", "32px", "38px", "42px", "48px", "52px", "56px", "64px", "80px", "102px", "146px"],
    colors: {
        grey: [
            "#2e2a25", // 0
            "#55565a", // 1
            "#8a8a8d", // 2
            "#b3b2b1", // 3
            "#dadad8", // 4
            "#F5F5F5", // 5
            "#e9e9e8" //  6
        ],
        border: "rgba(218, 218, 216, .5)",
        white: "#FFFFFF",
        highlight: {
            yellow: {
                primary: "#FDC800",
                dark: "#A17500"
            },
            red: { primary: "#D7170F" }
        },
        link: "#0182C9",
        payment: "#2BAB68",
        socialMedia: {
            facebook: "#4267B2",
            twitter: "#1da1f2",
            linkedIn: "#0072B1"
        },
        error: "#db0000",
        alert: {
            error: {
                text: "#730E0E",
                background: "#FBEBED",
                border: "#F7D1D6"
            },
            info: {
                text: "#004085",
                background: "#EBF2F8",
                border: "#D1E2F0"
            }
        }
    },
    fonts: {
        generic: [
            // "Tiempos Text, Times New Roman", // 0
            // "Sanomat Sans Bold, Avenir, Verdana, Helvetica, sans-serif", // 1
            // "Sanomat Sans, Avenir, Verdana, Helvetica, sans-serif", // 2
            // "Sanomat Sans Light, Avenir, Verdana, Helvetica, sans-serif", // 3
            // "Sanomat Sans Text Bold, Avenir, Verdana, Helvetica, sans-serif", // 4
            // "Sanomat Sans Text, Avenir, Verdana, Helvetica, sans-serif", // 5
            // "Sanomat Extra Bold, Georgia, serif", // 6
            // "Sanomat Bold, Georgia, serif", // 7
            // "Sanomat, Georgia, serif", // 8
            // "Sanomat Light, Georgia, serif", // 9
            // "Helvetica, Arial, sans-serif", // 10
            // "HelveticaNeue", // 11
            // "HelveticaNeue-Bold" // 12
        ]
    },
    borders: {
        teaser: {
            package: {
                default: { "border-left-width": "4px", "border-right-width": "4px" },
                opinion: { "border-left-width": "4px", "border-right-width": "4px" }
            }
        }
    },
    breakpoints: ["735px", "1260px"],
    mediaQueries: {
        small: "@media screen and (max-width: 734.99px)",
        medium: "@media screen and (min-width: 735px) and (max-width: 1259.99px)"
    },
    boxShadows: [
        "0px 1px 3px rgba(0, 0, 0, 0.2)", // 0
        "0px 4px 6px rgba(0, 0, 0, 0.07)", // 1
        "-2px 1px 2px rgba(0, 0, 0, 0.08)", // 2
        "0px 2px 15px rgba(0, 0, 0, 0.2)", // 3
        "0px 2px 4px rgba(0, 0, 0, 0.5)" // 4
    ]
}

const getTheme = (): DefaultTheme => theme

export {
    theme,
    getTheme
}