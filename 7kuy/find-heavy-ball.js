function findBall(scales) {
    const w1 = scales.getWeight([0, 1, 2], [3, 4, 5]);

    let candidates;

    if (w1 === -1) {
        candidates = [0, 1, 2];
    } else if (w1 === 1) {
        candidates = [3, 4, 5];
    } else {
        candidates = [6, 7];
    }

    if (candidates.length === 2) {
        const w2 = scales.getWeight([candidates[0]], [candidates[1]]);
        return w2 === -1 ? candidates[0] : candidates[1];
    }

    const w2 = scales.getWeight([candidates[0]], [candidates[1]]);

    if (w2 === -1) return candidates[0];
    if (w2 === 1) return candidates[1];

    return candidates[2];
}
