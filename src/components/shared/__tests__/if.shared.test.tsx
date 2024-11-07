// yarn test src/components/shared/__tests__/if.shared.test.tsx

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { If } from "@/components/shared/if.shared";

describe("If", () => {
  it("should render children when condition is true", () => {
    const wrapper = render(
      <If condition={true}>
        <div data-testid="element" />
      </If>
    );

    const element = wrapper.getByTestId("element");

    expect(element).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render nothing when condition is false", () => {
    const wrapper = render(
      <If condition={false}>
        <div data-testid="element" />
      </If>
    );

    const element = wrapper.queryByTestId("element");

    expect(element).toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render renderWhenTrue when condition is true", () => {
    const wrapper = render(
      <If
        condition={true}
        renderWhenTrue={<div data-testid="trueElement" />}
        renderWhenFalse={<div data-testid="falseElement" />}
      />
    );

    const element = wrapper.queryByTestId("trueElement");

    expect(element).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render renderWhenFalse when condition is false", () => {
    const wrapper = render(
      <If
        condition={false}
        renderWhenTrue={<div data-testid="trueElement" />}
        renderWhenFalse={<div data-testid="falseElement" />}
      />
    );

    const element = wrapper.queryByTestId("falseElement");

    expect(element).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
