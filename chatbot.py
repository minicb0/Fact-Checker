import re
import random


def msg_occurance (user_message, known_words, single_response=False, required_words=[]):
    match = 0
    has_required_words = True

    # Counts how many words are present in each predefined message
    for word in user_message:
        if word in known_words:
            match += 1

    # Calculating the percentage
    match_percentage = float(match) / float(len(known_words))

    # Checking for the Required Words:
    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:  # Execute for either of the following condition.
        return int(match_percentage * 100)
    else:
        return 0


def check_all_messages (message):
    max_occurance = {}

    def response (bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal max_occurance
        max_occurance[bot_response] = msg_occurance(message, list_of_words, single_response, required_words)

    # Pre Defined Responses

    response('Hi, How Can I help You?', ['hello', "HOla", "hi", "Wasup"], single_response=True)
    response('Can you tell me something about it', ["i", "want", "to", "verify", "news"], single_response=True)
    response('Let me Check, I am Searching!', News_Type, single_response=True)
    response('You\'re welcome!', ['thank', 'thanks'], single_response=True)
    response('Thank you!', ['i', 'love', 'code', 'palace'], required_words=['code', 'palace', "Hello"])

    # Error Type Responses
    response(phrase_2, ['give', 'advice'], required_words=['advice'])
    response(phrase_1, ['go', 'to', 'hell',"getaway","not helping"], required_words=['hell', 'unresponsive'])

    best_match = max(max_occurance, key=max_occurance.get)
    # print(max_occurance)
    # print(f'Best match = {best_match} | Score: {max_occurance[best_match]}')

    return unknown() if max_occurance[best_match] < 1 else best_match # Applying Condition for Best Match


# Taking Some Input from the User
def user_input (user_input):
    split = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())  # Splitting on the basis of following Character.
    response = check_all_messages(split)
    return response


phrase_1 = "I don't like eating anything because I'm a bot obviously!"
phrase_2 = "I am extremely Sorry that I can't help you, Redirecting you to Customer Care "
News_Type = ['Its', "news", "About", "Something", "Cricket", "Football", "https", "Breaking News", "Bomb", "Attack",
             "Earth", "Fish"]


def unknown ():
    response = ["Looks Like I can not Understand it ",
                "I will submit this chat to customer care",
                "Please write something that includes NEWS",
                "What does that mean?",
                "I can only help you in news stuff only!"][
        random.randrange(5)]
    return response


# Testing the response system
print("This is ChatBot to assist you")
print("\n")

while True:
    print('News NewsBot: ' + user_input(input('You: ')))
    if ( input() == "yes"):
        break  # Breaks the Loop for Certian Input
