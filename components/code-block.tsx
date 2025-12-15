"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { SyntaxHighlighter } from "./syntax-highlighter"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showPrompt?: boolean
  highlight?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showPrompt = false,
  highlight = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // For bash commands, show prompt by default
  const shouldShowPrompt = showPrompt || (language === "bash" && !highlight)

  return (
    <div className={`relative rounded-lg border border-border bg-card font-mono text-sm ${className ?? ""}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{language}</span>
          {filename && <span className="text-xs text-muted-foreground">{filename}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="px-4 py-3 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          {highlight ? (
            <SyntaxHighlighter code={code} language={language} />
          ) : (
            <code>
              {shouldShowPrompt && <span className="text-muted-foreground">$ </span>}
              {code}
            </code>
          )}
        </pre>
      </div>
    </div>
  )
}
