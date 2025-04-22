
## 🚀 How to Run the Game

1. **Clone or Download** this repository.
2. Make sure all image files (`rock.png`, `paper.png`, `scissors.png`) are placed inside an `image` folder in the same directory.
3. Open `index.html` in your browser.
4. Click on Rock, Paper, or Scissors to start playing.

## 🎯 Features

- Dynamic score tracking for both user and computer
- Random choice generation for computer
- Immediate feedback with message and background color
- Reset button to clear scores and start fresh
- Simple, clean UI with hover effects

## 🛠️ Technologies Used

- **HTML** – Page structure
- **CSS** – Styling and layout
- **JavaScript** – Game logic and interactivity

## 🐞 Known Issues

- Typo in `app.js`: `"sciccors"` should be `"scissors"` in the `option` array inside `genComputerChoice()`.
- Typo in message: `"Beatss"` should be `"Beats"` in the `showWinner()` function.
- Some variables like `userWin` are used without declaration (`let`, `const`).

## 🧹 Future Improvements

- Add sound effects or animations
- Mobile responsiveness
- Enhanced UI/UX with themes or animations
- Keep score history or leaderboard

Made with ❤️ using pure HTML, CSS, and JS.
