import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, GitBranch, Activity, Lock, Gauge, Blocks } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Event-Driven Architecture",
    description:
      "Build reactive workflows that respond to events in real-time with powerful event handling and routing capabilities.",
  },
  {
    icon: GitBranch,
    title: "Pipeline Orchestration",
    description:
      "Define complex workflows with dependencies, parallel execution, and conditional branching using intuitive Python decorators.",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Track pipeline execution with built-in telemetry, metrics collection, and comprehensive logging for full observability.",
  },
  {
    icon: Lock,
    title: "Reliable Execution",
    description:
      "Automatic retry mechanisms, error handling, and state management ensure your workflows run reliably at scale.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description:
      "Optimized for speed with async support, efficient resource utilization, and minimal overhead for production workloads.",
  },
  {
    icon: Blocks,
    title: "Extensible Design",
    description:
      "Plugin architecture and custom operators let you extend Nexus to fit your specific workflow requirements.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to orchestrate workflows
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed for modern data engineering and automation workflows
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
