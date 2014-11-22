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
SyntaxHighlighter.brushes.Asciidoc = function()
{
    var labels = 'NOTE CAUTION WARNING TIP IMPORTANT';

    var macros = 'include image icon kbd menu ifdef endif ifndef ifeval';

    this.regexList = [
        { regex: /^\/\/\/\/[\n\s\S]*?\/\/\/$/gm, css: 'comments'},
        { regex: /^\/\/(\s|\w).*$/gm,    css: 'comments' },         // one line comments
        { regex: /^\..*$/gm, css: 'string'}, // title
        { regex: /^={1,5} .*$/gm, css: 'string'}, // header
        { regex: /^\:.*\:/gm, css: 'variable'}, // attribute
        { regex: /{.*}/gm, css: 'variable'}, // attribute
        { regex: /\[([^\\\[\n]|\\.)*\]/gm, css: 'functions'}, // block attributes
        { regex: new RegExp(this.getKeywords(labels), 'gm'), css: 'string'},
        { regex: new RegExp(this.getKeywords(macros), 'gm'), css: 'string'}
        ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};

SyntaxHighlighter.brushes.Asciidoc.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Asciidoc.aliases = ['asciidoc', 'adoc'];
