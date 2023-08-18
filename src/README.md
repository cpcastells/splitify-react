# Splitify

## Table of contents

<a name="readme-top"></a>

  <summary>Summary</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#screenshot">Screenshot</a></li>
        <li><a href="#built-with">Built with</a></li>
        <li><a href="#tested-with">Tested with</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
<br>

## Overview

Welcome to Splitify, a web app project for effortless management of shared expenses among friends. Track debts and credits with ease, keeping everyone on the same page. Seamlessly update payments and balances. Crafted using **Vite**, **React**, and **TypeScript**, with stylish designs powered by **Tailwind CSS**, and global state management through **Redux Toolkit**. Developed with a mobile-first approach, Splitify guarantees a smooth experience on any device. Simplify your financial interactions today!

Here's a brief overview of the key components of interest:

- `App`: serves as Splitify's control center, managing friend interactions and account balances. Leveraging state hooks and Redux Toolkit, it handles the friend list and offers functions to add, select, and update balances. It dynamically controls the display of SplitForm and AddFriendForm for an optimized user experience.

- `SplitForm`: enables bill splitting with selected friend. Its interface handles expense inputs, debt calculations, and payer selection.

- `AddFriendForm`: simplifies friend addition. Users input names, image URLs, and even generate random avatars.

- `Contact`: displays friend details, showcasing images, names, and messages based on balances. With its click functionality, it streamlines friend selection for expense division.

- `Operation`: provides an overview of debts, calculating and presenting total debts based on Redux state, enhancing transparency in shared finances.

### Screenshot

<div align="center">
  <img src="https://cdn.discordapp.com/attachments/1114204200885301331/1142105191789887560/home.png" alt="Application screenshot" width="350">
</div>

### Built with

<div align="center">
 <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-Bundler-blue?logo=vite" alt="Vite">
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-Library-green?logo=react" alt="React">
  </a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/" class="inline-block">
  <img src="https://img.shields.io/badge/tailwindcss-Styling-blue?logo=tailwind-css" alt="tailwind-css">
</a>
<a href="https://redux-toolkit.js.org/" class="inline-block">
  <img src="https://img.shields.io/badge/Redux_Toolkit-State_Management-purple?logo=redux" alt="Redux Toolkit">
</a>
</div>

### Tested with

<div align="center">
 <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Vitest-Testing-red?logo=vitest" alt="Jest"></a>
  <a href="https://testing-library.com/docs/react-testing-library"><img src="https://img.shields.io/badge/React_Testing_Library-Testing-orange?logo=testing-library" alt="React Testing Library"></a>
</div>

## Demo

- Live Site URL: [Splitify](https://splitify-app.netlify.app/)

## Contact

<div align="center">
  <a href="https://www.linkedin.com/in/carlespueyodeveloper/">
    <img src="https://img.shields.io/badge/LinkedIn-Carles_Pueyo-blue?logo=linkedin" alt="LinkedIn">
  </a>
</div>
