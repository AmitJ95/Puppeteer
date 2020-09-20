import Homepage from '../pages/Homepage';
import TopBar from '../pages/components/TopBar'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import jestConfig from '../jest.config';

import { username, password, timeout } from "./config";

describe('End-to-End', () => {
    let homepage;
    let topBar;
    let loginpage;
    let feedback;
    beforeAll(async () => {

        homepage = new Homepage();
        loginpage = new LoginPage();
        topBar = new TopBar();
        feedback = new FeedbackPage();
    })

    it('homepage should load', async () => {
        await homepage.visit();
        await homepage.isNavbarDisplayed();
    },timeout);

    it('should submit feedback', async () => {
        await homepage.clickFeedbackLink();
        await feedback.isFeedbackFormDisplayed();
        await feedback.submitFeedbackForm('Amit', 'blag@example.com', 'blag', 'Just' );
        //await homepage.isNavbarDisplayed();
    });

    
    it('should login into application', async () => {
        await homepage.visit();
        await topBar.isTopBarDisplayed();
        await topBar.clickSignInButton();
        await loginpage.isLoginPageDisplayed();
        await loginpage.login(username, password)
    },15000);






    // it('navbar should be displayed', async () => {
    //     await homepage.isNavbarDisplayed();
    //     await topbar.isTopBarDisplayed();
    // });

    // it('feedback should work', async() => {
    //    await feedback.visit();
    //    await feedback.isFeedbackFormDisplayed();
    //    await feedback.submitFeedbackForm('Amit', 'blag@example.com', 'blag', 'Just' );
    //    await feedback.wait(2000);
       
    // });

});






