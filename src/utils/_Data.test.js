import {_saveQuestion,  _saveQuestionAnswer} from './_DATA'

describe('An async unit test to verify that the saved question is returned ', () => {
    it('will return question object if successful', async() => {
       const mockQuestion = {optionOneText:"React", optionTwoText:"Vue" ,author:"Bob"}
  
       const result = await _saveQuestion(mockQuestion);
        expect(result.author).toEqual('Bob');
        expect(result.optionOne.text).toEqual("React");
        expect(result.optionTwo.text).toEqual("Vue");
        expect(result.id).toBeDefined();
        expect(result.timestamp).toBeDefined();
        expect(result.optionOne.text).toBeDefined();
        expect(result.optionOne.votes).toBeDefined();
        expect(result.optionTwo.text).toBeDefined();
        expect(result.optionTwo.votes).toBeDefined();
    });

    it('will return an error if unsuccessful', async() => {
        var invalidMockQuestion= {};
        await expect(_saveQuestion(invalidMockQuestion)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
})
