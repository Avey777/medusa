"use client"

import React from "react"
import { WorkflowStepUi } from "types"
import { WorkflowDiagramStepNode } from "../../Common/Node"
import { WorkflowDiagramLine } from "../../Common/Line"

export type WorkflowDiagramDepthProps = {
  cluster: WorkflowStepUi[]
  next: WorkflowStepUi[]
}

export const WorkflowDiagramDepth = ({
  cluster,
  next,
}: WorkflowDiagramDepthProps) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col justify-center gap-y-docs_0.5">
        {cluster.map((step, index) => (
          <WorkflowDiagramStepNode key={`${step.name}-${index}`} step={step} />
        ))}
      </div>
      <WorkflowDiagramLine step={next} />
    </div>
  )
}
