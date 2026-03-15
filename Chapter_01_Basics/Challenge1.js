function printSummary(results){
    let passed =0;
    let failed =0;
    let skipped =0;
    let totalDuration =0;
    let failedSteps =[];

    for(let eachStep of results){
        totalDuration += eachStep.durationMs;
        if(eachStep.status ==="passed"){
            passed++
        }else if(eachStep.status ==="failed"){
            failed++
            failedSteps.push(eachStep.name)
        }else if(eachStep.status ==="skipped"){
            skipped++;
        }

    }
    console.log(`Total Steps:  ${results.length}`+
        ` Passed: ${passed}` +
        ` Failed: ${failed}`+
        ` skipped: ${skipped}` +
        ` Total Duration: ${totalDuration}` +
        `Failed steps : ${failedSteps.join(",")}`
    )
}

const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 },
  { name: "test", status: "failed", durationMs: 0 }
];
printSummary(results)