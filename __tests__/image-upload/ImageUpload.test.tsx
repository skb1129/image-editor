import React from "react";
import { render, cleanup } from "@testing-library/react";

import ImageUpload from "../../src/components/image-upload/ImageUpload";

afterAll(cleanup);
const setImage = jest.fn();
const { queryByTestId } = render(<ImageUpload setImage={setImage} />);

test("ImageUpload: renders correctly", () => {
  expect(queryByTestId("image-upload")).toBeTruthy();
  expect(queryByTestId("image-upload-input")).toBeTruthy();
  expect(queryByTestId("image-upload-error")).toBeFalsy();
});
