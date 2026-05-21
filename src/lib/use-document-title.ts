import { useEffect } from "react";

const SUFFIX = " — SqAId";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title.endsWith(SUFFIX) ? title : `${title}${SUFFIX}`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
