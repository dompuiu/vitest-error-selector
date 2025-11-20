import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "vitest/browser";
import ComboBoxComponent from "../ComboBoxComponent";

describe("ComboBoxComponent", () => {
  it("should render the ComboBox with label", async () => {
    render(<ComboBoxComponent />);

    const combobox = page.getByTestId("fruit-combobox");
    await expect.element(combobox).toBeInTheDocument();
  });
});
