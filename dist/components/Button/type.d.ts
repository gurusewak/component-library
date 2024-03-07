/// <reference types="react" />
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button";
/**
 * This will be displayed as an interface
 * @property a comment for a
 * @prop b comment for b
 * @interface
 */
export interface ButtonPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /**This is test comment for description */
    asChild?: boolean;
    /**It represents the label of the button */
    label: string;
    /**It represents the variant used in the button */
    variant: any;
    /**It tells us about the size of the button */
    size: any;
    /**It explains about the onclick functionality*/
    onClick: () => void;
}
//# sourceMappingURL=type.d.ts.map