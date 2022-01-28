
function superbowlWin(record) {
    let found = record.find(r => r.result === "W")
    return !!found ? found.year : undefined
}