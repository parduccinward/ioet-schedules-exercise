const cli = require('../bin/cli');

describe('E2E test shared hours', () => {
    test('Example 1', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        cli.cli();
        expect(consoleSpy).toHaveBeenCalledWith('ASTRID-RENE: 2\n'+'ASTRID-ANDRES: 3\n'+'RENE-ANDRES: 2\n');
    }),
    test.skip('Example 2', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        cli.cli();
        expect(consoleSpy).toHaveBeenCalledWith('RENE-ASTRID: 3\n');
    })
})