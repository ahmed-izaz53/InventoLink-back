"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = __importDefault(require("./userRoutes"));
const currencyRoutes_1 = __importDefault(require("./currencyRoutes"));
const businessUnitRoutes_1 = __importDefault(require("./businessUnitRoutes"));
const configurationRoutes = [
    {
        pathName: "/configuration/user",
        controller: userRoutes_1.default,
    },
    {
        pathName: "/configuration/currency",
        controller: currencyRoutes_1.default,
    },
    {
        pathName: "/configuration/business-unit",
        controller: businessUnitRoutes_1.default,
    },
];
exports.default = configurationRoutes;
