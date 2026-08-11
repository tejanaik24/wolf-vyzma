import { Agentation } from "agentation";

export function DevAnnotations() {
  if (!import.meta.env.DEV) return null;
  return <Agentation endpoint="http://localhost:4747" />;
}
