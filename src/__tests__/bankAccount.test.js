import bankAccount from '../bankAccount';

describe('Bank account methods and properties', () => {

    beforeEach(() => {
        bankAccount.balance = 1000
    });

    test('Initial balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000)
    });

    test('depositMoney should correctly alter balance', () => {
        bankAccount.depositMoney(1000)
        expect(bankAccount.balance).toBe(2000)
    });

    test('withdraw functions correctly alters balance', () => {
        bankAccount.withdrawMoney(5000)
        expect(bankAccount.balance).toBe(-4000)
    });

})