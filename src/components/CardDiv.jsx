const CardDiv = ({title,content,img}) => {
    return (
    <div className='col mb-4 mt-5'>
      <div className='card text-center shadow-lg p-3 h-100'>
        <img src={img} className='card-img-top' style={{height: '150px'}} alt="card" />
        <div className='card-body'>
          <h6 className='card-title'><i class="fa-solid fa-globe"></i> {title}</h6>
          <p className='card-text'>{content}</p>
        </div>
      </div>
    </div>
    )
  }

  export default CardDiv