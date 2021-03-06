"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Flow = require("../flow");
const range_1 = require("./range");
/**
 * Character letter, lowercase rule class.
 */
let LowerLetter = class LowerLetter extends range_1.Range {
    /**
     * Default constructor.
     */
    constructor() {
        super('a', 'z');
    }
};
LowerLetter = __decorate([
    Class.Describe()
], LowerLetter);
exports.LowerLetter = LowerLetter;
/**
 * Character letter, uppercase rule class.
 */
let UpperLetter = class UpperLetter extends range_1.Range {
    /**
     * Default constructor.
     */
    constructor() {
        super('A', 'Z');
    }
};
UpperLetter = __decorate([
    Class.Describe()
], UpperLetter);
exports.UpperLetter = UpperLetter;
/**
 * Character letter, default rule class.
 */
let Letter = class Letter extends Flow.Any {
    /**
     * Default constructor.
     */
    constructor() {
        super(new range_1.Range('a', 'z'), new range_1.Range('A', 'Z'));
    }
};
Letter = __decorate([
    Class.Describe()
], Letter);
exports.Letter = Letter;
//# sourceMappingURL=letter.js.map