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
 * Tree rule, test case.
 */
let Tree = class Tree extends Testing.Case {
    /**
     * Test method.
     */
    dataTree() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), 'defabcadg');
        const rule = new Parsing.Rules.Data.Tree('choice', Parsing.Data.Directions.NEXT, new Parsing.Rules.Data.Extract('name', new Parsing.Rules.String.Choice('abc', 'def')));
        // First success
        this.isTrue(rule.consume(context));
        this.areSame(context.tree.next.type, 'choice');
        this.areSame(context.tree.next.data['name'], 'def');
        this.areSame(context.offset, 3);
        // Second success
        this.isTrue(rule.consume(context));
        this.areSame(context.tree.next.type, 'choice');
        this.areSame(context.tree.next.data['name'], 'def');
        this.areSame(context.tree.next.next.type, 'choice');
        this.areSame(context.tree.next.next.data['name'], 'abc');
        this.areSame(context.offset, 6);
        // Expected error (No choice available)
        this.isFalse(rule.consume(context));
        this.areSame(context.tree.next.type, 'choice');
        this.areSame(context.tree.next.data['name'], 'def');
        this.areSame(context.tree.next.next.type, 'choice');
        this.areSame(context.tree.next.next.data['name'], 'abc');
        this.areSame(context.offset, 6);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Tree.prototype, "dataTree", null);
Tree = __decorate([
    Class.Describe()
], Tree);
exports.Tree = Tree;
//# sourceMappingURL=tree.spec.js.map