import { Selector, t } from 'testcafe';

class HeaderContainerPage {


    constructor() {
        this.btnHamburguer = Selector('div.bm-burger-button');
        this.lnkLogout = Selector('a#logout_sidebar_link');
        this.iconShoppingCart = Selector('div#shopping_cart_container');
    }

    async performLogout() {
        await t.click(this.btnHamburguer)
            .click(this.lnkLogout)
    }

    async goToShoppingCart() {
        await t.click(this.iconShoppingCart);
    }
}

export default new HeaderContainerPage();