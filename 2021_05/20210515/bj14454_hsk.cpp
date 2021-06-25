#include <stdio.h>
#include <string.h>

char word[33];
long long word_len;
int orderWord(long long len, long long nth_word_idx)
{
  if (len == word_len)
    return nth_word_idx;
  long long before_len = len / 2;
  if (nth_word_idx < before_len)
    return orderWord(before_len, nth_word_idx);

  bool is_before_idx = (nth_word_idx - before_len - 1) < 0;
  return orderWord(before_len, is_before_idx ? (nth_word_idx - 1) : (nth_word_idx - before_len - 1));
}

int main()
{
  long long N_idx, change_word_len;
  scanf("%s%lld", &word, &N_idx);

  N_idx--;
  word_len = change_word_len = strlen(word);
  while (change_word_len <= N_idx)
    change_word_len *= 2;

  printf("%c", word[orderWord(change_word_len, N_idx)]);
  return 0;
}