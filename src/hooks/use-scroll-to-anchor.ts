import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface UseScrollToAnchorOptions {
  behavior?: "smooth" | "auto";
  offset?: number;
  scrollOnSamePage?: boolean;
}

export const useScrollToAnchor = () => {
  const router = useRouter();

  const scrollToAnchor = useCallback(
    (target: string, options: UseScrollToAnchorOptions = {}) => {
      const { behavior = "smooth", offset = 0, scrollOnSamePage = true } = options;

      try {
        // Parse the target URL
        const url = new URL(target, window.location.origin);
        const pathname = url.pathname;
        const hash = url.hash;

        // Remove leading # from hash if present
        const anchorId = hash.startsWith("#") ? hash.slice(1) : hash;

        // If it's a different page or we want to force navigation
        if (pathname !== window.location.pathname || !scrollOnSamePage) {
          // Navigate to the page with hash
          router.push(pathname + hash);

          // Wait for navigation and scroll
          setTimeout(() => {
            scrollToElement(anchorId, { behavior, offset });
          }, 300); // Slightly longer delay for Next.js page transitions
        } else {
          // Scroll on the same page
          scrollToElement(anchorId, { behavior, offset });
        }
      } catch (error) {
        // Fallback for relative or invalid URLs
        scrollToElement(target, { behavior, offset });
      }
    },
    [router]
  );

  // Helper function to scroll to a specific element
  const scrollToElement = (
    anchor: string,
    options: { behavior?: "smooth" | "auto"; offset?: number }
  ) => {
    const { behavior = "smooth", offset = 0 } = options;

    // Remove leading # if present
    const anchorId = anchor.startsWith("#") ? anchor.slice(1) : anchor;

    // Find the target element
    const targetElement = document.getElementById(anchorId);

    if (targetElement) {
      // Calculate the scroll position with optional offset
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: behavior,
      });
    } else {
      console.warn(`Anchor with id "${anchorId}" not found`);
    }
  };

  return scrollToAnchor;
};
