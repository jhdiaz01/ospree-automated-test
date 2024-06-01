import { Page } from '@playwright/test'
import { FormDirectoryPage } from '../pages/directoryPage'
import { NavigationPage } from '../pages/navigationPage'
import { FormTravelRulePage } from '../pages/travelRulePage'
import { SideBarPage } from '../pages/sideBarPage'
import { FormBlockchainAnalyticsPage } from '../pages/blockchainAnalyticsPage'


export class PageManager {
    private readonly page: Page
    private readonly directoryPage: FormDirectoryPage
    private readonly travelRulePage: FormTravelRulePage
    private readonly sideBarPage: SideBarPage
    private readonly navigationPage: NavigationPage
    private readonly blockchainAnalyticsPage: FormBlockchainAnalyticsPage

    constructor(page: Page) {
        this.page = page
        this.directoryPage = new FormDirectoryPage(this.page)
        this.travelRulePage = new FormTravelRulePage(this.page)
        this.sideBarPage = new SideBarPage(this.page)
        this.navigationPage = new NavigationPage(this.page)
        this.blockchainAnalyticsPage = new FormBlockchainAnalyticsPage(this.page)
    }

    onCreateAccountFormDirectory() {
        return this.directoryPage
    }

    onTransferFormTravelRule() {
        return this.travelRulePage
    }

    onBlockchainAnalytisc() {
        return this.blockchainAnalyticsPage
    }

    onSideBar() {
        return this.sideBarPage
    }

    onTheDirectorySection() {
        return this.navigationPage
    }

    onTheTravelRuleSection() {
        return this.navigationPage
    }

}