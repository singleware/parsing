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
 * False rule, test case.
 */
let False = class False extends Testing.Case {
    /**
     * Test method.
     */
    null() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), 'x');
        const rule = new Parsing.Rules.Flow.False();
        // Expected error (Always false)
        this.isFalse(rule.consume(context));
        this.areSame(context.offset, 0);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], False.prototype, "null", null);
False = __decorate([
    Class.Describe()
], False);
exports.False = False;
//# sourceMappingURL=false.spec.js.map