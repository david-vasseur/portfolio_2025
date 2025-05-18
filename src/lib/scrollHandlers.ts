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

export const createTouchHandler = () => {
    
}
