import { Selector, t } from 'testcafe';

class CheckoutPage {

    constructor() {
       this.txtFirstName = Selector('input#first-name');
       this.txtLastName = Selector('input#last-name');
       this.txtPostalCode = Selector('input#postal-code');
       this.btnContinue = Selector('input.cart_button');
    }

    async fillCheckoutInfo(firstName, lastName, postalCode){
        await t.typeText(this.txtFirstName, firstName)
            .typeText(this.txtLastName, lastName)
            .typeText(this.txtPostalCode, postalCode)
            .click(this.btnContinue);
    }

    async fillCheckoutInfoWithoutFirstName(lastName, postalCode){
        await t.typeText(this.txtLastName, lastName)
            .typeText(this.txtPostalCode, postalCode)
            .click(this.btnContinue);
    }

   
    
    
}

export default new CheckoutPage();