
const useScrollBlock = () => {


    const blockScroll = () => {
        if (typeof document === "undefined") return
        const { body } = document
        body.addEventListener('mousewheel',  MouseWheelHandler, { passive: false })
    }
    const allowScroll = () => {
        if (typeof document === "undefined") return
        const { body } = document
        body.removeEventListener('mousewheel',  MouseWheelHandler, )
    }

    function MouseWheelHandler (e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    }


    return [blockScroll, allowScroll]
}

export { useScrollBlock }