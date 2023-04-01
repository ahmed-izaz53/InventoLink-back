"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const __1 = require("../../..");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category_name, description } = req.body;
        yield __1.globalPrisma.master_item_category.create({
            data: {
                category_name,
                description,
            },
        });
        return res.send("Created Successfully").status(200).end();
    }
    catch (e) {
        return res.json({ message: e.message }).end();
    }
});
exports.createCategory = createCategory;
