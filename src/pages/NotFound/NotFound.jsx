import Button from "../../components/Button/Button";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Error from "/notfound.png";

export default function NotFound() {
  return (
    <HomeLayout>
      <div className="flex flex-col gap-8 justify-center items-center h-[80vh] mb-16">
        <img src={Error} alt="notfound" className="max-w-xs lg:max-w-sm" />
        <Button text="Back to Home" link="/" />
      </div>
    </HomeLayout>
  );
}
