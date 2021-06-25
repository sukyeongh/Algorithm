stdin = input().split()

word = stdin[0]
N_idx = int(stdin[1])-1

word_len = change_word_len = len(word)


def orderWord(length, nth_word):
    if length == word_len:
        return int(nth_word)

    before_len = length / 2

    if nth_word < before_len:
        return orderWord(before_len, nth_word)

    is_before = nth_word - before_len - 1 < 0
    if is_before:
        return orderWord(before_len, nth_word - 1)
    else:
        return orderWord(before_len, nth_word - before_len - 1)


while change_word_len <= N_idx:
    change_word_len *= 2

print(word[orderWord(change_word_len, N_idx)])
