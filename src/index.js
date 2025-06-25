export const project = {
  slug: "sap-rest-integration-client",
  title: "SAP REST Integration Client",
  description: ".NET client for consuming SAP REST services.",
  features: [
  "Employee fetch",
  "Customer fetch",
  "Basic authentication",
  "Error handling",
  "DTO mapping",
  "Caching"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
