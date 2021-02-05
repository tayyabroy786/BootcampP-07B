// import React from "react";
// import {shallow} from "enzyme" 
// import App from "./App"

// describe("App should render" , () => {


//     const container = shallow(<App/>);

//     it("should render a div" , () => {

//         expect(container.find("div").length).toEqual(2);
//     })

//     it("should render p", () => {
//         expect(container.find("p").length).toEqual(3);
//     })

//     it("should render span" , () => {
//         expect(container.find("span").length).toEqual(2);
//     })

// })

import React from "react";
import {shallow } from "enzyme";
import App from "../App/App";
import DisplayComponent from "../DisplayComponent/DisplayComponent";


describe("It should render App component" , () => {
    const container = shallow(<App/>)
    it("should render thee app component" , () => {
        expect(container.find("div").length).toEqual(3)
    });
    it("should render the matching element" , () => {
        expect(container.containsMatchingElement(<DisplayComponent/>)).toEqual(true)
    })

})