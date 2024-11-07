// yarn test src/components/pages/home/__tests__/home.test.tsx

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { HomeUi } from "@/components/pages/home/home.tsx";

describe("HomeUi", () => {
  it("should match snapshot", () => {
    const wrapper = render(<HomeUi />);

    expect(wrapper).toMatchSnapshot();
  });
});
