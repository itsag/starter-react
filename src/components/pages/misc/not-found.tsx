// Modules
import * as React from "react";

// Types
interface NotFoundProps {}
interface NotFoundUiProps {}

// Component: Presentation
export const NotFoundUi: React.FC<NotFoundUiProps> = (): React.ReactElement => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[460px] m-auto flex flex-col items-center p-6">
        <div className="mb-4">
          <span className="text-4xl text-gray-800 font-black">
            Page Not Found
          </span>
        </div>

        <div className="text-center">
          <span className="text-gray-600">
            The page you're looking for doesn't exist. You may have followed a
            broken link or the resource has been removed.
          </span>
        </div>
      </div>
    </div>
  );
};

// Component: Logic
export const NotFoundLogic: React.FC<NotFoundProps> = (
  props
): React.ReactElement => {
  return <NotFoundUi {...props} />;
};

// Default
export { NotFoundLogic as NotFound };
