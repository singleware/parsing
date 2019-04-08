import * as Class from '@singleware/class';
import * as Trees from '../trees';
import { Rule } from '../rule';
import { Context } from '../context';
/**
 * Decision rule, rule class.
 */
export declare class Decision extends Class.Null implements Rule {
    /**
     * Condition rule.
     */
    private condition;
    /**
     * Success rule.
     */
    private success;
    /**
     * Failure rule.
     */
    private failure;
    /**
     * Default constructor.
     * @param condition Condition rule.
     */
    constructor(condition: Rule, success: Rule, failure: Rule);
    /**
     * Consumes this rule without moving ahead the context offset.
     * @param context Context entity.
     * @returns Returns true when the analysis was succeed or false otherwise.
     */
    peek(context: Context): boolean;
    /**
     * Consumes this rule moving ahead the context offset.
     * @param context Context entity.
     * @param node Current context node.
     * @returns Returns true when the analysis was succeed or false otherwise.
     */
    consume(context: Context, node: Trees.Node): boolean;
}