export type CodeToken = { text: string; className?: string };

const PY_KEYWORDS =
  "def|class|return|if|elif|else|for|while|try|except|raise|async|await|import|from|as|with|in|not|and|or|self|True|False|None|pass|lambda";

const PY_PATTERN = new RegExp(
  `(#.*$)|("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')|\\b(${PY_KEYWORDS})\\b|\\b(\\d+(?:\\.\\d+)?)\\b`,
  "gm",
);

export function highlightPython(code: string): CodeToken[] {
  const tokens: CodeToken[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  PY_PATTERN.lastIndex = 0;

  while ((match = PY_PATTERN.exec(code))) {
    if (match.index > lastIndex) {
      tokens.push({ text: code.slice(lastIndex, match.index) });
    }
    if (match[1]) tokens.push({ text: match[1], className: "text-zinc-500" });
    else if (match[2]) tokens.push({ text: match[2], className: "text-emerald-400" });
    else if (match[3]) tokens.push({ text: match[3], className: "text-sky-400" });
    else if (match[4]) tokens.push({ text: match[4], className: "text-amber-400" });
    lastIndex = PY_PATTERN.lastIndex;
  }

  if (lastIndex < code.length) {
    tokens.push({ text: code.slice(lastIndex) });
  }

  return tokens;
}
