import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const Tabs = ({ defaultValue, value, onValueChange, children }) => {
  const [currentTab, setCurrentTab] = React.useState(defaultValue || value);

  const handleTabChange = (val) => {
    setCurrentTab(val);
    onValueChange?.(val);
  };

  return (
    <div className="w-full">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          activeTab: currentTab,
          onTabChange: handleTabChange,
        })
      )}
    </div>
  );
};

export const TabsList = ({ children, className, activeTab, onTabChange }) => {
  return (
    <div className={cn("flex border-b border-muted", className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: child.props.value === activeTab,
          onSelect: () => onTabChange(child.props.value),
        })
      )}
    </div>
  );
};

const tabTriggerVariants = cva(
  "px-4 py-2 text-sm font-medium transition-all border-b-2",
  {
    variants: {
      active: {
        true: "border-primary text-primary",
        false: "border-transparent text-muted-foreground hover:text-primary hover:border-primary",
      },
    },
  }
);

export const TabsTrigger = ({ children, value, isActive, onSelect, asChild, className }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      onClick={onSelect}
      className={cn(tabTriggerVariants({ active: isActive }), className)}
    >
      {children}
    </Comp>
  );
};