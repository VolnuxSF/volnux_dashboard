"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Clock } from "lucide-react"

export function WorkflowVisualization() {
  return (
    <section className="py-24 md:py-32 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Visualize Your Workflows</h2>
            <p className="text-lg text-muted-foreground">
              Track execution flow and monitor pipeline health in real-time
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20 border-border/50">
            <div className="space-y-8">
              {/* Workflow Steps */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <WorkflowStep icon={CheckCircle2} title="Extract Data" status="completed" time="2.3s" />
                <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                <WorkflowStep icon={Clock} title="Transform Data" status="running" time="1.8s" />
                <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                <WorkflowStep icon={Clock} title="Load Data" status="pending" time="--" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98.5%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">4.2s</div>
                  <div className="text-sm text-muted-foreground">Avg Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">1.2K</div>
                  <div className="text-sm text-muted-foreground">Daily Runs</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function WorkflowStep({
  icon: Icon,
  title,
  status,
  time,
}: {
  icon: any
  title: string
  status: "completed" | "running" | "pending"
  time: string
}) {
  const statusColors = {
    completed: "text-primary bg-primary/10 border-primary/20",
    running: "text-accent bg-accent/10 border-accent/20 animate-pulse",
    pending: "text-muted-foreground bg-muted border-border",
  }

  return (
    <div className="flex flex-col items-center gap-3 min-w-[140px]">
      <div className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 ${statusColors[status]}`}>
        <Icon className="h-8 w-8" />
      </div>
      <div className="text-center">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{time}</div>
      </div>
    </div>
  )
}
