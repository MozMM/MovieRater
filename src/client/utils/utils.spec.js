import { justYear } from  './stringUtils'
import { checkAndSplitMsg } from './stringUtils'


describe('string utils', () => {

  describe('date splitter' , () => {
    it('returns just the year portion of a date', () => {
      let fullDate = "2019-09-06";
      const justYearResult = justYear(fullDate);
      expect(justYearResult).toBe('2019');
    })
  });

  describe('checkAndSplit Search Error Message' , () => {
    it('if message is "Request failed with status code 422", tells user to enter a query', () => {
      let message = 'Request failed with status code 422';
      const splitMessage = checkAndSplitMsg(message);
      expect(splitMessage[0]).toBe('No Moovies. ');
      expect(splitMessage[1]).toBe(' Please provide ');
      expect(splitMessage[2]).toBe(' a search query!');
    });

    it('for any other message, tells user to try a different query', () => {
      let message = 'anthing else message';
      const splitMessage = checkAndSplitMsg(message);
      expect(splitMessage[0]).toBe('No Moovies. ');
      expect(splitMessage[1]).toBe(' Please try ');
      expect(splitMessage[2]).toBe(' a different query.');
    })
  });
});
