import { Htag, Button } from "@/components";

import Logo from "./Logo.svg";

export default function Home() {
  return (
    <div>
      <Logo />
      <Htag tag="h3">sdf</Htag>
      <Button appearence="primary">Hello</Button>
      <Button appearence="ghost">Hello</Button>
      <Button appearence="ghost" arrow="down">
        Hello
      </Button>

      <Button appearence="ghost" arrow="right">
        Hello
      </Button>
    </div>
  );
}
