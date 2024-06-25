import { LinearProgress } from "@mui/material"
import { useEffect, useState } from "react";
import styled from "styled-components";



const LinearProgressPercent = (props) => {
  const [colorBar, setColorBar] = useState('')
  useEffect(() => {
    switch (props.label) {
      case 'electronics':
        setColorBar('!bg-sky-600')
        break;
      case 'fashion':
        setColorBar('!bg-red')
        break;
      case 'food':
        setColorBar('!bg-green')
        break;
      case 'services':
        setColorBar('!bg-yellow')
        break;
      case 'bg-accent':
        setColorBar('!bg-accent')
        break;
      case 'bg-red':
        setColorBar('!bg-red')
        break;
      case 'bg-green':
        setColorBar('!bg-green')
        break;
      case 'bg-yellow':
        setColorBar('!bg-yellow')
        break;
      default:
        setColorBar('!bg-white')
        break;
    }
  }, [])
  return (
    <LinearProgress
      classes={{
        bar: colorBar
      }}
      className="rounded-full"
      variant="determinate"
      value={props.value}
      sx={{
        height: '20px',
        backgroundColor: 'var(--input-border)'
      }}
    />
  )
}
export default LinearProgressPercent