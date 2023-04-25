import { Dashboard } from "./dashboard";

export class LoginModal extends Dashboard {

  private readonly disconnectButton = "[data-testid='button']";

  disconnectDevice(): void {
    this.waitForReadiness();
    cy.get("body").then(($body) => {
      if ($body.find(this.disconnectButton).length > 0) {
        this.getElement(this.disconnectButton).first().click();
      }
    });
  }
}