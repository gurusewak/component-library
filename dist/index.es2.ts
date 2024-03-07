import { j as a } from "./index.es5.ts";
import * as d from "react";
import { Slot as c } from "./index.es6.ts";
import { cva as u } from "class-variance-authority";
import { cn as f } from "./index.es7.ts";
const m = u(
  "inline-flex items-center m-3 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), b = d.forwardRef(
  ({ className: e, variant: r, size: t, asChild: o = !1, ...n }, i) => {
    const s = o ? c : "button";
    return /* @__PURE__ */ a.jsx(
      s,
      {
        className: f(m({ variant: r, size: t, className: e })),
        ref: i,
        ...n
      }
    );
  }
);
export {
  b as Button,
  m as buttonVariants
};
//# sourceMappingURL=index.es2.ts.map
