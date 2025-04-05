import Navbar from '../../Components/Navbar'

  const index = () => {
    return (
      <div >
        <div className="relative h-[700px]">
          <div className="absolute top-0 left-0 w-full z-10">
            <Navbar />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
          <img 
            src="https://cdn.f45training.com/f45challenge/uploads/2020/05/29234011/Untitled-design-193.png" 
            alt="Background" 
            className="w-full h-full object-cover z-0 "
          />
        </div>
      </div>
    );
  };


  export default index