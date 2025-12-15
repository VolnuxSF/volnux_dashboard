"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const pipelines = [
  {
    id: 1,
    name: "Data Processing Pipeline",
    status: "running",
    events: 45,
    lastRun: "2 minutes ago",
    schedule: "*/5 * * * *",
  },
  {
    id: 2,
    name: "ETL Workflow",
    status: "running",
    events: 23,
    lastRun: "5 minutes ago",
    schedule: "0 */1 * * *",
  },
  {
    id: 3,
    name: "Batch Processing",
    status: "paused",
    events: 67,
    lastRun: "1 hour ago",
    schedule: "0 0 * * *",
  },
  {
    id: 4,
    name: "Real-time Analytics",
    status: "running",
    events: 12,
    lastRun: "30 seconds ago",
    schedule: "Event-driven",
  },
]

export function PipelineList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Pipelines</CardTitle>
        <CardDescription>Monitor and manage your workflow pipelines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pipelines.map((pipeline) => (
            <div
              key={pipeline.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{pipeline.name}</h3>
                  <Badge
                    variant={pipeline.status === "running" ? "default" : "secondary"}
                    className={pipeline.status === "running" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {pipeline.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{pipeline.events} events</span>
                  <span>•</span>
                  <span>Last run: {pipeline.lastRun}</span>
                  <span>•</span>
                  <span className="font-mono text-xs">{pipeline.schedule}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className={pipeline.status === "running" ? "text-primary" : ""}>
                  {pipeline.status === "running" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Pipeline</DropdownMenuItem>
                    <DropdownMenuItem>View Logs</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
