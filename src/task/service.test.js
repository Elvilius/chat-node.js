import { getList } from './service';

test('test', () => {
  expect(getList(1)).toEqual([1]);
});
