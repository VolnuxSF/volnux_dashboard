"use client"

type Token = {
  type: "keyword" | "string" | "comment" | "function" | "decorator" | "number" | "operator" | "text"
  value: string
}

function tokenizePython(code: string): Token[] {
  const tokens: Token[] = []
  const keywords =
    /\b(from|import|def|class|return|if|else|elif|for|while|in|as|with|try|except|finally|raise|async|await|yield|lambda|pass|break|continue|and|or|not|is|None|True|False)\b/g
  const strings = /(["'`])(?:(?=(\\?))\2.)*?\1/g
  const comments = /#.*/g
  const decorators = /@\w+/g
  const functions = /\b([a-zA-Z_]\w*)\s*(?=\()/g
  const numbers = /\b\d+\.?\d*\b/g

  let lastIndex = 0
  const matches: Array<{ index: number; length: number; type: Token["type"]; value: string }> = []

  // Collect all matches
  let match
  while ((match = strings.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "string", value: match[0] })
  }
  while ((match = comments.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "comment", value: match[0] })
  }
  while ((match = decorators.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "decorator", value: match[0] })
  }
  while ((match = keywords.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "keyword", value: match[0] })
  }
  while ((match = functions.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[1].length, type: "function", value: match[1] })
  }
  while ((match = numbers.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "number", value: match[0] })
  }

  // Sort by index
  matches.sort((a, b) => a.index - b.index)

  // Build tokens
  matches.forEach((m) => {
    if (m.index > lastIndex) {
      tokens.push({ type: "text", value: code.slice(lastIndex, m.index) })
    }
    tokens.push({ type: m.type, value: m.value })
    lastIndex = m.index + m.length
  })

  if (lastIndex < code.length) {
    tokens.push({ type: "text", value: code.slice(lastIndex) })
  }

  return tokens
}

function tokenizePointy(code: string): Token[] {
  const tokens: Token[] = []
  // Operators: |->, ->, ||
  const operators = /(\|->|->|\|\|)/g
  const comments = /#.*/g
  const numbers = /\b[0-9]\b/g
  // Event names (capitalized words)
  const eventNames = /\b([A-Z][a-zA-Z0-9]*)\b/g

  let lastIndex = 0
  const matches: Array<{ index: number; length: number; type: Token["type"]; value: string }> = []

  // Collect all matches
  let match
  while ((match = comments.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "comment", value: match[0] })
  }
  while ((match = operators.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "operator", value: match[0] })
  }
  while ((match = numbers.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "number", value: match[0] })
  }
  while ((match = eventNames.exec(code)) !== null) {
    matches.push({ index: match.index, length: match[0].length, type: "function", value: match[0] })
  }

  // Sort by index, then by length (longer matches first to handle overlaps)
  matches.sort((a, b) => a.index - b.index || b.length - a.length)

  // Remove overlapping matches
  const filteredMatches: typeof matches = []
  let lastEnd = 0
  for (const m of matches) {
    if (m.index >= lastEnd) {
      filteredMatches.push(m)
      lastEnd = m.index + m.length
    }
  }

  // Build tokens
  lastIndex = 0
  filteredMatches.forEach((m) => {
    if (m.index > lastIndex) {
      tokens.push({ type: "text", value: code.slice(lastIndex, m.index) })
    }
    tokens.push({ type: m.type, value: m.value })
    lastIndex = m.index + m.length
  })

  if (lastIndex < code.length) {
    tokens.push({ type: "text", value: code.slice(lastIndex) })
  }

  return tokens
}

interface SyntaxHighlighterProps {
  code: string
  language?: string
}

export function SyntaxHighlighter({ code, language = "python" }: SyntaxHighlighterProps) {
  const tokens = language === "pointy" ? tokenizePointy(code) : tokenizePython(code)

  return (
    <code>
      {tokens.map((token, i) => {
        const className =
          token.type === "keyword"
            ? "text-primary"
            : token.type === "string"
              ? "text-accent"
              : token.type === "comment"
                ? "text-muted-foreground italic"
                : token.type === "function"
                  ? "text-chart-3"
                  : token.type === "decorator"
                    ? "text-chart-4"
                    : token.type === "number"
                      ? "text-chart-5"
                      : token.type === "operator"
                        ? "text-primary font-bold"
                        : "text-foreground"

        return (
          <span key={i} className={className}>
            {token.value}
          </span>
        )
      })}
    </code>
  )
}
