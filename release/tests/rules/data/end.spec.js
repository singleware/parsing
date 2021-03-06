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
 * End of content rule, test case.
 */
let End = class End extends Testing.Case {
    /**
     * Test method.
     */
    dataEnd() {
        const contextA = new Parsing.Context(new Parsing.Data.Node('test'), '');
        const contextB = new Parsing.Context(new Parsing.Data.Node('test'), 'x');
        const rule = new Parsing.Rules.Data.End();
        // Success
        this.isTrue(rule.consume(contextA));
        this.areSame(contextA.offset, 0);
        // Expected error (No end of content)
        this.isFalse(rule.consume(contextB));
        this.areSame(contextB.offset, 0);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], End.prototype, "dataEnd", null);
End = __decorate([
    Class.Describe()
], End);
exports.End = End;
//# sourceMappingURL=end.spec.js.map