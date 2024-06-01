import { PageManager } from "../src/pageManager";
import { test } from '../test-options'

test('Create a Transfer transaction in Travel Rule', async ({ pageManager }) => {
    await pageManager.onSideBar().goToTravelRule()
    await pageManager.onTheTravelRuleSection().navigateToTransferFormOfTheTravelRule()
    await pageManager.onTransferFormTravelRule().enterAmount()
    await pageManager.onTransferFormTravelRule().selectAsset()
    await pageManager.onTransferFormTravelRule().clickContinue()


})