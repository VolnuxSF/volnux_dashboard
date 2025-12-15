"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const nodes = [
      { x: 50, y: 100, label: "Extract", progress: 0 },
      { x: 200, y: 100, label: "Transform", progress: 0 },
      { x: 350, y: 100, label: "Load", progress: 0 },
    ]

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.02
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2)

      // Draw connections with flowing particles
      for (let i = 0; i < nodes.length - 1; i++) {
        const from = nodes[i]
        const to = nodes[i + 1]

        // Connection line
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--border").trim()
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(from.x + 30, from.y)
        ctx.lineTo(to.x - 30, to.y)
        ctx.stroke()

        // Flowing particle
        const progress = (Math.sin(time + i) + 1) / 2
        const particleX = from.x + 30 + (to.x - from.x - 60) * progress
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()
        ctx.beginPath()
        ctx.arc(particleX, from.y, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw nodes
      nodes.forEach((node, i) => {
        const isActive = Math.sin(time + i * 0.5) > 0

        // Node circle
        ctx.fillStyle = isActive
          ? getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()
          : getComputedStyle(document.documentElement).getPropertyValue("--muted").trim()
        ctx.beginPath()
        ctx.arc(node.x, node.y, 25, 0, Math.PI * 2)
        ctx.fill()

        // Node label
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim()
        ctx.font = "12px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(node.label, node.x, node.y + 45)
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <canvas ref={canvasRef} className="w-full max-w-md h-48" />
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-muted-foreground">Open Source Workflow Orchestration</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Event-Driven Workflows, <span className="text-primary">Simplified</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Build powerful, scalable workflow automation with Python. Nexus provides event-based orchestration,
            real-time monitoring, and seamless integration for modern data pipelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Terminal className="h-4 w-4" />
              View Documentation
            </Button>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm">
              <span className="text-muted-foreground">$</span>
              <span>pip install nexus-workflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
