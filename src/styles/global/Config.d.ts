import 'styled-components';
import { breakpoints } from '../../styles/theme/theme';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: typeof breakpoints;
    }
}