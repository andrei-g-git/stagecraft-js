import { nodeModelClasses } from "@/constants/classes"

const anyNestedNodeModels = Object.values(nodeModelClasses);

export type AnyNestedNodeModel = typeof anyNestedNodeModels[number];