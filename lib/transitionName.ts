// Pairs an element on one page with its twin on the next, so it glides
// between them (see components/PageTransition.tsx).
export const transitionName = (name: string) => ({ viewTransitionName: name }) as React.CSSProperties;
