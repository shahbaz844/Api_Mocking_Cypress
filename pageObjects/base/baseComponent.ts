import Constants from "../../cypress/fixtures/constants";
import { Component } from "./component.in";
import { Timeout } from "../utils/enums";

export class BaseComponent implements Component {

    private searchContext: string;

    constructor(searchContext) {
        this.searchContext = searchContext;
    }

    getElement(selector:string) {
        return cy.get(this.searchContext, {timeout:Timeout.LONG}).find(selector);
    }

    clickOnElement(selector: string) {
        this.getElement(selector).click({force:true});
    }

    waitForReadiness() {
        cy.wait(Constants.shortDelay);
    }

}