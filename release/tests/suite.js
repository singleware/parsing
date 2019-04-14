"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Testing = require("@singleware/testing");
const Rules = require("./rules");
const Char = require("./rules/char");
const String = require("./rules/string");
const Data = require("./rules/data");
const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();
// Test cases for characters
suite.addCase(Char.Any);
suite.addCase(Char.Choice);
suite.addCase(Char.Digit);
suite.addCase(Char.Expect);
suite.addCase(Char.Letter);
suite.addCase(Char.Range);
// Test cases for strings.
suite.addCase(String.Choice);
suite.addCase(String.Digits);
suite.addCase(String.Expect);
suite.addCase(String.Letters);
// Test cases for data.
suite.addCase(Data.End);
suite.addCase(Data.Extract);
suite.addCase(Data.Match);
suite.addCase(Data.Remark);
suite.addCase(Data.Tree);
suite.addCase(Data.Node);
// Test cases for generic rules.
suite.addCase(Rules.All);
suite.addCase(Rules.Any);
suite.addCase(Rules.Decision);
suite.addCase(Rules.Error);
suite.addCase(Rules.False);
suite.addCase(Rules.Not);
suite.addCase(Rules.Option);
suite.addCase(Rules.Reference);
suite.addCase(Rules.Repeat);
suite.addCase(Rules.Success);
suite.addCase(Rules.True);
(async function () {
    const report = await suite.perform();
    logger.print(report);
    process.exitCode = report.errors > 0 ? 1 : 0;
})();
//# sourceMappingURL=suite.js.map