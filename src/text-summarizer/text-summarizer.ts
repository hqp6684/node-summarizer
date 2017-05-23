import { getIntersection } from './array-intersection';

export class TextSummarizer {

    constructor() {

    }

    public getSummary(content: string) {

        let paragraphs = this.splitContentToParagraphs(content);

        // get best sentence from each paragaph
        let bestSentences = paragraphs.map(paragraph => {
            return this.getSentenceRank(paragraph)[0];
        })
        bestSentences.map(s => {
            console.log(s.self)
        })
        return bestSentences;
    }

    /**
     * 
     * @param content text
     */
    private splitContentToParagraphs(content: string): string[] {
        let paragaphs = new Array<string>();
        // naive way. TODO improve  this
        paragaphs = content.split('\n\n');

        return paragaphs;
    }

    /**
     * 
     * @param content text
     * Split content into sentences 
     * 
     */
    private splitContentToSentences(content: string): string[] {
        let sentences = new Array<string>();
        // naive way. TODO improve  this
        console.log(content);
        content = content.replace('\n', '.');
        sentences = content.split('.');
        console.log(sentences);
        // console.log('pa \n ' + content);
        // console.log('senetences \n');
        // console.log(sentences);

        //  https://github.com/philpl/node-tldr/blob/master/index.coffee
        //  This is a RegEx for Dates
        let dateRegex = new RegExp('((?:(?:[0-2]?\\d{1})|(?:[3][01]{1})))(?![\\d])(\\.)(\\s+)((?:[a-z][a-z]+))(\\s+)((?:(?:[1]{1}\\d{1}\\d{1}\\d{1})|(?:[2]{1}\\d{3})))(?![\\d])', 'i');

        // # This is a RegEx for Dates with Months
        let dateWithMonthRegex = new RegExp('((?:(?:[0-2]?\\d{1})|(?:[3][01]{1})))(?![\\d])(\\.)(\\s+)((?:Jan(?:uary)?|Feb(?:ruary)?|Feb(?:ruar)?|Mar(?:ch)?|Mär(?:z)?|Apr(?:il)?|May|Mai|Jun(?:e)?|Jun(?:i)?|Jul(?:y)?|Jul(?:i)?|Aug(?:ust)?|Sep(?:tember)?|Sept|Oct(?:ober)?|Okt(?:ober)?|Nov(?:ember)?|Dez(?:ember)?|Dec(?:ember)?))', 'i')

        // # This is a RegEx for abbreviations
        let abbreviationRegex = new RegExp('((Mr|Ms)(\\.))', 'i');

        // # This is a RegEx for dynamic abbreviation recognition
        let dynamicAbbreviationRegex = new RegExp('(([A-Z]\\.)([A-Z]\\.)+)', 'i');




        return sentences;
    }

    /**
     * 
     * @param sentence1 
     * @param sentence2 
     * @return array of the string
     * Get the intersection between 2 sentences
     */
    private getIntersectionAverage(sentence1: string, sentence2: string) {
        let intersection = new Array<string>();
        let words1 = this.tokenizer(sentence1);
        let words2 = this.tokenizer(sentence2);
        intersection = getIntersection(words1, words2);
        // console.log(words1);
        // console.log(words2);
        // console.log(intersection );
        if (intersection.length === 0) {
            return 0;
        } else {
            // calculate the avarage
            let average = 0;
            average = (intersection.length) / ((words1.length + words2.length) / 2);
            // return Math.floor(average);
            return average;
        }

    }

    private getSentenceRank(content: string) {
        let sentences = this.splitContentToSentences(content);

        // calcucalte the the intersection of every 2 sentences
        // let sentenceCount = sentences.length;
        // create an empty dictionary 
        let dic: Array<any> = new Array();

        sentences.map((sentence, index, _arr) => {
            dic[index] = {};
            dic[index].self = sentence;
            dic[index]['intersectionMap'] = [];
            let intersectionMap: Array<any> = dic[index]['intersectionMap'];
            sentences.map((nestedSentence, nestedIndex, _nestedArr) => {
                if (index === nestedIndex) {
                    return;
                } else {
                    let score: any = {};
                    score.index = nestedIndex;
                    score.score = this.getIntersectionAverage(sentence, nestedSentence);
                    score.self = sentences[nestedIndex];
                    intersectionMap.push(score);
                }
            });

            let totalScore = 0;
            intersectionMap.map((score: any) => {
                totalScore += score.score
            })
            dic[index].score = totalScore;
        })
        // sort be score, desc
        dic.sort((a: any, b: any) => {
            return b.score - a.score
        })
        // console.log(JSON.stringify(dic, null, 4))
        return dic;
    }







    /**
     * 
     * @param sentence 
     * Break corpus into words/tokens
     */
    private tokenizer(sentence: string): Array<string> {
        let result = new Array<string>();

        // http://ccl.pku.edu.cn/doubtfire/NLP/Lexical_Analysis/Word_Tokenization/Tokenization.htm
        let tokenRegex = /(\w+)|(\$\d+\.\d+)|([^\w\s]+)/g;
        if (sentence.length > 0) {
            let tokens = sentence.match(tokenRegex);
            // result = sentence.match(tokenRegex);
            // because string.Prototype.match can return null
            tokens ? result = tokens : result = result;
        } else {
            result = result;
        }
        return result;
    }





}