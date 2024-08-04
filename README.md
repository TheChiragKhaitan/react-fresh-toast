# React Fresh Toast

🎉 React-Fresh-Toast allows you to add toast/notifications to your app with ease. No more nonsense!

## Installation

#### With yarn

```sh
yarn add react-fresh-toast
```

#### With NPM

```sh
npm install react-fresh-toast
```

## Features

- Fresh by Default
- Easy to set up for real.
- Super easy to customize
- Super easy to use an animation of your choice.
- Stacked notifications!

## Usage

To use React Fresh Toast in your React application, follow these steps:

Import the useToast hook and necessary styles in your component:

```jsx
import useToast from "react-fresh-toast";
```

Initialize the useToast hook with your preferred position:

```jsx
const { ToastContainer, triggerToast } =
  useToast(positon of your choice);
```

#### Postions

- "bottom-left"
- "bottom-right"
- "top-left"
- "top-right"
- "top-center"

Use ToastContainer in your JSX to display toast:

```jsx
return (
  <div className="App">
    {ToastContainer}
    {/* Your other JSX content */}
  </div>
);
```

Trigger toast using the triggerToast function:

```jsx
triggerToast({
  type: "success",
  message: "This is a success message!",
  duration: 3000,  //Optional
  animation: "pop", //Optional
});
```

#### Animations

You can specify an animation type for the toast. The available animations are:

- "fade"
- "pop"
- "slide"

```jsx
triggerToast({
  type: "success",
  message: "This is a success message with a pop animation!",
  duration: 3000,
  animation: "pop",
});
```

## API

```jsx
useToast(position: PositionType)
```

This hook returns an object with the following properties:

- `ToastContainer`: React element representing the toast container.
- `tiggerToast(toastProps: ToastProps)`: Function to trigger a toast with the specified properties.


`ToastProps`
The tiggerToast function accepts an object of type ToastProps, which includes:


- type: Type of the toast (success, info, warning, error).
- message: Message to display in the toast.
- duration (optional): Duration in milliseconds for which the toast should be displayed.
- animation (optional): Animation type for the toast (fade, pop, slide).
- onClose (optional): Closing Function for the toast

## Example

Here's a basic example of how to use React Fresh Toast :

```jsx
import React from "react";
import useToast from "react-fresh-toast";

function App() {
  const { ToastContainer, tiggerToast } =
    useToast("top-left");

  const handleButtonClick = () => {
    tiggerToast({
      type: "success",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  return (
    <div className="App">
      {ToastContainer}
      <h1>Toast Component</h1>
      <button onClick={handleButtonClick}>Show Success</button>
    </div>
  );
}

export default App;
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

## Contact

If you wish to connect with me, you can reach out through the following channels:

<div align="center">
  <a href="https://www.linkedin.com/in/chirag-khaitan" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  
  <a href="mailto:chiragkhaitan2014@gmail.com" target="_blank">
    <img alt="Email" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  
  <a href="https://www.instagram.com/thechiragkhaitan" target="_blank">
    <img alt="Instagram" src="https://img.shields.io/badge/Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
</div>


© 2024 Chirag Khaitan


## License

This project is licensed under the ISC License.
