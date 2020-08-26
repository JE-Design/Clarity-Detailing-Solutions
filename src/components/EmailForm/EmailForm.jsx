import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EmailForm.scss";

const FormField = ({ input, type, classSpecifics, size, placeholder }) => (
  <div className={`${classSpecifics} py-3 px-6 flex flex-col`}>
    <label className="p-1">{input}</label>
    {size === "textarea" ? (
      <textarea
        required
        className="box-shadow p-4 h-64"
        type={type}
        name={input.toLowerCase()}
        placeholder={placeholder}
      />
    ) : (
      <input
        required
        className="box-shadow p-4"
        type={type}
        name={input.toLowerCase()}
        placeholder={placeholder}
      />
    )}
  </div>
);

const notifySuccess = () =>
  toast.success("Form Submitted!", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });

const notifyFailure = () =>
  toast.error("Form Submission Failed", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });

const EmailForm = () => {
  const [status, setStatus] = useState("");
  const submitForm = (ev) => {
    console.log(ev);
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      console.log(xhr.status);
      if (xhr.status === 200) {
        form.reset();
        notifySuccess();
        setStatus("SUCCESS");
      } else {
        notifyFailure();
      }
    };
    xhr.send(data);
  };

  return (
    <div id="contact-form" className="px-3 sm:px-6">
      <h3 className="pb-2">Get in Touch</h3>
      <form
        className="flex flex-wrap -m-6"
        onSubmit={(e) => submitForm(e)}
        action={`${process.env.REACT_APP_FORMSPREE_ENDPOINT}`}
        method="POST"
      >
        <FormField
          input="Name"
          type="text"
          classSpecifics="w-full sm:w-1/2"
          placeholder="Enter your name"
        />
        <FormField
          input="Email"
          type="email"
          classSpecifics="w-full sm:w-1/2"
          placeholder="Enter your email address"
        />
        <FormField
          input="Message"
          type="text"
          size="textarea"
          classSpecifics="w-full"
          placeholder="Enter your message here "
        />
        <div className="p-3 w-full flex flex-wrap justify-center">
          <button
            className={`formButton py-4 px-16 m-4 mt-2 box-shadow rounded-sm sm:m-6 w-64 sm:w-auto`}
            disabled={status === "SUCCESS" ? true : false}
            type="reset"
          >
            Clear
          </button>
          <button
            className="formButton py-4 px-16 m-4 mt-2 box-shadow rounded-sm sm:m-6 w-64 sm:w-auto"
            disabled={status === "SUCCESS" ? true : false}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
