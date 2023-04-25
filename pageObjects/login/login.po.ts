import { BaseComponent } from "../base/baseComponent";
import { ILogin } from "./login.in";
import Constants from "../../cypress/fixtures/constants";


export class Login extends BaseComponent implements ILogin {

    private readonly username = "[data-testid='email']";
    private readonly password = "[data-testid='password']";
    private readonly submitButton = "[type='submit']";

    fillUsername(text: string): void {
        this.getElement(this.username).type(text);
    }

    fillPassword(text: string): void {
        this.getElement(this.password).type(text);
    }

    submit(): void {
        this.clickOnElement(this.submitButton);
    }

    login(email: string = Cypress.env("USERNAME"),
          password: string = Cypress.env("PASSWORD")): void {
        this.fillUsername(email);
        this.fillPassword(password);
        this.waitForCaptcha();
        this.submit();
    }

    waitForCaptcha(){
        cy.wait(Constants.longDelay)
    }

}
