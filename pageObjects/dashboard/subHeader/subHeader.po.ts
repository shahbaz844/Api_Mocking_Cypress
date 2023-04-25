import { Login } from "../../login/login.po";
import { ISubHeader } from "./subHeader.in";

export class SubHeader extends Login implements ISubHeader {

  private readonly messagesTab = "span:contains('Messages')";

  tapOnMessages(): void {
    this.clickOnElement(this.messagesTab);
  }

}