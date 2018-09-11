/**
 * @description Controller for the VueApp static resource.
 */
global with sharing class VueAppController {
    /**
     * @description Gets a list of sample Accounts.
     * @return A list of sample Accounts.
     */
    @RemoteAction
    global static List<Account> getAllAccounts() {
        return [SELECT Id, Name FROM Account ORDER BY CreatedDate DESC LIMIT 10];
    }
}
