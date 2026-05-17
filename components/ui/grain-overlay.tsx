/**
 * Fixed SVG-noise overlay. Non-negotiable on every dark surface.
 * Rendered once at the root. Filtered for reduced motion users by base CSS.
 */
export function GrainOverlay() {
  return <div className="grain" aria-hidden="true" />;
}
