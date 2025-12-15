"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2, XCircle, Clock, RefreshCw } from "lucide-react"

const events = [
  {
    id: 1,
    name: "ProcessDataEvent",
    pipeline: "Data Processing Pipeline",
    status: "completed",
    duration: "1.2s",
    timestamp: "10:45:23",
  },
  {
    id: 2,
    name: "TransformEvent",
    pipeline: "ETL Workflow",
    status: "running",
    duration: "0.8s",
    timestamp: "10:45:20",
  },
  {
    id: 3,
    name: "ValidateEvent",
    pipeline: "Data Processing Pipeline",
    status: "completed",
    duration: "0.5s",
    timestamp: "10:45:18",
  },
  {
    id: 4,
    name: "LoadDataEvent",
    pipeline: "ETL Workflow",
    status: "failed",
    duration: "2.1s",
    timestamp: "10:45:15",
  },
  {
    id: 5,
    name: "AggregateEvent",
    pipeline: "Real-time Analytics",
    status: "retrying",
    duration: "1.5s",
    timestamp: "10:45:12",
  },
  {
    id: 6,
    name: "NotifyEvent",
    pipeline: "Data Processing Pipeline",
    status: "completed",
    duration: "0.3s",
    timestamp: "10:45:10",
  },
]

const statusConfig = {
  completed: { icon: CheckCircle2, color: "text-accent", bg: "bg-accent/10" },
  running: { icon: Clock, color: "text-primary", bg: "bg-primary/10" },
  failed: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
  retrying: { icon: RefreshCw, color: "text-chart-3", bg: "bg-chart-3/10" },
}

export function EventMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Monitor</CardTitle>
        <CardDescription>Real-time event execution tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {events.map((event) => {
              const config = statusConfig[event.status as keyof typeof statusConfig]
              const Icon = config.icon

              return (
                <div
                  key={event.id}
                  className="flex items-start gap-3 p-3 border border-border rounded-lg bg-card hover:bg-accent/5 transition-colors"
                >
                  <div className={`p-2 rounded-md ${config.bg}`}>
                    <Icon className={`h-4 w-4 ${config.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm font-semibold text-foreground">{event.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {event.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{event.pipeline}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span>{event.duration}</span>
                      <span>•</span>
                      <span>{event.timestamp}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
