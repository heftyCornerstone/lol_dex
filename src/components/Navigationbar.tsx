import Link from "next/link"

const Navigationbar = () => {
  return (
    <nav className="flex items-center justify-center gap-10">
      <Link href={"/"}>Home</Link>
      <Link href={"/champions"}>Champions</Link>
      <Link href={"/items"}>Items</Link>
      <Link href={"/rotation"}>Champion Rotation</Link>
    </nav>
  );
}

export default Navigationbar