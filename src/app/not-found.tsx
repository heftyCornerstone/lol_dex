import Image from "next/image"


const notFound = () => {
  return (
    <div className="notFoundScreen">
      <Image
        src={"/images/lol_dex_not_found.png"}
        alt=""
        width={1500}
        height={1500}
        className="notFoundImg"
      />
    </div>
  );
}

export default notFound