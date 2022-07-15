const rewire = require('rewire');
const controller = rewire('../controller');
const init = controller.__get__('init');
// @ponicode
describe('init', () => {
  test('0', () => {
    let result = init();
    expect(result).toMatchSnapshot();
  });
});
