
// Cipher - Alphabet pair
const codes = new Map([
    ["T", "G"], ["U", "H"], ["V", "I"], ["W", "J"],
    ["X", "K"], ["Y", "L"], ["Z", "M"], ["A", "N"],
    ["B", "O"], ["C", "P"], ["D", "Q"], ["E", "R"],
    ["F", "S"], ["G", "T"], ["H", "U"], ["I", "V"],
    ["J", "W"], ["K", "X"], ["L", "Y"], ["M", "Z"],
    ["N", "A"], ["O", "B"], ["P", "C"], ["Q", "D"], 
    ["R", "E"], ["S", "F"]
]);


function rot13(str) {

    str = str.toUpperCase();
    let deciphered = "";

    // Loop through the string
    for (let i in str) {

        // If it's a letter, get it from the 'codes' map
        if (codes.has(str[i])) {
            deciphered += codes.get(str[i]);
        }

        // If it's a space or punctuation, keep the original
        else {
            deciphered += str[i];
        }
    }

    console.log(deciphered);
    return deciphered;
}

// Regular test cases
rot13("SERR PBQR PNZC"); // Should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!"); // Should decode to the string FREE PIZZA!
rot13("SERR YBIR?"); // Should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // Should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// Lower case tests
rot13("gur dhvpx oebja sbk"); // Should decode to the string THE QUICK BROWN FOX