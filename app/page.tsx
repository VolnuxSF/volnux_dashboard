import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CodeExample } from "@/components/code-example"
import { WorkflowVisualization } from "@/components/workflow-visualization"
import { Documentation } from "@/components/documentation"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CodeExample />
        <WorkflowVisualization />
        <Documentation />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
