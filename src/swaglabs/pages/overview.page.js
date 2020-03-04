import { Selector, t } from 'testcafe';

class OverviewPage {

    constructor() {
     this.subHeader = Selector('div.subheader')
     this.btnFinish = Selector('a.cart_button')
    }

    async getSubHeaderText(){
        return await this.subHeader.innerText;
    }

    async clickFinishButton(){
        await t.click(this.btnFinish);
    }
    
}

export default new OverviewPage();