"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CheckCircle2, Clock, AlertCircle } from "lucide-react"

const metrics = [
  {
    title: "Active Pipelines",
    value: "12",
    change: "+2 from last hour",
    icon: Activity,
    color: "text-primary",
  },
  {
    title: "Completed Events",
    value: "1,284",
    change: "+156 today",
    icon: CheckCircle2,
    color: "text-accent",
  },
  {
    title: "Avg Execution Time",
    value: "2.4s",
    change: "-0.3s improvement",
    icon: Clock,
    color: "text-chart-3",
  },
  {
    title: "Failed Events",
    value: "3",
    change: "2 retrying",
    icon: AlertCircle,
    color: "text-destructive",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{metric.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
