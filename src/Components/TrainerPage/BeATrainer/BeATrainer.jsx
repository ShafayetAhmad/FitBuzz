const BeATrainer = () => {
  const handleImageLink = (e) => {
    console.log(e?.target?.files);
  };
  return (
    <div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="name"
            placeholder="Full Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email: dummy@mail.com</span>
          </label>
        </div>
        <label className="label">
          <span className="label-text">Profile Picture</span>
        </label>
        <input
          type="file"
          className="border-4 border-black"
          onChange={handleImageLink}
          alt=""
        />
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-orange-500 border-none text-2xl font-bold text-black">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeATrainer;
