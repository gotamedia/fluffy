import {
    registerLocale,
    setDefaultLocale
} from 'react-datepicker'

import * as DateFNS from 'date-fns'

import * as locales from 'date-fns/locale'

const DateUtility = {
    ...DateFNS,
    locales: locales,
    registerLocale: registerLocale,
    setDefaultLocale: setDefaultLocale
}

export default DateUtility