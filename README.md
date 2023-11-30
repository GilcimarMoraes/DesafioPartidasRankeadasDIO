# Rank Calculator

This simple JavaScript function `calculateRankLevel` helps determine a player's rank level based on their number of wins and losses in ranked matches.

## Function Description

The `calculateRankLevel` function takes two parameters:
- `wins`: Number of wins the player has accumulated.
- `losses`: Number of losses the player has experienced.

It calculates the win-loss difference and determines the player's rank level according to the following criteria:

- If wins are less than 10: Iron
- If wins are between 11 and 20: Bronze
- If wins are between 21 and 50: Silver
- If wins are between 51 and 80: Gold
- If wins are between 81 and 90: Diamond
- If wins are between 91 and 100: Legendary
- If wins are greater than or equal to 101: Immortal

## Usage

To use this function, call `calculateRankLevel` and provide the number of wins and losses as arguments:

```javascript
calculateRankLevel(15, 10);
// Output: The hero has a win-loss difference of 5 and is at the level of Gold
