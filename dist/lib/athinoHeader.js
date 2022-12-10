"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthinoHeader = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const link_1 = __importDefault(require("next/link"));
/**
 * Main header component for athino sites.
 */
const AthinoHeader = (props) => {
    return (react_1.default.createElement(Frame, null,
        react_1.default.createElement(Header, null,
            react_1.default.createElement(WidthRestrictedFrame, null,
                react_1.default.createElement(Links, null,
                    react_1.default.createElement(link_1.default, { href: "https://www.athino.no" },
                        react_1.default.createElement(Logo, null)),
                    react_1.default.createElement(link_1.default, { href: "https://www.notifier.athino.no" }, "Notifier"),
                    react_1.default.createElement(link_1.default, { href: "https://www.secrets.athino.no" }, "Secrets"),
                    react_1.default.createElement(link_1.default, { href: "https://www.database-manager.athino.no" }, "Database manager"),
                    react_1.default.createElement(link_1.default, { href: "https://www.components.athino.no" }, "Components"))))));
};
exports.AthinoHeader = AthinoHeader;
const Frame = styled_components_1.default.div `
  background-color: black;
  min-height: 150vh;
`;
const WidthRestrictedFrame = styled_components_1.default.div `
  height: 100%;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
`;
const Header = styled_components_1.default.div `
  border-bottom: 1px solid gray;
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(33, 33, 33);
  box-sizing: border-box;
  height: 56px;
`;
const Links = styled_components_1.default.div `
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  gap: 20px;
`;
const Logo = styled_components_1.default.div `
  position: relative;
  height: 18px;
  width: 18px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/athino.svg');
`;
