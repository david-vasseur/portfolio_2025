export const createWheelHandler = (setCurrentIndex: (updater: (prev: number) => number) => void, childrenCount: number, isScrollingRef: React.RefObject<boolean>): ((e: WheelEvent) => void) => {
	const handleWheel = (e: WheelEvent) => {
		if (isScrollingRef.current) return;

		isScrollingRef.current = true;

		const maxIndex = childrenCount - 1;

		setTimeout(() => {
			isScrollingRef.current = false;
		}, 600);

		if (e.deltaY > 0) {
			setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
		} else {
			setCurrentIndex((prev) => Math.max(prev - 1, 0));
		}
	};

    return handleWheel;
}

export const createTouchHandler = (setCurrentIndex: (updater: (prev: number) => number) => void, childrenCount: number, touchStartY: React.RefObject<number | null>, touchEndY: React.RefObject<number | null>, isScrollingRef: React.RefObject<boolean>): 
    { 
        handleTouchStart: (e: TouchEvent) => void;
        handleTouchMove: (e: TouchEvent) => void;
        handleTouchEnd: (e: TouchEvent) => void; 
    } => {

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            touchEndY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = () => {
            if (touchStartY.current === null || touchEndY.current === null) return;
            if (isScrollingRef.current) return;

            const distance = touchStartY.current - touchEndY.current;
            const threshold = 50; 

            const maxIndex = childrenCount - 1;

            isScrollingRef.current = true;
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 600);

            if (distance > threshold) {
                setCurrentIndex((prev: number) => Math.min(prev + 1, maxIndex));
            } else if (distance < -threshold) {
                setCurrentIndex((prev: number) => Math.max(prev - 1, 0));
            }

            touchStartY.current = null;
            touchEndY.current = null;
        };

    return { handleTouchStart, handleTouchMove, handleTouchEnd }
}
