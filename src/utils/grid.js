import {css} from '@emotion/core'
import  breakpoints  from './breakpoints';



const grid = () => css`
display:grid;
grid-template-columns:minmax(0,1fr) minmax(0.5rem,1rem) minmax(0px,1100px) minmax(0.5rem,1rem) minmax(0,1fr);
grid-template-areas:'. . content . .';

//
  // ───  LARGE ────────────────────────────────────────────────────────────────
  //

@media (${breakpoints.lg.min}) and (${breakpoints.lg.max}) {
grid-template-columns:minmax(0,1fr) minmax(0px,1.5rem) minmax(0px,1100px) minmax(0px,1.5rem) minmax(0,1fr);

      };
      
      
   //
  // ─── EXTRA LARGE ────────────────────────────────────────────────────────────────
  //
        @media (${breakpoints.xlg}) {
grid-template-columns:minmax(0,1fr) minmax(0px,1.5rem) minmax(0px,1100px) minmax(0px,1.5rem) minmax(0,1fr);

        }

`

export default grid;
