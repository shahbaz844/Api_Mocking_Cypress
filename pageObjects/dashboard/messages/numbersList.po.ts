import { SubHeader } from "../subHeader/subHeader.po";
import { INumbersList } from "./numbersList.in";

export class NumbersList extends SubHeader implements INumbersList {

  private readonly messageNumberList = "li[class*=ThreadListGroup_item]";

  tapOnNumber(number: string): void {
    this.getElement(this.messageNumberList).contains(number).click();
  }

}