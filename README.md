# 🕹️odin-Tic_Tac_Toe

A browser-based Tic Tac Toe game built using **HTML, CSS, and JavaScript** — designed with a clean UI and fully modular code architecture following the **Factory Function + Module Pattern** approach.

---

## 🎯 Features

- **Two-player mode** – Enter player names and take turns placing your marks.  
- **Dynamic board rendering** – The gameboard updates in real time as players make moves.  
- **Win & tie detection** – Automatically checks for 3-in-a-row or a full board tie.  
- **Status updates** – Displays whose turn it is, and announces winners or draws.  
- **Reset & restart functionality** – Reset the board while keeping player names.  
- **Encapsulated logic** – All game logic contained within modular IIFEs for clean, reusable, and testable code.

---

## 🧩 Architecture Overview

| Module | Responsibility |
|---------|----------------|
| **`gameBoard`** | Stores and updates the 3×3 board state. Prevents overwriting occupied cells. |
| **`players`** | Stores player information (name and symbol) and handles name updates. |
| **`gameController`** | Manages game flow player turns, win/tie checking, and resetting. |
| **`displayController`** | Handles DOM interaction, rendering the board, updating messages, and button events. |

Each module is wrapped in an **IIFE** (Immediately Invoked Function Expression) to prevent global variable pollution.

---

## ⚙️ How to Play

1. Enter your names in the sidebar input fields.  
2. Click **Start Game**.  
3. Players take turns clicking on cells to place their mark (X or O).  
4. The first player to align three marks wins otherwise, it’s a tie!  
5. Click **Reset** to start over.

---

## 🧠 Concepts Practiced

- Factory Functions & Module Pattern  
- DOM Manipulation  
- Event Handling  
- Game Logic and State Management  
- Encapsulation & Separation of Concerns  

---


## 💻 Live Demo

> *[Play Game](https://shoiyan.github.io/odin-Tic_Tac_Toe/)*

---
