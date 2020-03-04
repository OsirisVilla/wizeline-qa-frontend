import { Selector, t } from 'testcafe';

class ItemPage {

    constructor() {
        this.btnAddToCart = Selector('button.btn_inventory');
        this.btnBack = Selector('button.inventory_details_back_button');
    }

    async clickAddToCart() {
        await t.click(this.btnAddToCart);
    }

    async clickBackButton(){
        await t.click(this.btnBack);
    }
}

export default new ItemPage();