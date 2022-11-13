/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.0.296 (March 01 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/licenses/>.
 */
 SyntaxHighlighter.brushes.Yaml = function()
 {
     var constants   = '~ true false on off';
 
     this.regexList = [
        { regex: regexLib.singleLinePerlComments, css: 'comments' },      // comment
        { regex: regexLib.doubleQuotedString,     css: 'string' },        // double quoted string
        { regex: regexLib.singleQuotedString,     css: 'string' },        // single quoted string
        { regex: /^\s*([a-z0-9\._-])+\s*:/gmi,                      css: 'variable' },      // key
        { regex: /\s?(\.)([a-z0-9\._-])+\s?:/gmi,                   css: 'comments' },      // section
        { regex: /\s(@|:)([a-z0-9\._-])+\s*$/gmi,                   css: 'variable bold' }, // variable, reference
        { regex: /\s+\d+\s?$/gm,                                    css: 'color2 bold' },   // integers
        { regex: /(\{|\}|\[|\]|,|~|:)/gm,                           css: 'constants' },     // inline hash and array, comma, null
        { regex: /^\s+(-)+/gm,                                      css: 'string bold' },   // array list entry
        { regex: /^---/gm,                                          css: 'string bold' },   // category
        { regex: new RegExp(this.getKeywords(constants), 'gmi'),    css: 'constants' }      // constants
    ];
 };
 
 SyntaxHighlighter.brushes.Yaml.prototype = new SyntaxHighlighter.Highlighter();
 SyntaxHighlighter.brushes.Yaml.aliases	= ['yaml', 'yml'];
 
 