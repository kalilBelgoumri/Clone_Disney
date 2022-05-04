import { Tabs } from "antd";
import Link from "next/link";

const { TabPane } = Tabs;

export default function Footer() {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane
          className="grid grid-flow-col grid-rows-4 gap-4"
          tab="INFORMATIONS LÉGALES"
          key="1"
        >
          <Link href="https://www.disneylandparis.com/fr-fr/legal/conditions-generales-de-vente/">
            <a className="text-black hover:text-black hover:underline">
              Conditions générales de réservation et assurances séjour
            </a>
          </Link>
          <Link href="https://privacy.thewaltdisneycompany.com/fr/regles-de-respect-de-la-vie-privee/">
            <a className="text-black hover:text-black hover:underline">
              Règle de Respect de la Vie privée
            </a>
          </Link>
          <Link href="https://www.disneylandparis.com/fr-fr/legal/reglement-interieur-de-disney-village/">
            <a className="text-black hover:text-black hover:underline">
              Règlement intérieur de Disney Village
            </a>
          </Link>
          <Link href="https://www.disneylandparis.com/fr-fr/legal/disneyland-paris-legal-notice/">
            <a className="text-black hover:text-black hover:underline">
              Mentions légales{" "}
            </a>
          </Link>
          <Link href="https://www.disneylandparis.com/fr-fr/legal/notice-relative-a-la-confidentialite/">
            <a className="text-black hover:text-black hover:underline">
              Règles européennes de respect de la vie privée{" "}
            </a>
          </Link>
          <Link href="https://www.disneylandparis.com/fr-fr/legal/reglement-interieur-parking-visiteurs/">
            <a className="text-black hover:text-black hover:underline">
              Règlement Intérieur du Parking Visiteurs
            </a>
          </Link>
        </TabPane>
        <TabPane tab="SERVICES" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="À PROPOS" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
        <TabPane tab="AUTRES SITES DISNEY" key="4">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </div>
  );
}
