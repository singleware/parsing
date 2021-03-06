/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Rule } from '../../rule';
import { Context } from '../../context';

/**
 * Success rule, rule class.
 */
@Class.Describe()
export class Success extends Class.Null implements Rule {
  /**
   * Sub rule.
   */
  @Class.Private()
  private rule: Rule;

  /**
   * Default constructor.
   * @param rule Data rule.
   */
  constructor(rule: Rule) {
    super();
    this.rule = rule;
  }

  /**
   * Consumes this rule moving ahead the context offset.
   * @param context Context entity.
   * @returns Returns true when the analysis was succeed or false otherwise.
   */
  @Class.Public()
  public consume(context: Context): boolean {
    if (this.rule.consume(context)) {
      context.success();
      return true;
    }
    return false;
  }
}
