import { justYear } from  './dateUtils'


describe('date utils', () => {
  it('returns just the year portion of a date', () => {
    let fullDate = "2019-09-06";
    const justYearResult = justYear(fullDate);
    expect(justYearResult).toBe('2019');
  })
})