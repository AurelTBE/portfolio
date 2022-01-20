import React from 'react'

interface Props {
    
}

const BG = (props: Props) => {
    return (
        <div className='h-full w-full fixed z-1'>
            <div>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <path id="blob" d="M402,337Q351,424,257,412Q163,400,88,325Q13,250,86,171.5Q159,93,266.5,64.5Q374,36,413.5,143Q453,250,402,337Z" fill="#d1d8e0"></path>
                </svg>
            </div>

        </div>
    )
}

export default BG
