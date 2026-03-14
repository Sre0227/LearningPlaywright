function printSummary(results) {
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let totalDuration = 0;
  let failedSteps = [];

  for (const step of results) {
    totalDuration += step.durationMs;

    if (step.status === "passed") passed++;
    else if (step.status === "failed") {
      failed++;
      failedSteps.push(step.name);
    }
    else if (step.status === "skipped") skipped++;
  }

  console.log(
    `Total Steps: ${results.length} ` +
    `Passed: ${passed} ` +
    `Failed: ${failed} ` +
    `Skipped: ${skipped} ` +
    `Total Duration: ${totalDuration}ms ` +
    `Failed Steps: ${failedSteps.join(", ")}`
  );
}
const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

printSummary(results);