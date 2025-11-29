'use client'

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <motion.input
      whileFocus={{ scale: 1.01 }}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm ring-offset-slate-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-slate-100 shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-300",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";