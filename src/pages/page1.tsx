import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";

function Page1() {
  return (
    <>
      <h1>This is the first page!</h1>
      <Button>
        {" "}
        <Link to="/page2">Go to the second Page...</Link>{" "}
      </Button>
    </>
  );
}

export default Page1;
