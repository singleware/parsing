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
 * Any rule, test case.
 */
let Any = class Any extends Testing.Case {
    /**
     * Test method.
     */
    any() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), 'a95b');
        const rule = new Parsing.Rules.Flow.Any(new Parsing.Rules.Char.Expect('a'), new Parsing.Rules.Char.Digit());
        // First
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 1);
        // Second
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 2);
        // Third
        this.isTrue(rule.consume(context));
        this.areSame(context.offset, 3);
        // Expected error (No valid content)
        this.isFalse(rule.consume(context));
        this.areSame(context.offset, 3);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Any.prototype, "any", null);
Any = __decorate([
    Class.Describe()
], Any);
exports.Any = Any;
//# sourceMappingURL=any.spec.js.map