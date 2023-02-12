// code your solution here


function superbowlWin(stats) {
    let wL = stats.find(item => item.result === "W")
    if (wL) {
        return wL.year
    }
}