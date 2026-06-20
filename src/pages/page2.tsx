import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";

function Page2() {
  return (
    <>
      <h1>This is the second page!</h1>

      <Button>
        {" "}
        <Link to="/page3">Go to the third Page...</Link>{" "}
      </Button>
    </>
  );
}

export default Page2;
