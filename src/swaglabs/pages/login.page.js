import { Selector, t } from 'testcafe';

class LoginPage {

    constructor() {
        this.loginLogo = Selector('div.login_logo');
        this.botLogo = Selector('div.bot_column');
        this.txtUserName = Selector('input#user-name');
        this.txtPassword = Selector('input#password');
        this.btnLogin = Selector('input.btn_action');
        this.errorMessage1 = Selector('div > form > h3');
    }

    async isLoginPageLoaded() {
        return await this.loginLogo.exists && this.botLogo.exists;
    }


    async performLogin(userName, password) {
        await t.typeText(this.txtUserName, userName)
            .typeText(this.txtPassword, password)
            .click(this.btnLogin)
    };

    async errorMessage(){
        return await this.errorMessage1.innerText
    }

}

export default new LoginPage(); 