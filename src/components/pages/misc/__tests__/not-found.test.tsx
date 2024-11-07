// yarn test src/components/pages/misc/__tests__/not-found.test.tsx

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { NotFoundUi } from "@/components/pages/misc/not-found.tsx";

describe("NotFoundUi", () => {
  it("should match snapshot", () => {
    const wrapper = render(<NotFoundUi />);

    expect(wrapper).toMatchSnapshot();
  });
});
