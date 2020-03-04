import { Selector, t } from 'testcafe';

class CartPage {

    constructor() {
        this.listItemsInCart = Selector('div.inventory_item_name')
        this.btnCheckout = Selector('a.checkout_button')
    }

    async isItemInTheCart(item){

        var count = await this.listItemsInCart.count;

        for (var i = 0; i < count; i++) {
            var text = await this.listItemsInCart.nth(i).innerText;
            if(text == item){
                return await this.listItemsInCart.nth(i).exists;

            }
        }
    }

    async clickCheckoutButton(){
        await t.click(this.btnCheckout);
    }
    
}

export default new CartPage();