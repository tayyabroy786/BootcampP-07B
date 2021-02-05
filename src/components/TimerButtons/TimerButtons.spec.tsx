

import { shallow } from "enzyme";
import TimerButtons from "./TimerButtons"

describe("Should render the TimerButtons component", () => {
  const container = shallow(<TimerButtons />)
  it("should render the divs", () => {
    expect(container.find("div").length).toEqual(1)
  })
})
