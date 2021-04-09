import logo from "assets/images/logo.png";

const Testimonials = () => {
  return (
    <section className="testimonial container mx-auto max-w-screen-xl px-4 bg-ediboy-primary py-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-3xl font-medium">Testimonials</div>
        <div className="text-xl font-thin mb-5 text-gray-200">
          Wonderful words from wonderful people
        </div>

        <div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
            fuga assumenda unde distinctio, sequi impedit voluptatem pariatur
            incidunt eligendi, quidem rerum facilis eveniet tenetur neque!
            Asperiores doloremque itaque fuga mollitia.
          </div>
          <div className="flex justify-center">
            <img src={logo} />
          </div>
          <div>Chris Ilagan</div>
          <div>Creative Director Miyens</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
