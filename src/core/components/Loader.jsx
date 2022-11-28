import ReactDOM from 'react-dom'

const Loader = () => {
    const loader = document.getElementById('loader')


    return ReactDOM.createPortal(
        <div  className='loader bg-dark  bg-opacity-25 position-absolute top-0 end-0 bottom-0 start-0  d-flex justify-content-center align-items-center'>

            <div className="spinner-border text-primary ">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>,
        loader,
    )
}


export default Loader
