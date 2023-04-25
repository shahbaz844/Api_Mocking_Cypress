import { Login } from "../../pageObjects/login/login.po";
import { LoginPage } from "../../pageObjects/login/login_page";
import { SubHeader } from "../../pageObjects/dashboard/subHeader/subHeader.po";
import { Dashboard } from "../../pageObjects/dashboard/dashboard";
import { LoginModal } from "../../pageObjects/dashboard/login_modal";
import { NumbersList } from "../../pageObjects/dashboard/messages/numbersList.po";
import { MessagesThread } from "../../pageObjects/dashboard/messages/messagesThread.po";
import { ApiMock } from "../../pageObjects/utils/api_mocking";
import EmptyMessages from "../../pageObjects/dashboard/messages/empty_messages";
import Constants from "../fixtures/constants";

let api: ApiMock;
let login: Login;
let dashboard: Dashboard;
let loginPage: LoginPage;
let loginModal: LoginModal;
let subHeader: SubHeader;
let messageNumbers: NumbersList;
let messageThread: MessagesThread;

describe('verify messages time', function () {

  loginPage = new LoginPage();
  dashboard = new Dashboard();
  loginModal = new LoginModal();
  api = new ApiMock();
  login = loginPage.getLogin();
  subHeader = dashboard.getSubHeader();
  messageNumbers = dashboard.getMessageNumbersList();
  messageThread = dashboard.getThreadMessages();

  before(() => {
    cy.visit(Cypress.env("BASE_URL"));
    login.login();
  });

  it('verify messages time', function () {

    api.interceptResponse();
    cy.log("Intercept request to mock API response");

    loginModal.disconnectDevice();
    subHeader.tapOnMessages();
    cy.log("User taps on messages tab successfully");

    cy.wait("@mockedResponse");
    EmptyMessages.getEmptyText().should("contain",Constants.emptyText);
    EmptyMessages.getDescriptionText().should("contain", Constants.description);
    cy.log("Empty messages notification verified");

  });
});