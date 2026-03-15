
//{ runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }

function getExecutionPlan(allBrowsers,blockedBrowsers){

    const runnable=allBrowsers.filter(bowsername =>!blockedBrowsers.includes(bowsername))
    const blocked=allBrowsers.filter(bowsername =>blockedBrowsers.includes(bowsername))

    const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;
    return{
        runnable,
        blocked,
        plan
    }

}

allBrowsers = ["chromium", "firefox", "webkit"]
blockedBrowsers = ["firefox"]

console.log(getExecutionPlan(allBrowsers,blockedBrowsers))



