import ContactForm from "components/ContactForm";

const Contact = () => {
  return (
    <section className="works container mx-auto max-w-screen-xl px-4 py-2">
      <div className="text-4xl font-medium mb-2">
        <span className="text-ediboy-primary">G</span>et in touch
      </div>

      <div className="text-xl font-thin mb-10 text-gray-200">
        Hey! Hope you're doing good. How may I help you?
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;
