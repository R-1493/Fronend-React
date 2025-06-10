# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Install Tailwind CSS

npm install --save-dev tailwindcss postcss autoprefixer
npm install --save-dev tailwindcss@3
npx tailwindcss init -p

## install react icons

npm i react-icons

## 🔧 Purpose

This React-based application provides a step-by-step flow for customers to select and order a waste skip. It guides users through six intuitive steps, each with a specific purpose in the skip hire process.

## 🧠 Concepts & Approach

## ✅ 1. Stepper Logic

Built with a Stepper component and stepperSteps array.

Each step is mapped to a dedicated component and an icon.

Navigation is handled via currentStep state and StepperControl.

## ✅ 2. State Persistence

currentStep and selectSkip are stored in localStorage to persist state across page reloads.

## ✅ 3. Default Step

The flow begins on Step 2 (Select Skip) by default

## ✅ 4. Component Breakdown

Stepper: Displays step indicators (desktop and mobile).

StepperControl: Renders navigation buttons and context info (skip details, waste type).

SelectSkipStep: Fetches skip data via API and lets users choose one.

## ✅ 5. Conditional UI

Buttons are disabled until a skip is selected in Step 2.

Different UI for mobile vs desktop (responsive with tailwindcss classes).

Dynamic visuals and descriptions per step.

## ✅ 6. API Integration

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

## ✅ 7. UX Enhancements

Smooth transitions and styled buttons.

## 🗂️ Folder Structure

components/
Stepper/ - Stepper.jsx - StepperControl.jsx - steps/ - PostcodeStep.jsx - WasteTypeStep.jsx - SelectSkipStep.jsx - PermitCheckStep.jsx - ChooseDateStep.jsx - PaymentStep.jsx

utils/

- stepperSteps.js

App.jsx
assets/

- image.png

## 🧪 How to Run

## Install dependencies

npm install

## Run the app

npm run dev

## Visit in browser

Open http://localhost:3000
