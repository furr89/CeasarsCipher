# CeasarsCipher
freeCodeCamp challenge on implementing the Ceasars Cipher in JavaScript

Maked use of a map storing rot13 characters. With a single loop, it achieves O(n) time complexity, checking if a character is present in the codes map and if it's not (meaning it is a space or punctuation), it keeps the character. It uses an additional data structure to store the decoded string making it's space complexity O(n).
