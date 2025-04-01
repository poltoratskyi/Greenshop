import Style from "./status-pages.module.scss";
import Placeholder from "../placeholder";
import Pathname from "@/components/ui/pathname";

interface Props {
  title: string;
  subtitle: string;
  page: string;
}

const StatusPages: React.FC<Props> = ({
  title,
  subtitle,

  page,
}) => {
  return (
    <>
      <Pathname second={page} />

      <section className={Style.status}>
        <div className="container">
          <div className={Style.content}>
            <Placeholder title={title} subtitle={subtitle} />
          </div>
        </div>
      </section>
    </>
  );
};

export default StatusPages;
