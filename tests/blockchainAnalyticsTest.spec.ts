import { test } from '../test-options'

test('Navigate to Blockchain Analyics then link an address hash to an account', async ({ pageManager }) => {

    await pageManager.onSideBar().goToBlockchainAnalytics()
    await pageManager.onBlockchainAnalytisc().clickOnFirstAddressHash()
    await pageManager.onBlockchainAnalytisc().clickOnLinkButton()
    await pageManager.onBlockchainAnalytisc().enterTheAccount()
    await pageManager.onBlockchainAnalytisc().clickOnConfirmButton()
})