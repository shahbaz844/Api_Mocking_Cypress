import { Timeout } from "../utils/enums"
import { IBasePage } from "./basePage.in";

export abstract class BasePage implements IBasePage {

    abstract waitForReadiness();

    getElement(element: any) {
        return cy.get(element, { timeout: Timeout.LONG });
    }

}