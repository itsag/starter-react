// yarn test src/common/__tests__/configs.common.test.ts

import { describe, it, expect } from "vitest";

import { appConfig } from "@/common/configs.common";

describe("configs.common", () => {
  describe("appConfig", () => {
    it("should match snapshot", () => {
      expect(appConfig).toMatchSnapshot();
    });
  });
});
