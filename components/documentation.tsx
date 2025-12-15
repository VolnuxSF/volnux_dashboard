import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code2, Rocket, Users } from "lucide-react"
import Link from "next/link"

const docSections = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Quick start guide to build your first workflow in minutes",
    link: "https://github.com/nshaibu/nexus#getting-started",
  },
  {
    icon: Code2,
    title: "API Reference",
    description: "Complete documentation of all classes, methods, and decorators",
    link: "https://github.com/nshaibu/nexus#api-documentation",
  },
  {
    icon: BookOpen,
    title: "Examples",
    description: "Real-world examples and best practices for common use cases",
    link: "https://github.com/nshaibu/nexus/tree/main/examples",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our community, contribute, and get help from other users",
    link: "https://github.com/nshaibu/nexus/discussions",
  },
]

export function Documentation() {
  return (
    <section id="docs" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Comprehensive Documentation</h2>
          <p className="text-lg text-muted-foreground">Everything you need to master Nexus workflow orchestration</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {docSections.map((section) => (
            <Card key={section.title} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">{section.description}</CardDescription>
                <Button variant="ghost" size="sm" asChild className="w-full">
                  <Link href={section.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="https://github.com/nshaibu/nexus" target="_blank" rel="noopener noreferrer">
              View Full Documentation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
