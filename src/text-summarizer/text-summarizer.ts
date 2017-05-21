

export class TextSummarizer {

    constructor() {

    }
    /**
     * 
     * @param content text
     */
    splitContentToParagraphs(content: string): string[] {
        let paragaphs = new Array<string>();
        // naive way. TODO improve  this
        paragaphs = content.split('\n\n');
        return paragaphs;
    }

    /**
     * 
     * @param content text
     * Split content into sentences 
     */
    splitContentToSentences(content: string): string[] {
        let sentences = new Array<string>();
        // naive way. TODO improve  this
        content = content.replace('\n', '.');
        sentences = content.split('.');
        return sentences;
    }

    sentencesIntersection(sentence1: string, sentence2: string) {
        let words1 = sentence1.split(spaceRegex);
        words1 = words1.filter((word) => {
            if (word) {
                return true;
            }
        })
        let words2 = sentence2.split(spaceRegex);


    }
    /**
     * 
     * @param sentence 
     * Break corpus into words/tokens
     */
    tokenizer(sentence: string): Array<string> {
        let result;

        // http://ccl.pku.edu.cn/doubtfire/NLP/Lexical_Analysis/Word_Tokenization/Tokenization.htm
        let tokenRegex = /(\w+)|(\$\d+\.\d+)|([^\w\s]+)/g;

        if (sentence.length > 0) {
            result = sentence.match(tokenRegex);
            // because string.Prototype.match can return null
            result ? result = result : result = new Array<string>();
        } else {
            result = new Array<string>();
        }

        return <Array<string>>result;
    }


}