import Pageheader from "../Shared/PageHeader";
import Subheader from "../Shared/SubHeader";
import Avatar from "../../assets/images/avataaars.svg";

export default function Home() {
  return (
    <section className="home min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center">
      <header className="text-white text-center py-5 my-5">
        <img
          src={Avatar}
          alt="avatar"
          className="w-100 mb-3"
          style={{ maxWidth: "250px" }}
        />
        <Pageheader title={"start Framework"} />
        <Subheader color={"--bs-white"} />
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </header>
    </section>
  );
}
