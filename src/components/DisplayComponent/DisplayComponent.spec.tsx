import React from "react";
import { shallow } from "enzyme";
import DisplayComponent from "./DisplayComponent";
import TimerButtons from "../TimerButtons/TimerButtons";


describe("it should render the DisplayComponent", () => {
    const container = shallow(<DisplayComponent />)
    it("should render span", () => {
        expect(container.find("span").length).toEqual(4);
    });

    it("should render div", () => {
        expect(container.find("div").length).toEqual(3)
    })

    
    
})