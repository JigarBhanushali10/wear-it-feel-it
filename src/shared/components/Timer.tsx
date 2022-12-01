import React from 'react'

const Timer = ({ timerDays, timerHours, timerMinutes, timerSeconds }: any) => {
    
    return (
        <div className='d-flex align-items-baseline'>
            <div className='me-3 d-flex flex-column align-items-center'>
                <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                    <span>
                        {timerDays}
                    </span>
                </div>
                <div>
                    DAYS
                </div>

            </div>
            <div>
                :
            </div>
            <div className='mx-3 d-flex flex-column align-items-center'>
                <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                    <span>
                        {timerHours}
                    </span>
                </div>
                <div>
                    HRS
                </div>

            </div>
            <div>
                :
            </div>
            <div className='mx-3 d-flex flex-column align-items-center'>
                <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                    <span>
                        {timerMinutes}
                    </span>
                </div>
                <div>
                    MINS
                </div>

            </div>
            <div>
                :
            </div>
            <div className='mx-3 d-flex flex-column align-items-center'>
                <div className='timer d-flex justify-content-center align-items-center rounded-circle bg-white fs-2'>
                    <span>
                        {timerSeconds}
                    </span>
                </div>
                <div>
                    SECS
                </div>

            </div>
        </div>
    )
}

export default Timer