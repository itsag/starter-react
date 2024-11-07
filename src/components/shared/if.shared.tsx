// Modules
import * as React from "react";

// Types
interface IfProps {
  condition: boolean;
  renderWhenTrue?: any;
  renderWhenFalse?: any;
  children?: any;
}
interface IfUiProps extends IfProps {}

// Component: Presentation
export const IfUi: React.FC<IfUiProps> = ({
  condition,
  renderWhenTrue,
  renderWhenFalse,
  children,
}): React.ReactElement | undefined => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};

// Component: Logic
export const IfLogic: React.FC<IfProps> = (props): React.ReactElement => {
  return <IfUi {...props} />;
};

// Default
export { IfLogic as If };
