// styled.d.ts
import 'styled-components';
import { ThemeType } from '../styles/theme.ts';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}