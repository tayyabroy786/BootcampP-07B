import React from 'react'
import "./App.css"
import DisplayComponent from "../DisplayComponent/DisplayComponent"
function App() {

  return (
    <div className="main_section">
      <div className="stopwatch">
        <DisplayComponent />
      </div>
    </div>
  )
}

export default App
