import PageHeader from "../Shared/PageHeader";
import SubHeader from "../Shared/SubHeader";

export default function About() {
  return (
    <section className="about py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center text-white">
      <div className="container text-center mt-5">
        <PageHeader title="about component" />

        <SubHeader color={"white"} />

        <div className="row g-4 text-start">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>

          <div className="col-md-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </section>
  );
}
