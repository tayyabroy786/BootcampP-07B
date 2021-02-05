import React from 'react'

type Props = {
  buttonAction: () => void
  buttonValue: string
  buttonStatus: number
  stop: () => void
  reset: () => void
  resume: () => void
}

const TimerButtons = (props: Props) => {
  const { buttonAction } = props
  return (
    <div className="Timer_Button">
      {(props.buttonStatus === 0) ? <button onClick={buttonAction} className="start">{props.buttonValue}</button> : " "}

      {(props.buttonStatus === 1) ?
        <div>
          <button onClick={props.stop} className="stop">STOP</button>
          <button onClick={props.reset} className="reset">RESET</button>


        </div>
        : ""}

      {(props.buttonStatus === 2) ?
        <div>
          <button onClick={props.resume} className="resume">RESUME</button>

          <button onClick={props.reset} className="reset">RESET</button>
        </div>
        : " "}
    </div>
  )
}

export default TimerButtons
