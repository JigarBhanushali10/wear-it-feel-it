import { useEffect } from "react"
import httpServices from "../shared/services/demoservices"


function Cart() {
  useEffect(() => {

    httpServices.getUsers().then(res=> console.log(res)
    )
    return () => {
    }
  }, [])
  return (
    <div className=''>
      <div className='bg-secondary '>
        <div className="container ">
          <div style={{ height: '1000px' }} >
            Cart
          </div>
        </div>
      </div>
        <div className="container " style={{ height: '1000px' }} >
          checkout
        </div>
    </div>)
}

export default Cart