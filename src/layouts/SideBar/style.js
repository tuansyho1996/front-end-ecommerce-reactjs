import styled from "styled-components";
import { SwipeableDrawer } from "@mui/material";

const Drawer = styled(SwipeableDrawer)`
z-index: 1000;
  
.MuiDrawer-paper {
  padding: 35px 27px;
  background: var(--widget);
  box-shadow: var(--shadow);
  color: var(--text);
  border: none;

  // iPhone XR
  @media screen and (min-width: 414px) {
    width: 374px;
  }
  .menu{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &_item{
      align-items: center;
      display: flex;
      height: 44px;
      cursor: pointer;
      border-radius: 6px;
      color: var(--header);
      font-size: 18px;
      font-weight: 700;
      padding: 0 18px 0 12px;

      &:hover, &focus,
      &.active{
        background-color: var(--body);
        border-color: var(--border);
        border: solid 1px ;
      }
    }

    
  }
`
export default Drawer