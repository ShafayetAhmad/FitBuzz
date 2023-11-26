const Featured = () => {
  return (
      <>
            <h1 className="text-4xl text-black font-bold text-center mt-16">Featured</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-16">
        <div className="bg-white rounded-lg overflow-hidden shadow-md  border-4 border-orange-600">
          <img
            src="https://i.ibb.co/0J7kjkt/featured-img-4.jpg"
            className="w-full h-64 object-cover hover:scale-110 transition-transform"
          />
          <div className="p-4  text-center">
            <h2 className="text-xl font-bold mb-2">BODY BUILDING | ANALYSE YOUR GOAL</h2>
            <p className="text-gray-600">
              Fitness is not about being better than someone else; it is about
              being better than you used to be.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border-4 border-orange-600">
          <img
            src="https://i.ibb.co/P5P1NPz/featured-img-5.jpg"
            className="w-full h-64 object-cover hover:scale-110 transition-transform"
            alt="Fitness Image 2"
          />
          <div className="p-4  text-center">
            <h2 className="text-xl font-bold mb-2">MUSCULATION | WORK HARD ON IT</h2>
            <p className="text-gray-600">
              Take care of your body. It is the only place you have to live.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border-4 border-orange-600">
          <img
            src="https://i.ibb.co/DVSqXjV/featured-img-6.webp"
            className="w-full h-64 object-cover hover:scale-110 transition-transform"
            alt="Fitness Image 3"
          />
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-2">
              FITNESS RUNNING | SIMPROVE YOUR PERFORMANCE
            </h2>
            <p className="text-gray-600">
              The only bad workout is the one that did not happen.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-16">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md  border-4 border-orange-600">
            <img
              src="https://i.ibb.co/0J7kjkt/featured-img-4.jpg"
              className="w-full h-64 object-cover hover:scale-110 transition-transform"
            />
            <div className="p-4  text-center">
              <h2 className="text-xl font-bold mb-2">WEIGHT LIFTING | ACHIEVE YOUR DESTINY</h2>
              <p className="text-gray-600">
                Fitness is not about being better than someone else; it is about
                being better than you used to be.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md border-4 border-orange-600">
            <img
              src="https://i.ibb.co/P5P1NPz/featured-img-5.jpg"
              className="w-full h-64 object-cover hover:scale-110 transition-transform"
              alt="Fitness Image 2"
            />
            <div className="p-4  text-center">
              <h2 className="text-xl font-bold mb-2">BODY BUILDING | WORK HARD ON IT</h2>
              <p className="text-gray-600">
                Take care of your body. It is the only place you have to live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
