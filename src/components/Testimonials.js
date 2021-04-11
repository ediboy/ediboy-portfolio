import useFetch from "hooks/useFetch";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loader from "./Loader";

const Testimonials = () => {
  const { error, isLoading, data: testimonials } = useFetch(
    "https://firestore.googleapis.com/v1/projects/ediboy-ilagan/databases/(default)/documents/testimonials"
  );

  return (
    <section className="testimonial px-4 bg-ediboy-primary py-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-3xl font-medium">Testimonials</div>
        <div className="text-xl font-thin mb-5 text-gray-200">
          Wonderful words from wonderful people
        </div>

        {error && <div className="text-red-400 p-20">{error}</div>}

        {isLoading ? (
          <Loader />
        ) : (
          testimonials && (
            <Carousel
              autoPlay={true}
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      className="bg-white w-2 h-2 rounded-full inline-block mx-1 outline-none"
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    className="bg-ediboy-bg w-2 h-2 rounded-full inline-block mx-1 outline-none"
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              {testimonials.documents.map((testimonial, i) => (
                <div
                  className="testimonial-preview mx-auto w-full flex-none"
                  key={i}
                >
                  <div>
                    <p className="mb-4">
                      "{testimonial.fields.content.stringValue}"
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-10 mb-2 w-36">
                      <img
                        src={testimonial.fields.image.stringValue}
                        alt={testimonial.fields.name.stringValue}
                        className="rounded-full w-36"
                      />
                    </div>
                  </div>

                  <div className="font-bold text-2xl">
                    {testimonial.fields.name.stringValue}
                  </div>
                  <div className="text-sm text-gray-200 mb-10">
                    {testimonial.fields.position.stringValue}
                  </div>
                </div>
              ))}
            </Carousel>
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
