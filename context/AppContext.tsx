"use client";
import React, { ReactNode, useContext, useState, createContext } from "react";

export enum UnderlayView {
  MENU_VIEW = "MENU_VIEW",
}

interface AppContextType {
  isUnderlayOpen: boolean;
  setIsUnderlayOpen: (value: boolean) => void;
  underlayView: UnderlayView;
  setUnderlayView: (value: UnderlayView) => void;
}

// Initialize context with undefined and update the type accordingly
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Rename state variables to match AppContextType interface
  const [isUnderlayOpen, setIsUnderlayOpen] = useState<boolean>(false);
  const [underlayView, setUnderlayView] = useState<UnderlayView>(
    UnderlayView.MENU_VIEW
  );

  return (
    <AppContext.Provider
      value={{
        isUnderlayOpen,
        setIsUnderlayOpen,
        underlayView,
        setUnderlayView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
