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
/**
 * Equal data, rule class.
 */
let EqualRule = class EqualRule extends Class.Null {
    /**
     * Default constructor.
     * @param soft Determines whether the rule should be case insensitive.
     * @param property Comparison value.
     * @param expected Expected value.
     * @param rule Success rule.
     */
    constructor(soft, property, expected, rule) {
        super();
        this.soft = soft;
        this.property = property;
        this.expected = this.getValue(expected);
        this.rule = rule;
    }
    /**
     * Gets the value according to the rule matching style.
     * @param value Input value.
     * @returns Returns the value according to the rule matching style.
     */
    getValue(value) {
        return this.soft ? value.toLowerCase() : value;
    }
    /**
     * Consumes this rule moving ahead the context offset.
     * @param context Context entity.
     * @returns Returns true when the analysis was succeed or false otherwise.
     */
    consume(context) {
        const stored = this.getValue(context.tree.data[this.property]);
        if (this.expected === stored) {
            return this.rule.consume(context);
        }
        return false;
    }
};
__decorate([
    Class.Private()
], EqualRule.prototype, "soft", void 0);
__decorate([
    Class.Private()
], EqualRule.prototype, "property", void 0);
__decorate([
    Class.Private()
], EqualRule.prototype, "expected", void 0);
__decorate([
    Class.Private()
], EqualRule.prototype, "rule", void 0);
__decorate([
    Class.Private()
], EqualRule.prototype, "getValue", null);
__decorate([
    Class.Public()
], EqualRule.prototype, "consume", null);
EqualRule = __decorate([
    Class.Describe()
], EqualRule);
/**
 * Equal data, soft rule class.
 */
let SoftEqual = class SoftEqual extends EqualRule {
    /**
     * Default constructor.
     * @param property Comparison value.
     * @param expected Expected value.
     * @param rule Success rule.
     */
    constructor(property, expected, rule) {
        super(true, property, expected, rule);
    }
};
SoftEqual = __decorate([
    Class.Describe()
], SoftEqual);
exports.SoftEqual = SoftEqual;
/**
 * Equal data, hard rule class.
 */
let Equal = class Equal extends EqualRule {
    /**
     * Default constructor.
     * @param property Comparison value.
     * @param expected Expected value.
     * @param rule Success rule.
     */
    constructor(property, expected, rule) {
        super(false, property, expected, rule);
    }
};
Equal = __decorate([
    Class.Describe()
], Equal);
exports.Equal = Equal;
//# sourceMappingURL=equal.js.map