
import sys
import json
from nltk.tokenize import sent_tokenize


def read_in():
    """ Return first line from stdin """
    lines = sys.stdin.readlines()
    return json.loads(lines[0])


def main():
    """ Use nltk to break text into sentences """
    lines = read_in()

    print sent_tokenize(json.loads(lines.content))


if __name__ == '__main__':
    main()
