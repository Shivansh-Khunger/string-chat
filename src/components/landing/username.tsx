import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Username() {
  const [username, setUsername] = useState("");

  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="flex justify-center pb-4">
      <Input
        type="text"
        placeholder="username"
        className="w-52 border-0 text-black font-mono font-bold text-xl"
        value={username}
        onChange={updateUserName}
      />
      <Link to="/main" state={{ username: username }}>
        <Button
          type="submit"
          className="text-blac font-mono font-semibold text-xl"
        >
          get id
        </Button>
      </Link>
    </div>
  );
}
