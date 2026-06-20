import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";

function Home() {
  return (
    <>
      <h1>Welcome to the "My-React-JumpstartStack" template! :)</h1>

      <p>
        This is a simple template which includes the technologies react, vite,
        shadcnUI and react router in one ready to pull template.{" "}
      </p>
      <p>
        Now you can start building. All of the relevant technologies are already
        included.
      </p>
      <Button>
        {" "}
        <Link to="/page2">Go to the second Page...</Link>{" "}
      </Button>
    </>
  );
}

export default Home;
