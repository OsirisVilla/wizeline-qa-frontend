import { Selector, t } from 'testcafe';
import ItemPage from '../pages/item.page.js'


class ProductsPage {

    constructor() {
        this.appLogo = Selector('div.app_logo');
        this.lblProduct = Selector('div.product_label');
        this.lblQuantity = Selector('div.cart_quantity_label');
        this.lblDescription = Selector('div.cart_desc_label');
        this.listInventoryItems = Selector('div.inventory_item_name');
    }

    async isProductPageLoaded() {
        return await this.appLogo.exists && this.lblProduct.exists;
    }

    async isCartPageLoaded() {
        return await this.lblQuantity.exists && this.lblDescription.exists;
    }

    async addItemToCart(item) {
        var count = await this.listInventoryItems.count;

        for (var i = 0; i < count; i++) {
            var text = await this.listInventoryItems.nth(i).innerText;
            if (text == item) {
                await t.click(this.listInventoryItems.nth(i))
                break;
            }
        }

        await ItemPage.clickAddToCart();
    }

}

export default new ProductsPage();