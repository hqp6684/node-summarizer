

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

    sentncesIntersection(sentence1: string, sentence2: string) {
        // split the sentence into words
        let words1 = sentence1.split('\s');
        let words2 = sentence2.split('\s');

        if ()

    }


}