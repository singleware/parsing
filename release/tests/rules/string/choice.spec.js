"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Testing = require("@singleware/testing");
const Parsing = require("../../../source");
/**
 * String choice rule, test case.
 */
let Choice = class Choice extends Testing.Case {
    /**
     * Soft test method.
     */
    stringSoftChoice() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), 'aBCgHiDeFaDg');
        const rule = new Parsing.Rules.String.SoftChoice('abc', 'def', 'ghi');
        // First success
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 3);
        // Second success
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 6);
        // Third success
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 9);
        // Expected error (No choice available)
        this.isFalse(rule.consume(context));
        this.areSame(context.offset, 9);
    }
    /**
     * Test method.
     */
    stringChoice() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), 'abcghidefABC');
        const rule = new Parsing.Rules.String.Choice('abc', 'def', 'ghi');
        // First success
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 3);
        // Second success
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 6);
        // Third success
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 9);
        // Expected error (No choice available)
        this.isFalse(rule.consume(context));
        this.areSame(context.offset, 9);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Choice.prototype, "stringSoftChoice", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Choice.prototype, "stringChoice", null);
Choice = __decorate([
    Class.Describe()
], Choice);
exports.Choice = Choice;
//# sourceMappingURL=choice.spec.js.map