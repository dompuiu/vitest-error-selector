import React from "react";
import { ComboBox, Item, Provider, defaultTheme } from "@adobe/react-spectrum";

export default function ComboBoxComponent() {
  const options = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grape" },
    { id: 5, name: "Mango" },
  ];

  return (
    <Provider theme={defaultTheme}>
      <ComboBox label="Select a fruit" data-test-id="fruit-combobox">
        {options.map((option) => (
          <Item key={option.id}>{option.name}</Item>
        ))}
      </ComboBox>
    </Provider>
  );
}
