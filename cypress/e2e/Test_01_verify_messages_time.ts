import { Login } from "../../pageObjects/login/login.po";
import { LoginPage } from "../../pageObjects/login/login_page";
import { SubHeader } from "../../pageObjects/dashboard/subHeader/subHeader.po";
import { Dashboard } from "../../pageObjects/dashboard/dashboard";
import { LoginModal } from "../../pageObjects/dashboard/login_modal";
import { NumbersList } from "../../pageObjects/dashboard/messages/numbersList.po";
import { MessagesThread } from "../../pageObjects/dashboard/messages/messagesThread.po";
import Constants from "../fixtures/constants";

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
    login = loginPage.getLogin();
    subHeader = dashboard.getSubHeader();
    messageNumbers = dashboard.getMessageNumbersList();
    messageThread = dashboard.getThreadMessages();

    before(() => {
        cy.visit(Cypress.env("BASE_URL"));
        login.login();
    });

    it('verify messages time', function () {

        loginModal.disconnectDevice();
        subHeader.tapOnMessages();
        cy.log("User taps on messages tab successfully");

        messageNumbers.tapOnNumber(Constants.phone);
        cy.log("User taps on given number messages in all messages");

        messageThread.isTimeDifferenceValid();
        cy.log("Time verified for first and last message");
    });
});