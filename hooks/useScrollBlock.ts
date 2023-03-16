
const useScrollBlock = () => {


    const blockScroll = () => {
        //отключаем снап эффект при авто скролле

        if (typeof document === "undefined") return
        const { body } = document
        body.addEventListener('mousewheel',  MouseWheelHandler, { passive: false })

    }
    const allowScroll = () => {
        //включаем снап эффект при авто скролле


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