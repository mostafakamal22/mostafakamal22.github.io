import PageHeader from "../Shared/PageHeader";
import SubHeader from "../Shared/SubHeader";

export default function Contact() {
  return (
    <section className="portfolio bg-light min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center">
      <div className="container text-center py-5 my-5">
        <header>
          <PageHeader title={"conatct section"} />
          <SubHeader color={"--second-color"} />
        </header>

        <form className="w-50 p-3 mx-auto mt-5 text-start">
          <label htmlFor="userName" className="position-relative top-0">
            User Name :
          </label>
          <input
            id="userName"
            type="text"
            placeholder="Type your name"
            name="userName"
            className="form-control border border-bottom py-3 position-relative mb-4"
          />
          <label htmlFor="userAge" className="position-relative top-0">
            User Age :
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="type your age"
            name="userName"
            className="form-control border border-bottom py-3 position-relative mb-4"
          />
          <label htmlFor="userEmail" className="position-relative top-0">
            User Email :
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="Type your email"
            name="userName"
            className="form-control border border-bottom py-3 position-relative mb-4"
          />

          <button
            className="btn mt-4 text-white "
            style={{ backgroundColor: "var(--main-color)" }}
            type="button"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
