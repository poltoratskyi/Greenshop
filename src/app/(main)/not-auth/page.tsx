import StatusPages from "../../../components/shared/status-pages";

export default function NotAuthPage() {
  return (
    <StatusPages
      title="Oops! We can not find that page"
      subtitle="Please sing in to your account"
      page="Not Auth"
    />
  );
}
