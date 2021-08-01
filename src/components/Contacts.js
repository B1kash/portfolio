import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_QwBXsa79czO061cPNat1C";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("form send Successfully!");
      })
      .catch((err) => console.error(`Somethimg went wrong ${err}`));
  };

  return (
    <div id="Contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe you project needs and I'll
          contact you as soon as possible.
        </p>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("Name", { required: true })}
                />
                <span id="xyx">
                  {errors.Name?.type === "required" && "First name is required"}
                </span>
                <div className="line"></div>
              </div>

              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", { required: true })}
                />
                <span id="xyx">
                  {errors.phone?.type === "required" &&
                    "Phone number is required"}
                </span>
                <div className="line"></div>
              </div>

              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <span id="xyx">
                  {errors.Email?.type === "required" &&
                    "pattern" &&
                    "Email is required"}
                </span>
                <div className="line"></div>
              </div>

              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("Subject", { required: true })}
                />
                <span id="xyx">
                  {errors.Subject?.type === "required" &&
                    "Phone number is required"}
                </span>
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  {...register("description", { required: true })}
                ></textarea>
                <span id="xyx">
                  {errors.description?.type === "required" &&
                    "Phone number is required"}
                </span>
                <div className="line"></div>
              </div>

              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
