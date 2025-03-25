import StatusPages from "../../components/shared/status-pages";

export default function NotFoundPage() {
  return (
    <StatusPages
      title="Oops! We can not find that page"
      subtitle="Maybe you were looking for something else?"
      link="/"
      linkValue="Or Back to Home"
      page="Not Found"
    />
  );
}
