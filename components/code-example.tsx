import { CodeBlock } from "./code-block"

export function CodeExample() {
  const pipelineCode = `from volnux import Pipeline
from volnux import EventBase
from volnux.fields import InputDataField

class ExtractData(EventBase):
    def process(self, source: str):
        """Extract data from source"""
        return True, fetch_data(source)

class TransformData(EventBase):
    def process(self, data):
        """Transform and clean data"""
        return True, process(data)

class LoadData(EventBase):
    def process(self, data):
        """Load data to destination"""
        save_to_db(data)
        return True, "Data loaded"

class ETLPipeline(Pipeline):
    source = InputDataField(data_type=str, required=True)
    
    class Meta:
        file = "ETLPipeline.pty"`

  const pointyCode = `# Sequential flow
ExtractData -> TransformData -> LoadData

# Parallel execution
ExtractData || ValidateSchema

# Pipe results to next event
ExtractData |-> TransformData

# Conditional branching (on TransformData result)
ExtractData -> TransformData (
    0 -> HandleError,
    1 -> LoadData
)

# Complex workflow with retry
ExtractData -> TransformData (
    0 -> TransformData * 3,
    1 -> LoadData
) -> Cleanup`

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Declarative Workflow Definition</h2>
            <p className="text-lg text-muted-foreground">Define complex workflows with the intuitive Pointy Language DSL</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <CodeBlock
              code={pipelineCode}
              language="python"
              filename="pipeline.py"
              highlight
            />
            <CodeBlock
              code={pointyCode}
              language="pointy"
              filename="ETLPipeline.pty"
              highlight
            />
          </div>
        </div>
      </div>
    </section>
  )
}
