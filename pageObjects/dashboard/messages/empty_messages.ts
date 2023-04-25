import { Dashboard } from "../dashboard";

export class EmptyMessages extends Dashboard {

  private readonly emptyText = "[data-testid='page-empty-state-title']";
  private readonly description = "[data-testid='page-empty-state-description']";

  getEmptyText() {
    return this.getElement(this.emptyText);
  }

  getDescriptionText() {
    return this.getElement(this.description);
  }

}

export default new EmptyMessages()