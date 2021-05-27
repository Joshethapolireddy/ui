import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgInfoFilled24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 9h-2v6h2zm-1-4a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgInfoFilled24.propTypes = {
    color: propTypes.string,
}
export default SvgInfoFilled24
