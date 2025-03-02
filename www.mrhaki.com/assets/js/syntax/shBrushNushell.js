SyntaxHighlighter.brushes.Nushell = function()
{
	var keywords =	'if let match where select in while loop each try return';
	var commands =  'str kebab-case snake-case up-case ' +
                    'use ' +
                    'version check'
					;
    var operators =	'== != > < => <=';

	this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },      // comment
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
        { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,             css: 'value' },         // numbers
		{ regex: new RegExp(this.getKeywords(operators), 'gm'),			css: 'color1' },			// operators and such
        { regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
		{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' }		// commands
		];
}

SyntaxHighlighter.brushes.Nushell.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Nushell.aliases		= ['nushell', 'nu'];

