import React, { ReactNode } from 'react';
declare type Props = {
    escape?: number;
    layer?: number;
    children: ReactNode;
    onEscaped?(): void;
};
/**
 * Component for escaping stacking context.
 *
 * The `layer` prop sets the `translateZ` value in pixels units.
 * Increase it to insure the child component is visible. Default value is 10.
 *
 * The `escape` prop sets the max amount of ancestors to include in the escape.
 * Increase it to insure the child component is visible.
 * If omitted, all ancestors up to, but not including the HTML element, will be included in the escape.
 */
export declare const Stack: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
