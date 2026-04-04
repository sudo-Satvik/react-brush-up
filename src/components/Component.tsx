import React, { useState } from "react";

type TFormData = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  cpassword: string;
};

type TFormValidationData = {
  fname: boolean;
  lname: boolean;
  email: boolean;
  password: boolean;
  cpassword: boolean;
};

const Component = () => {
  const [formData, setFormData] = useState<TFormData>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [formVal, setFormVal] = useState<TFormValidationData>({
    fname: false,
    lname: false,
    email: false,
    password: false,
    cpassword: false,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      fname: !formData.fname.trim(),
      lname: !formData.lname.trim(),
      email: !formData.email.trim(),
      password: !formData.password.trim(),
      cpassword:
        !formData.cpassword || formData.password !== formData.cpassword,
    };

    setFormVal(errors);

    const isValid = !Object.values(errors).some(Boolean);

    if (isValid) {
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-700/50 rounded-2xl bg-zinc-900/20 max-w-md w-full">
      {!isFormSubmitted && (
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <div className="flex gap-4">
              <div className="flex flex-col items-start">
                <label
                  htmlFor="first_name"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30"
                  placeholder="John"
                  value={formData.fname}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      fname: e.target.value,
                    }));

                    setFormVal((prev) => ({
                      ...prev,
                      fname: false,
                    }));
                  }}
                />
                {formVal.fname && (
                  <p className="text-xs text-red-500 mt-1">
                    First Name can't be empty
                  </p>
                )}
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="last_name"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30"
                  placeholder="Doe"
                  value={formData.lname}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      lname: e.target.value,
                    }));

                    setFormVal((prev) => ({
                      ...prev,
                      lname: false,
                    }));
                  }}
                />
                {formVal.lname && (
                  <p className="text-xs text-red-500 mt-1">
                    Last Name can't be empty
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-3">
            <label
              htmlFor="email"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 w-full"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));

                setFormVal((prev) => ({
                  ...prev,
                  email: false,
                }));
              }}
            />
            {formVal.email && (
              <p className="text-xs text-red-500 mt-1">Email can't be empty</p>
            )}
          </div>
          <div className="flex flex-col items-start mt-3">
            <label
              htmlFor="password"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 w-full"
              placeholder="********"
              value={formData.password}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));

                setFormVal((prev) => ({
                  ...prev,
                  password: false,
                }));
              }}
            />
            {formVal.password && (
              <p className="text-xs text-red-500 mt-1">
                Password can't be empty
              </p>
            )}
          </div>
          <div className="flex flex-col items-start mt-3">
            <label
              htmlFor="cpassword"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              className="px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/30 w-full"
              placeholder="********"
              value={formData.cpassword}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  cpassword: e.target.value,
                }));

                setFormVal((prev) => ({
                  ...prev,
                  cpassword: false,
                }));
              }}
            />
            {formVal.cpassword && (
              <p className="text-xs text-red-500 mt-1">
                Confirm password should match the Password
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-red-800 py-3 rounded-xl cursor-pointer transition-transform active:scale-98"
          >
            Login
          </button>
        </form>
      )}
      {isFormSubmitted && (
        <div>
          <h1>Congratulations {formData.fname}! Your form submitted ✅</h1>

          <p
            className="mt-3 text-red-500 cursor-pointer"
            onClick={() => {
              setIsFormSubmitted(false);
              setFormData({
                fname: "",
                lname: "",
                email: "",
                password: "",
                cpassword: "",
              });
              setFormVal({
                fname: false,
                lname: false,
                email: false,
                password: false,
                cpassword: false,
              });
            }}
          >
            {" "}
            ← Go Back
          </p>
        </div>
      )}
    </div>
  );
};

export default Component;
