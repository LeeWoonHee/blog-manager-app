import React, { useState } from "react";

const Button: React.FC = () => {
  const [text, setText] = useState<string>("Click me");

  return <button onClick={() => setText("Clicked!")}>{text}</button>;
};

export default Button;
