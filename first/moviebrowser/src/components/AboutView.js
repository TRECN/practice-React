import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="Welcome to About page" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
              reprehenderit quasi incidunt, doloremque quisquam suscipit magni
              ipsam, magnam, asperiores vero repellendus libero dolores ex
              adipisci maiores nulla vel deleniti?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque aspernatur modi itaque deserunt nostrum deleniti et.
              Deserunt architecto autem delectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
