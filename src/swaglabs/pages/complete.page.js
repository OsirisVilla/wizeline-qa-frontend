import { Selector, t } from 'testcafe';

class CompletePage {

    constructor() {
     this.logoPonyExpress = Selector('div.pony_express')
    }

    async isCompleteCheckouPageLoaded(){
        return await this.logoPonyExpress.exists;
    }
    
}

export default new CompletePage();