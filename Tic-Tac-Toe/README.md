## TheOdinProject/Tic-Tac-Toe

Here's a project about simple x/o game:)<br>
# <b>y*T3</b> - is your Virtual x/o Game that you know from the childhood.<br>
`Feel free to Use as you Wish`

# Technologies Used / Viewed (TECH Stack)

- [x] HTML 
  - `(wz Prettier)`;
- [x] CSS 
  - `(wz Prettier)`;
  - ++`Keyframes animation`, 
  - ++`Flex display`, 
  - ++`Styling`;
- [x] JavaScript:
  - ++`IIFEs`, 
  - ++`Minimax AI algorithm`,
  - ++`Module Design Pattern`,
  - ++`Revealing Module Pattern`, 
  - ++`Factory Functions`, 
  - ++`The for() loop and if() statements`, 
  - ++`DOM manipulation`, 
  - ++`Event handlers`, 
  - ++`Arrays`;
- [x] Problem Solving 
  - `(Plan and Design logic of organizing code && problems in plain English)`.

# Description and Main Idea
The game mechanic is controlled by the object gameBoard with: 
- The `gameBoard = []` and `lanes = []` Arrays to keep track of the game board;
- Functions which provides:
  - 1/2 players take turn to make move;
  - ChatGPT-3 take turn to make move;
  - update game board display;
  - check for win conditions.

#  Features
-- +It's a ~simple~ `Tic Tac Toe` game. (simple as for the /USER/ but for the developer it's really took awhile)<br>
-- +The USER can play with `a friend;`<br>
-- +The USER can play against the Smart(L), Almost Smart(M) or Less Smart(S) `ChatGPT-3.`<br>
-- +The Smart(L), Almost Smart(M) or Less Smart(S) `ChatGPT-3` can play against Smart, Almost Smart or not-Smart `ChatGPT-3.`<br>
<br>
<b>P . S .</b><br>

- Less Smart (S) - random moves;
- Almost Smart (M) - checks for one-move wins or loses;
- The Smart (L) - always makes the best move based on its value (if a few moves have the highest value, one of them is chosen randomly -> it may be `Minimax AI` algorithm but instead was realized by `if` statement).<br>
<br>
[Minimax is a function where the computer will simulate all future moves for the user and itself to determine the best possible move. The <a href="https://en.wikipedia.org/wiki/Minimax">here:)</a> wikipedia for `Minimax` contains pseudocode that took me a while to completely understand. This function is recursive and will continue to run until a winner is decided and then returns a score.]

[`The function works in this perspective:` put a move down, see if it is a terminal value of a win by calling `Minimax`.<br>
/Minimax\ has a score associated with it.<br><br>
If it's a score, the board is marked with the move. If no score, then Minimax leaps to a section for the opposite player, where upon the board is marked, minimax is called upon itself and it's scored.<br><br>

If there is no score, then it goes to a section for the current player, a mark is made and the board scored.

When there is a terminal state, `it generates a score`, and the code can proceed past minimax rather than being called on itself repeatedly. Those scores are put in order to determine what is the optimal move at every step of the game.]

# The Odin Project ASSIGNMENT

1. Set up your project with a HTML, CSS and Javascript files and get the Git repo all set up.
2. You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
- Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.
- Your main goal here is to have as little global code as possible.
3. Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage
4. Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!
5. Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
6. Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!

## `HAPPY CODING AND GAMING.`


# ALSO 

LIVE is available: <a href="https://tezv-t3-tic-tac-toe.netlify.app/">here:)</a>, just click it.
The ASSIGNMENT is <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe">here:)</a>