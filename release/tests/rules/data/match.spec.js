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
 * Match rule, test case.
 */
let Match = class Match extends Testing.Case {
    /**
     * Soft test method.
     */
    dataSoftMatch() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), 'DeFaBCadg');
        const rule = new Parsing.Rules.Data.SoftMatch('name', new Parsing.Rules.Data.Extract('name', new Parsing.Rules.String.Choice('aBC', 'DeF')));
        // First success
        this.isTrue(rule.consume(context));
        this.areSame(context.tree.data['name'], 'DeF');
        this.areSame(context.offset, 3);
        // Second success
        this.isTrue(rule.consume(context));
        this.areSame(context.tree.data['name'], 'aBC');
        this.areSame(context.offset, 6);
        // Expected error (No choice available)
        this.isFalse(rule.consume(context));
        this.areSame(context.tree.data['name'], 'aBC');
        this.areSame(context.offset, 6);
    }
    /**
     * Default test method.
     */
    dataMatch() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), 'DeFaBCadg');
        const rule = new Parsing.Rules.Data.Match('name', new Parsing.Rules.Data.Extract('name', new Parsing.Rules.String.Choice('aBC', 'DeF')));
        // First success
        this.isTrue(rule.consume(context));
        this.areSame(context.tree.data['name'], 'DeF');
        this.areSame(context.offset, 3);
        // Second success
        this.isTrue(rule.consume(context));
        this.areSame(context.tree.data['name'], 'aBC');
        this.areSame(context.offset, 6);
        // Expected error (No choice available)
        this.isFalse(rule.consume(context));
        this.areSame(context.tree.data['name'], 'aBC');
        this.areSame(context.offset, 6);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Match.prototype, "dataSoftMatch", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Match.prototype, "dataMatch", null);
Match = __decorate([
    Class.Describe()
], Match);
exports.Match = Match;
//# sourceMappingURL=match.spec.js.map