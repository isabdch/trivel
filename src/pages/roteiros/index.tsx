import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { ItinerariesPage } from "@/styles/pages/roteirosStyles";

export default function Roteiros() {
  const links = [
    {
      title: "Roteiros",
      href: "/roteiros",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <ItinerariesPage>
        <div className="container">
        </div>
      </ItinerariesPage>
    </>
  );
}
