import { MutableRefObject, useEffect, useState } from "react";


export const useIntersection = (element: MutableRefObject<HTMLDivElement>, rootMargin: string) => {
    const [isVisible, setState] = useState(false)

    useEffect(() => {
        const current = element?.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            },
            { rootMargin }
        );
        if (current) observer?.observe(current);

        return () => current && observer.unobserve(current);
    }, [element, rootMargin])

    return isVisible
}