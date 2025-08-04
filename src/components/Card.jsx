// src/components/Card.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "../components/ui/card"; // use relative path if alias (@) doesn't work

function MyCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>This is a card using ShadCN UI (JSX).</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You can place any content here like text, buttons, images, etc.</p>
      </CardContent>
    </Card>
  );
}

export default MyCard;
