
function Card({title, description, image}) {
    return (
        <div className='bg-white  px-[1rem] w-[100%] sm:w-[48%] pb-12 pt-12 md:w-[48%] lg:w-[23%] my-2 rounded-md' >
          <div className="w-[70%]  sm:[40%] md:h-[50%] mx-auto sm:mb-6 md:mb-4">
             <img src={image} alt="Card icon" className="object-cover w-[100%] "/>
          </div>
           <h4 className="mb-3 text-center pt-5 pb-3 text-[#008080]">{title}</h4>
           <p className="text-center ">{description}</p>
        </div>
    );
  }
  
  export default Card;