import { useState, useEffect } from 'react';

function useSwipe() {

    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState('');

    useEffect(() => {
        function handleTouchStart(event) {
            setTouchStartY(event.touches[0].clientY);
        }

        function handleTouchEnd(event) {
            setTouchEndY(event.changedTouches[0].clientY);
            handleSwipeGesture();
        }

        function handleSwipeGesture() {
            const yDifference = touchEndY - touchStartY;
            const yDifferenceAbs = Math.abs(yDifference);

            if (yDifferenceAbs > 50) {
                if (yDifference > 0) {
                    setSwipeDirection('down');
                } else {
                    setSwipeDirection('up');
                }
            }
        }

        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchend', handleTouchEnd, false);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };

    }, [touchStartY, touchEndY]);

    return [swipeDirection, touchEndY];
}

export default useSwipe;
