/* eslint-disable react/prop-types */
export const Button = ({ children, customClass }) => {
    return <div className={`${customClass} button`}>{children}</div>
}
