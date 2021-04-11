import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const ContactForm = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [formContents, setFormContents] = useState();
  const [showFormErr, setShowFormErr] = useState(false);

  const sendEmail = (captcha) => {
    const params = {
      name: formContents.name.value,
      email: formContents.email.value,
      message: formContents.message.value,
      "g-recaptcha-response": captcha,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        params,
        process.env.REACT_APP_EMAIL_JS_USER
      )
      .then(
        (result) => {
          setShowCaptcha(false);
        },
        (error) => {
          setShowFormErr(true);
          setShowCaptcha(false);
        }
      );
  };

  const showCaptchaBeforeSubmit = (e) => {
    e.preventDefault();
    setFormContents(e.target);
    setShowCaptcha(true);
  };

  return (
    <div className="justify-center flex">
      {!showCaptcha ? (
        <form
          className="contact-form max-w-md"
          onSubmit={showCaptchaBeforeSubmit}
        >
          <div className="grid grid-cols-2 gap-5 text-left">
            <div>
              <div>Name</div>
              <input
                className="w-full bg-ediboy-bg border rounded border-ediboy-primary px-5 py-2 mt-2 outline-none text-sm"
                type="text"
                name="name"
                required
                onChange={() => {
                  setShowFormErr(false);
                }}
              />
            </div>
            <div>
              <div>Email</div>
              <input
                className="w-full bg-ediboy-bg border rounded border-ediboy-primary px-5 py-2 mt-2 outline-none text-sm"
                type="email"
                name="email"
                required
                onChange={() => {
                  setShowFormErr(false);
                }}
              />
            </div>
          </div>

          <div className="text-left mt-5">
            <div>Message</div>
            <textarea
              className="w-full bg-ediboy-bg border rounded border-ediboy-primary px-5 py-2 mt-2 outline-none text-sm"
              name="message"
              rows="5"
              required
              onChange={() => {
                setShowFormErr(false);
              }}
            />
          </div>

          {showFormErr ? (
            <div className="text-sm text-red-400 py-2">
              Something went wrong. Please try again.
            </div>
          ) : null}

          <div>
            <input
              type="submit"
              value="Submit"
              className="mt-6 px-6 py-2 border border-white rounded-full border-solid inline-block bg-transparent outline-none  hover:bg-black hover:bg-opacity-10 cursor-pointer"
            />
          </div>
        </form>
      ) : (
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          onChange={sendEmail}
        />
      )}
    </div>
  );
};

export default ContactForm;
