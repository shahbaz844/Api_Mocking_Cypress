import { BasePage } from "../base/basePage";
import { Login } from "./login.po";
import Constants from "../../cypress/fixtures/constants";

export class LoginPage extends BasePage {

    private readonly loginContext = "form";

    getLogin(): Login {
        return new Login(this.loginContext)
    }

    waitForReadiness(element?: any) {
        cy.wait(Constants.mediumDelay)
    }

}
