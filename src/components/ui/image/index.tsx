import Link from "next/link";
import Image from "next/image";
import { saveViewedProduct } from "../../../lib";
import Style from "./image.module.scss";
import { CartItemVariation } from "../../../types";

interface Props {
  itemId: number;
  imgUrl: string;
  name: string;
  id: number;
  variations: CartItemVariation[];
}

const IImage: React.FC<Props> = ({ itemId, imgUrl, name, id, variations }) => {
  return (
    <Link
      className={Style.link}
      href={`/item/${itemId}`}
      onClick={() => saveViewedProduct({ id, name, imgUrl, variations })}
    >
      <Image
        className={Style.img}
        width={600}
        height={600}
        style={{
          width: "100%",
          height: "auto",
          padding: "10px",
        }}
        src={imgUrl}
        alt={name}
      />
    </Link>
  );
};

export default IImage;
