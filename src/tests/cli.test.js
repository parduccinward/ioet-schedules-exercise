import cli from '../bin/cli';

// /database/data.txt should have the example data to run this tests
describe('Integration test for working coincidences', () => {
    test.skip('Example 1', async () => {
        const consoleSpy = jest.spyOn(console, 'log');
        await cli();
        expect(consoleSpy).toHaveBeenCalledWith('RENE-ASTRID:2\n'+'RENE-ANDRES:2\n'+'ASTRID-ANDRES:3\n');
    }),
    test.skip('Example 2', async () => {
        const consoleSpy = jest.spyOn(console, 'log');
        await cli();
        expect(consoleSpy).toHaveBeenCalledWith('RENE-ASTRID:3\n');
    })
})