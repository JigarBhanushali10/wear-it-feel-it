
function Header() {
  return (
    <div className='d-flex justify-content-between align-items-center mt-3 px-2 mx-2 px-xl-5 mx-xl-5 flex-wrap '>
      <h2 className='text-uppercase flex-grow-1 flex-item'>
        wear it feel it
      </h2>
        <div className=' globalSearchContainer d-flex me-2 border border-dark  align-items-center flex-item'>
          <span className=" mx-3 icon-search fs-4 text-secondary"></span>
          <input type="text" name="globalSearch" id="globalSearch" className=' border-0  text-secondary' placeholder='search for club or national jersey'  />
        </div>
        <span className="mx-2 justify-content-center align-items-center d-none d-md-flex flex-item">
          Wishlist
        </span>
        <span className='mx-2 d-flex justify-content-center align-items-center flex-item'>
          Cart
        </span>
        <button className='btn btn-dark rounded-0 mx-2 px-md-4 py-md-2 flex-item'>LOGIN</button>
    </div>
  )
}

export default Header