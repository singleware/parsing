import * as Class from '@singleware/class';
import * as Trees from '../../trees';
import { Rule } from '../../rule';
import { Context } from '../../context';
/**
 * Character choice, rule class.
 */
export declare class Choice extends Class.Null implements Rule {
    /**
     * Expected characters.
     */
    private expected;
    /**
     * Default constructor.
     * @param chars List of expected characters.
     */
    constructor(...chars: string[]);
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