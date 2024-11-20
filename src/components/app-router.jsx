// Modules
import React from "react";
import { Route, Switch } from "wouter";

// Pages
import { Home } from "@/components/pages/home/home";

// Component
export const AppRouter = () => {
  return (
    <div className="w-dvw h-dvh flex">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
