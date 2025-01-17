import Link from "next/link";

import Style from "./single-item.module.scss";

import { ItemVariation } from "../../../types";
import { ItemCategory } from "../../../types/common";

import { media } from "./static-data";

import ItemInfo from "./item-info";
import ImageGallery from "./image-gallery";

interface Props {
  id: number;
  name: string;
  imgUrl: string;
  sku: string;
  category: ItemCategory;
  tags: string;
  shortDescription: string;
  variations: ItemVariation[];
}

const ItemList: React.FC<Props> = ({
  id,
  name,
  imgUrl,
  sku,
  category,
  tags,
  shortDescription,
  variations,
}) => {
  return (
    <div className={Style.content}>
      <ImageGallery imgUrl={imgUrl} name={name} variations={variations} />

      <div className={Style.block}>
        <h2>{name}</h2>

        <ItemInfo
          id={id}
          shortDescription={shortDescription}
          variations={variations}
        />

        <p className={Style.sku}>
          <span>Sku: </span>
          {sku}
        </p>

        <p className={Style.category}>
          <span>Category: </span>
          {category.name}
        </p>

        <p className={Style.tags}>
          <span>Tags: </span>
          {tags}
        </p>

        <div className={Style.share}>
          <p className={Style.text}>Share this products:</p>

          <ul className={Style.share_lists}>
            {media.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.svg}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
