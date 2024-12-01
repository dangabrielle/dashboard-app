import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white px-2 py-2 flex items-center justify-between">
      <p className="text-center">Navbar</p>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-black">BT</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
