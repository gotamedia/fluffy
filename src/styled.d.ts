import 'styled-components'

import type { FluffyTheme } from '@utils/theme'

declare module 'styled-components' {
    export interface DefaultTheme extends FluffyTheme {}
}