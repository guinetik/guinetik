import { createSignal, onMount, Show, Suspense } from "solid-js";
import { createLazyLoadObserver } from "../lib/observer";

/**
 * LazySection component that only mounts its children when near viewport.
 * Combines code-splitting with viewport-based rendering for optimal performance.
 * Note: This wrapper doesn't add an ID - the child component should have its own section ID.
 * 
 * @param {Object} props - Component props
 * @param {JSX.Element} props.children - Child components to lazy-load
 * @param {string} props.rootMargin - Distance from viewport to trigger loading (default: 400px)
 * @param {JSX.Element} props.fallback - Loading placeholder (optional)
 * 
 * @example
 * <LazySection rootMargin="600px">
 *   <AboutPage />
 * </LazySection>
 */
const LazySection = (props) => {
  const [shouldLoad, setShouldLoad] = createSignal(false);
  let sectionRef;

  onMount(() => {
    // Create observer that triggers when section approaches viewport
    const observer = createLazyLoadObserver(
      () => {
        setShouldLoad(true);
      },
      { rootMargin: props.rootMargin || '400px' }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }
  });

  return (
    <div ref={sectionRef} class="lazy-section">
      <Suspense fallback={null}>
        <Show when={shouldLoad()}>
          {props.children}
        </Show>
      </Suspense>
    </div>
  );
};

export default LazySection;

