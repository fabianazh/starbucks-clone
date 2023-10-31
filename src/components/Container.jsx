/* eslint-disable react/prop-types */
export const Container = ({ children, customClass }) => {
    return (
        <section
            className={`h-auto w-screen Font3 xl:gap-0 gap-4 grid-flow-row grid xl:grid-cols-2 my-8 ${customClass}`}
        >
            {children}
        </section>
    )
}

export const Image = ({ children, customClass }) => {
    return (
        <div className={`${customClass} w-full order-first h-auto`}>
            {children}
        </div>
    )
}

export const Content = ({ children, customClass }) => {
    return <div className={`w-full h-auto ${customClass}`}>{children}</div>
}

Container.Image = Image
Container.Content = Content
