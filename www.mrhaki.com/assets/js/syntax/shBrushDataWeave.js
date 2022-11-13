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
SyntaxHighlighter.brushes.DataWeave = function()
{
    var keywords =  '--- do from fun import ' +
                    'output var';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments,    css: 'comments' },      // one line comments
        { regex: SyntaxHighlighter.regexLib.multiLineCComments,     css: 'comments' },      // multiline comments
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },        // strings
        { regex: SyntaxHighlighter.regexLib.singleQuotedString,     css: 'string' },        // strings
        { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,             css: 'value' },         // numbers
        { regex: /^(%dw 2\.0)$/gm,                                  css: 'preprocessor' },      // header
        { regex: new RegExp(this.getKeywords(keywords), 'gm'),      css: 'keyword' }        // java keyword
        ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.DataWeave.prototype    = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.DataWeave.aliases      = ['dwl', 'dw', 'dataweave'];
