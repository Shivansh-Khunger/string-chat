import { Button } from "@/components/ui/button";
import { useState } from "react";
export function Test() {
  const [show, setShow] = useState(false);

  function showImage() {
    setShow(!show);
  }

  return (
    <>
      <Button variant={"outline"} onClick={showImage}>
        Click Me
      </Button>
      {show && (
        <img src="https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      )}
    </>
  );
}
