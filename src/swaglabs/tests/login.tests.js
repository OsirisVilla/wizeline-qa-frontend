import { t } from 'testcafe';
import LoginPage from '../pages/login.page.js'
import ProductsPage from '../pages/products.page.JS'
import HeaderContainerPage from '../pages/header_container.page.js'

var userData = require('../utils/data.json');

const BASE_URL = userData.Url.basePage;
const VALID_USER = userData.credentials.validUser;
const INVALID_USER = userData.credentials.invalidUser;
const PASSWORD = userData.credentials.password;
const ERROR_MESSAGE = userData.ErrorMessages.loginInvalidEmail;

fixture('Login Tests')
    .page(BASE_URL)
    .beforeEach(async t => {
        await t.maximizeWindow();
        await LoginPage.isLoginPageLoaded();
    });

    test.skip('Login with a valid user', async t =>{
        await LoginPage.performLogin(VALID_USER, PASSWORD)
        await t.expect(await ProductsPage.isProductPageLoaded()).ok();
    });

    test('Login with an invalid user', async t =>{
        await LoginPage.performLogin(INVALID_USER, PASSWORD)
        await t.expect(await LoginPage.errorMessage()).eql(ERROR_MESSAGE);
    });

    test.skip('Logout from product’s page', async t =>{
        await LoginPage.performLogin(VALID_USER, PASSWORD)
        await t.expect(await ProductsPage.isProductPageLoaded()).ok();
        await HeaderContainerPage.performLogout();
        await t.expect(await LoginPage.isLoginPageLoaded()).ok();
    });
