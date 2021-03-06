/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';

import * as Parsing from '../../../source';

/**
 * True rule, test case.
 */
@Class.Describe()
export class True extends Testing.Case {
  /**
   * Test method.
   */
  @Testing.Method()
  @Class.Public()
  public not(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), 'x');
    const rule = new Parsing.Rules.Flow.True();
    // Success (Always true)
    this.isTrue(rule.consume(context));
    this.areSame(context.offset, 0);
  }
}
