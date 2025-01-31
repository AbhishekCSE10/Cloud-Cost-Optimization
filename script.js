// Sample data
const features = [
  {
    icon: "shield-check",
    title: "Enhanced Security",
    description: "Implement hybrid encryption and least-privilege access to protect your cloud assets.",
  },
  {
    icon: "zap",
    title: "Real-time Insights",
    description: "Access live dashboards with sub-100ms latency for immediate decision-making.",
  },
  {
    icon: "bar-chart",
    title: "Predictive Analytics",
    description: "Leverage LSTM models for 95% forecast accuracy in cloud usage and costs.",
  },
  {
    icon: "settings",
    title: "Auto-Remediation",
    description: "Implement ML-driven resource optimization to reduce waste and overspending.",
  },
]

const costs = [
  { id: 1, amount: 1500, category: "Compute", description: "EC2 Instances" },
  { id: 2, amount: 800, category: "Storage", description: "S3 Buckets" },
  { id: 3, amount: 500, category: "Networking", description: "Data Transfer" },
  { id: 4, amount: 300, category: "Database", description: "RDS Instances" },
]

const optimizationSuggestions = [
  { id: 1, suggestion: "Rightsize underutilized EC2 instances", potentialSavings: 200 },
  { id: 2, suggestion: "Use S3 Intelligent-Tiering for infrequently accessed data", potentialSavings: 100 },
  { id: 3, suggestion: "Implement VPC endpoints to reduce data transfer costs", potentialSavings: 50 },
  { id: 4, suggestion: "Migrate to Aurora Serverless for variable workloads", potentialSavings: 75 },
]

// Helper function to create SVG icons
function createSvgIcon(name) {
  const svgNS = "http://www.w3.org/2000/svg"
  const svg = document.createElementNS(svgNS, "svg")
  svg.setAttribute("xmlns", svgNS)
  svg.setAttribute("width", "24")
  svg.setAttribute("height", "24")
  svg.setAttribute("viewBox", "0 0 24 24")
  svg.setAttribute("fill", "none")
  svg.setAttribute("stroke", "currentColor")
  svg.setAttribute("stroke-width", "2")
  svg.setAttribute("stroke-linecap", "round")
  svg.setAttribute("stroke-linejoin", "round")

  let path
  switch (name) {
    case "shield-check":
      path = document.createElementNS(svgNS, "path")
      path.setAttribute("d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")
      svg.appendChild(path)
      const polyline = document.createElementNS(svgNS, "polyline")
      polyline.setAttribute("points", "9 12 11 14 15 10")
      svg.appendChild(polyline)
      break
    case "zap":
      path = document.createElementNS(svgNS, "path")
      path.setAttribute("d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z")
      svg.appendChild(path)
      break
    case "bar-chart":
      path = document.createElementNS(svgNS, "path")
      path.setAttribute("d", "M12 20V10")
      svg.appendChild(path)
      path = document.createElementNS(svgNS, "path")
      path.setAttribute("d", "M18 20V4")
      svg.appendChild(path)
      path = document.createElementNS(svgNS, "path")
      path.setAttribute("d", "M6 20v-4")
      svg.appendChild(path)
      break
    case "settings":
      path = document.createElementNS(svgNS, "circle")
      path.setAttribute("cx", "12")
      path.setAttribute("cy", "12")

      path.setAttribute("r", "3")
      svg.appendChild(path)
      path = document.createElementNS(svgNS, "path")
      path.setAttribute(
        "d",
        "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
      )
      svg.appendChild(path)
      break
    default:
      console.error("Unknown icon:", name)
  }
  return svg
}

// Populate features
const featureGrid = document.querySelector(".feature-grid")
features.forEach((feature) => {
  const featureCard = document.createElement("div")
  featureCard.className = "feature-card"
  featureCard.innerHTML = `
        ${createSvgIcon(feature.icon).outerHTML}
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
    `
  featureGrid.appendChild(featureCard)
})

// Populate costs
const costsGrid = document.getElementById("costs-grid")
costs.forEach((cost) => {
  const costCard = document.createElement("div")
  costCard.className = "cost-card"
  costCard.innerHTML = `
        ${createSvgIcon(cost.category.toLowerCase()).outerHTML}
        <h3>${cost.category}</h3>
        <p>${cost.description}</p>
        <p class="cost-amount">$${cost.amount.toFixed(2)}</p>
    `
  costsGrid.appendChild(costCard)
})

// Populate optimization suggestions
const suggestionsGrid = document.getElementById("suggestions-grid")
optimizationSuggestions.forEach((suggestion) => {
  const suggestionCard = document.createElement("div")
  suggestionCard.className = "suggestion-card"
  suggestionCard.innerHTML = `
        ${createSvgIcon("zap").outerHTML}
        <h3>Optimization Tip</h3>
        <p>${suggestion.suggestion}</p>
        <p class="potential-savings">Potential Savings: $${suggestion.potentialSavings.toFixed(2)}</p>
    `
  suggestionsGrid.appendChild(suggestionCard)
})