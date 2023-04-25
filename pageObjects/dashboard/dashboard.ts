import { LoginPage } from "../login/login_page";
import { SubHeader } from "./subHeader/subHeader.po";
import { NumbersList } from "./messages/numbersList.po";
import { MessagesThread } from "./messages/messagesThread.po";

export class Dashboard extends LoginPage {

  private readonly subHeaderContext = "section";
  private readonly numbersContext = "#threads";
  private readonly messagesThreadContext = "[class*=MessageListCore_container]";

  getSubHeader(): SubHeader {
    return new SubHeader(this.subHeaderContext);
  }

  getMessageNumbersList(): NumbersList {
    return new NumbersList(this.numbersContext);
  }

  getThreadMessages(): MessagesThread {
    return new MessagesThread(this.messagesThreadContext);
  }
}