import { CodeBlock } from "./code-block"

export function CodeExample() {
  const pipelineCode = `from volnux import Pipeline, task

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

  const eventCode = `from volnux import EventHandler

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
            <CodeBlock
              code={pipelineCode}
              language="python"
              filename="pipeline.py"
              highlight
            />
            <CodeBlock
              code={eventCode}
              language="python"
              filename="events.py"
              highlight
            />
          </div>
        </div>
      </div>
    </section>
  )
}
