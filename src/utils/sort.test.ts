// test a sort function
import { expect } from 'chai';

import { bogoSort, bubbleSort, sort } from './sort';

describe.only('sort', () => {
  it('should sort an array of numbers', async () => {
    const result = sort([4, 2, 3, 1]);
    expect(result).to.eql([1, 2, 3, 4]);
  });
  it('should bubble sort an array of numbers', async () => {
    const result = bubbleSort([4, 2, 3, 1]);
    expect(result).to.eql([1, 2, 3, 4]);
  });
  it('should bubble sort a sorted array of numbers', async () => {
    const result = bubbleSort([1, 2, 3, 4]);
    expect(result).to.eql([1, 2, 3, 4]);
  });
  it('should bogo sort an array of numbers', async () => {
    const result = bogoSort([4, 2, 3, 1]);
    expect(result).to.eql([1, 2, 3, 4]);
  });
});
