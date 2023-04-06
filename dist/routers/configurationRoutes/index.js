"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryRoutes_1 = __importDefault(require("./categoryRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const configurationRoutes = [
    {
        pathName: "/configuration/category",
        controller: categoryRoutes_1.default,
    },
    {
        pathName: "/configuration/user",
        controller: userRoutes_1.default,
    },
];
exports.default = configurationRoutes;
