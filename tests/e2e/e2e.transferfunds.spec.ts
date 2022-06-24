import {test, expect} from '@playwright/test'

test.describe.parallel('Funds Transfer Test', ()=>{

    test('Successful Transfer Funds - 1', async({page})=>{

        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password','password')
        await page.click('.btn-primary')
        
        await page.goto('http://zero.webappsecurity.com/online-banking.html')
        await page.click('#transfer_funds_link')
        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '2')
        await page.type('#tf_amount', '1000')
        await page.type('#tf_description', 'Test Transaction')
        await page.click('.btn-primary')

        const header = await page.locator('h2.board-header')
        await expect(header).toContainText('Transfer Money & Make Payments - Verify')
        await page.click('#btn_submit')

        const successMessage = await page.locator('.alert-success')
        await expect(successMessage).toContainText('You successfully submitted your transaction.')

    })

    test('Successful Transfer Funds - 2', async({page})=>{

        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password','password')
        await page.click('.btn-primary')
        
        await page.goto('http://zero.webappsecurity.com/online-banking.html')
        await page.click('#transfer_funds_link')
        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '2')
        await page.type('#tf_amount', '1000')
        await page.type('#tf_description', 'Test Transaction')
        await page.click('.btn-primary')

        const header = await page.locator('h2.board-header')
        await expect(header).toContainText('Transfer Money & Make Payments - Verify')
        await page.click('#btn_submit')

        const successMessage = await page.locator('.alert-success')
        await expect(successMessage).toContainText('You successfully submitted your transaction.')

    })
})