

const BillingDetails = () => {

    return (


        <div>

<button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box max-w-lg w-full">
    <form method="dialog" className="space-y-4">
      {/* Modal close button */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      
      <h3 className="font-bold text-lg text-center">Fill Your Details</h3>
      
      {/* Name Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      {/* Address Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input 
          type="text" 
          placeholder="Enter your address" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      {/* City Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">City</span>
        </label>
        <input 
          type="text" 
          placeholder="Enter your city" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      {/* Phone Number Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input 
          type="tel" 
          placeholder="Enter your phone number" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      {/* Email Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      {/* Submit Button */}
      <div className="form-control mt-4">
        <button className="btn btn-primary w-full">Submit</button>
      </div>
    </form>
  </div>
</dialog>

            
        </div>
    );
};

export default BillingDetails;