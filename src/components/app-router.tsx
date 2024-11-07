// Modules
import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "@/components/pages/home/home";
import { NotFound } from "@/components/pages/misc/not-found";

// Types
interface AppRouterProps {}
interface AppRouterUiProps {}

// Component: Presentation
export const AppRouterUi: React.FC<
  AppRouterUiProps
> = (): React.ReactElement => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Component: Logic
export const AppRouterLogic: React.FC<AppRouterProps> = (
  props
): React.ReactElement => {
  return <AppRouterUi {...props} />;
};

// Default
export { AppRouterLogic as AppRouter };
