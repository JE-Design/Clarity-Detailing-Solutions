import React from "react";
import { Service, PageContainer, PageHeader, Card } from "components/";
import { services_header } from "assets/";

const ServicesPage = () => (
  <>
    <PageHeader
      imagePath={services_header}
      title="Services"
      caption="They're in the service Industry?"
    />
    <PageContainer className="flex flex-wrap justify-center">
      <Card className="contact-links w-full lg:w-1/2">
        <Service
          title="Lorem Ipsum"
          subtitle="Lorem Ipsum"
          price="70"
          secondTitle="Lorem Ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Eos verear percipit ex, eos ne eligendi inimicus. Accusam explicari sed ei. Pro ea animal dolores. Scripta periculis ei eam, te pro movet reformidans. Scripta periculis ei eam, te pro movet reformidans. Id mundi quando mandamus sit, est vide option accusata et. Partiendo adversarium no mea. Scripta periculis ei eam, te pro movet reformidans. Partiendo adversarium no mea. Dolor labitur cu pro. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. No vis iuvaret appareat. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Qui gloriatur scribentur et, id velit verear mel, cum no porro debet. Vivendum intellegat et qui, ei denique consequuntur vix."
        />
      </Card>
      <Card className="contact-links w-full lg:w-1/2">
        <Service
          title="lorem ipsum"
          subtitle="lorem ipsum"
          price="70"
          secondtitle="lorem ipsum"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. eos verear percipit ex, eos ne eligendi inimicus. accusam explicari sed ei. pro ea animal dolores. scripta periculis ei eam, te pro movet reformidans. scripta periculis ei eam, te pro movet reformidans. id mundi quando mandamus sit, est vide option accusata et. partiendo adversarium no mea. scripta periculis ei eam, te pro movet reformidans. partiendo adversarium no mea. dolor labitur cu pro. pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. no vis iuvaret appareat. offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. qui gloriatur scribentur et, id velit verear mel, cum no porro debet. vivendum intellegat et qui, ei denique consequuntur vix."
        />
      </Card>
      <Card className="contact-links w-full lg:w-full">
        <Service
          title="lorem ipsum"
          subtitle="lorem ipsum"
          price="70"
          secondtitle="lorem ipsum"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. eos verear percipit ex, eos ne eligendi inimicus. accusam explicari sed ei. pro ea animal dolores. scripta periculis ei eam, te pro movet reformidans. scripta periculis ei eam, te pro movet reformidans. id mundi quando mandamus sit, est vide option accusata et. partiendo adversarium no mea. scripta periculis ei eam, te pro movet reformidans. partiendo adversarium no mea. dolor labitur cu pro. pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. no vis iuvaret appareat. offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. qui gloriatur scribentur et, id velit verear mel, cum no porro debet. vivendum intellegat et qui, ei denique consequuntur vix."
        />
      </Card>
    </PageContainer>
  </>
);

export default ServicesPage;
