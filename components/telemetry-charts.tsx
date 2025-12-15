"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const executionData = [
  { time: "10:30", events: 45, success: 42, failed: 3 },
  { time: "10:35", events: 52, success: 50, failed: 2 },
  { time: "10:40", events: 48, success: 46, failed: 2 },
  { time: "10:45", events: 61, success: 58, failed: 3 },
  { time: "10:50", events: 55, success: 53, failed: 2 },
  { time: "10:55", events: 58, success: 56, failed: 2 },
  { time: "11:00", events: 63, success: 61, failed: 2 },
]

const performanceData = [
  { pipeline: "Data Proc", avgTime: 2.4, p95: 4.2 },
  { pipeline: "ETL", avgTime: 3.1, p95: 5.8 },
  { pipeline: "Batch", avgTime: 5.2, p95: 8.1 },
  { pipeline: "Analytics", avgTime: 1.8, p95: 3.2 },
]

const throughputData = [
  { time: "10:30", throughput: 156 },
  { time: "10:35", throughput: 178 },
  { time: "10:40", throughput: 165 },
  { time: "10:45", throughput: 192 },
  { time: "10:50", throughput: 184 },
  { time: "10:55", throughput: 201 },
  { time: "11:00", throughput: 215 },
]

export function TelemetryCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Event Execution</CardTitle>
          <CardDescription>Success and failure rates over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={executionData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="time" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Area
                type="monotone"
                dataKey="success"
                stackId="1"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="failed"
                stackId="1"
                stroke="hsl(var(--destructive))"
                fill="hsl(var(--destructive))"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pipeline Performance</CardTitle>
          <CardDescription>Average and P95 execution times (seconds)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="pipeline" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Bar dataKey="avgTime" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="p95" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>System Throughput</CardTitle>
          <CardDescription>Events processed per minute</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={throughputData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="time" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Line
                type="monotone"
                dataKey="throughput"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
