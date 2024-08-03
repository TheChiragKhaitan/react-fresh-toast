# React Fresh Toast

🎉 React-Fresh-Toast allows you to add notifications to your app with ease. No more nonsense!

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

To use React Toast Popup in your React application, follow these steps:

Import the useNotification hook and necessary styles in your component:

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

- `ToastConatiner`: React element representing the notification container.
- `tiggerToast(toastProps: ToastProps)`: Function to trigger a notification with the specified properties.


`NotificationProps`
The tiggerToast function accepts an object of type ToastProps, which includes:


- type: Type of the notification (success, info, warning, error).
- message: Message to display in the notification.
- duration (optional): Duration in milliseconds for which the notification should be displayed.
- animation (optional): Animation type for the notification (fade, pop, slide).
- onClose (optional): Closing Function for the toast

## Example

Here's a basic example of how to use React Toast Popup:

```jsx
import React from "react";
import useToast from "react-fresh-toast";

function App() {
  const { ToastConatiner, tiggerToast } =
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
      {ToastConatiner}
      <h1>Toast Component</h1>
      <button onClick={handleButtonClick}>Show Success</button>
    </div>
  );
}

export default App;
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
