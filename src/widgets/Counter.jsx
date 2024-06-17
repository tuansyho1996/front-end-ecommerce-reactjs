import { useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import Trend from "./Trend"
const Counter = ({ number, size = '' }) => {
  const [countFinished, setCountFinished] = useState(false)
  return (
    <CountUp
      start={0}
      end={number}
      onEnd={() => setCountFinished(true)}
    >
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} active={!countFinished} delayedCall>
          <div>
            <span className={`${size}`} ref={countUpRef} />
          </div>
        </VisibilitySensor>
      )}
    </CountUp>
  )
}
export default Counter