/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';

import * as Parsing from '../../../source';

/**
 * Tree rule, test case.
 */
@Class.Describe()
export class Tree extends Testing.Case {
  /**
   * Test method.
   */
  @Testing.Method()
  @Class.Public()
  public dataTree(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), 'defabcadg');
    const rule = new Parsing.Rules.Data.Tree(
      'choice',
      Parsing.Data.Directions.NEXT,
      new Parsing.Rules.Data.Extract('name', new Parsing.Rules.String.Choice('abc', 'def'))
    );
    // First success
    this.isTrue(rule.consume(context));
    this.areSame((<Parsing.Data.Node>context.tree.next).type, 'choice');
    this.areSame((<Parsing.Data.Node>context.tree.next).data['name'], 'def');
    this.areSame(context.offset, 3);
    // Second success
    this.isTrue(rule.consume(context));
    this.areSame((<Parsing.Data.Node>context.tree.next).type, 'choice');
    this.areSame((<Parsing.Data.Node>context.tree.next).data['name'], 'def');
    this.areSame((<Parsing.Data.Node>(<Parsing.Data.Node>context.tree.next).next).type, 'choice');
    this.areSame((<Parsing.Data.Node>(<Parsing.Data.Node>context.tree.next).next).data['name'], 'abc');
    this.areSame(context.offset, 6);
    // Expected error (No choice available)
    this.isFalse(rule.consume(context));
    this.areSame((<Parsing.Data.Node>context.tree.next).type, 'choice');
    this.areSame((<Parsing.Data.Node>context.tree.next).data['name'], 'def');
    this.areSame((<Parsing.Data.Node>(<Parsing.Data.Node>context.tree.next).next).type, 'choice');
    this.areSame((<Parsing.Data.Node>(<Parsing.Data.Node>context.tree.next).next).data['name'], 'abc');
    this.areSame(context.offset, 6);
  }
}
