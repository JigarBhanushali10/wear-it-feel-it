const loginVideo = require('../../assets/video/footballV1.mp4')

/**
 * @name LoginVideo 
 * @returns Jsx Login video component
 */
export const LoginVideo = () => {
    return <>
        <video className='loginVideo p-2 overflow-hidden d-none d-xl-block col-xl-9 ' loop autoPlay >
            <source src={loginVideo} type="video/mp4" />
            Your browser does not support HTML video.
        </video>
    </>
}
