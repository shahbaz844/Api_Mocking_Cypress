import { NumbersList } from "./numbersList.po";
import { IMessageThread } from "./messagesThread.in";

export class MessagesThread extends NumbersList implements IMessageThread {

  private readonly lastMessageDay = "[class*=MessageListContent_date]:last";
  private readonly messageTime = "[class*=MessageListContentItem_time]";

  getFirstMessageTime(): void {
    this.getElement(this.messageTime).first().invoke("text").as("firstMessage");
  }

  getLastMessageTime(): void {
    this.getElement(this.messageTime).last().invoke("text").as("lastMessage")
  }

  isTimeDifferenceValid() {
    this.getFirstMessageTime();
    this.getLastMessageTime();
    cy.get("@firstMessage").then((text1)=>{
      cy.get("@lastMessage").then((text2)=>{
        let firstTime = String(text1).split(":");
        let secondTime = String(text2).split(":");
        let minutes = (Number(secondTime[0]) - Number(firstTime[0])) * 60;
        let seconds = Number(secondTime[1]) - Number(firstTime[1]);
        let timeInSeconds = minutes + (seconds);
        cy.log("Time difference between messages is: ", (timeInSeconds/60).toFixed(2));
        expect(timeInSeconds).to.be.greaterThan(60);
      })
    })
  }

}