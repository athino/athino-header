"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const react_1 = __importStar(require("react"));
const forEachAncestor_1 = require("./forEachAncestor");
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
exports.Stack = (0, react_1.forwardRef)((props, ref) => {
    const _ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        (0, forEachAncestor_1.forEachAncestor)(_ref.current, props.escape, (element) => {
            element.style.transformStyle = 'preserve-3d';
        });
        props.onEscaped?.();
        return () => {
            (0, forEachAncestor_1.forEachAncestor)(_ref.current, props.escape, (element) => {
                element.style.transformStyle = '';
            });
        };
    }, []);
    return (react_1.default.createElement("div", { ref: _ref, style: {
            position: 'relative',
            width: '100%',
            transformStyle: 'preserve-3d'
        } },
        react_1.default.createElement("div", { ref: ref, style: {
                position: 'relative',
                width: '100%',
                transformStyle: 'preserve-3d',
                transform: `translateZ(${props.layer ?? 10}px)`
            } }, props.children)));
});
