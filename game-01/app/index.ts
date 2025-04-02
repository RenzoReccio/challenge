export function findPairWithSum(M: number[], N: number): number[] | null {
    const seen = new Set<number>();

    for (const num of M) {
        const complement = N - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }

    return null;
}
