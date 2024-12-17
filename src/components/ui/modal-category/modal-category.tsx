import Style from "./modal-category.module.scss";

import Category from "../../shared/catalog/category";
import Controls from "./controls";

const ModalCategory: React.FC = () => {
  return (
    <div>
      <div className={Style.modal_category}>
        <div className={Style.header}>
          <h2 className={Style.title}>Catalog Items</h2>

          <Controls />
        </div>

        <div className={Style.content}>
          <Category />
        </div>
      </div>
    </div>
  );
};

export default ModalCategory;
