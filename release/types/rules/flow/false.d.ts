import * as Class from '@singleware/class';
import { Rule } from '../../rule';
import { Context } from '../../context';
/**
 * False rule, rule class.
 */
export declare class False extends Class.Null implements Rule {
    /**
     * Consumes this rule moving ahead the context offset.
     * @param context Context entity.
     * @returns Returns true when the analysis was succeed or false otherwise.
     */
    consume(context: Context): boolean;
}
