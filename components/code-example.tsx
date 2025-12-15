import { Card } from "@/components/ui/card"
import { SyntaxHighlighter } from "./syntax-highlighter"

export function CodeExample() {
  const pipelineCode = `from nexus import Pipeline, task

@task
def extract_data(source: str):
    """Extract data from source"""
    return fetch_data(source)

@task
def transform_data(data):
    """Transform and clean data"""
    return process(data)

@task
def load_data(data, target: str):
    """Load data to target"""
    save_to_db(data, target)

# Create pipeline
pipeline = Pipeline("etl_workflow")
pipeline.add_tasks([
    extract_data,
    transform_data,
    load_data
])`

  const eventCode = `from nexus import EventHandler

@EventHandler.on("data.received")
def handle_new_data(event):
    """Process incoming data events"""
    pipeline.run(
        source=event.data["source"]
    )

@EventHandler.on("pipeline.failed")
def handle_failure(event):
    """Handle pipeline failures"""
    notify_team(
        error=event.error,
        pipeline=event.pipeline_id
    )
    
# Start event listener
EventHandler.start()`

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, Pythonic API</h2>
            <p className="text-lg text-muted-foreground">Define workflows with clean, declarative Python code</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6 bg-card border-border/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Define Pipeline</span>
                  <span className="text-xs text-muted-foreground font-mono">pipeline.py</span>
                </div>
                <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                  <SyntaxHighlighter code={pipelineCode} />
                </pre>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Event Handling</span>
                  <span className="text-xs text-muted-foreground font-mono">events.py</span>
                </div>
                <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                  <SyntaxHighlighter code={eventCode} />
                </pre>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
