function pushpop(func, target = null) {
    if (target) {
        target.push()
        func()
        target.pop()
    } else {
        push()
        func()
        pop()

    }
}

function mapN(v) {
    return map(v, 0, 1, -1, 1)
}