import { Col, Container, Row } from "reactstrap";
import { CardComponent } from "../components/postCard";
import { NavBarF } from "../components/navBar";
import { Filters } from "../components/filters";

const cardList = [
  {
    id: "1291dec2-7836-41d2-a80c-37bea30316ba",
    title: "Meu primeiro post",
    imageUrl: "https://picsum.photos/200/300",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: "2023-01-21T00:00:00.000Z",
  },
  {
    id: "127908ea-64aa-45cc-b413-038f842e4297",
    title: "Meu segundo post",
    imageUrl: "https://picsum.photos/200/300",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    createdAt: "2023-01-10T00:00:00.000Z",
  },
  {
    id: "127908ea-64aa-45cc-b413-038f842e4297",
    title: "Meu segundo post",
    imageUrl: "https://picsum.photos/200/300",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    createdAt: "2023-01-10T00:00:00.000Z",
  },
  {
    id: "127908ea-64aa-45cc-b413-038f842e4297",
    title: "Meu segundo post",
    imageUrl: "https://picsum.photos/200/300",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    createdAt: "2023-01-10T00:00:00.000Z",
  },
];

function RootPage() {
  return (
    <div>
      <div>
        <NavBarF></NavBarF>
      </div>
      <div>
        <Filters></Filters>
      </div>
      <Container>
        <Row xs="4">
          {cardList.map((card) => (
            <Col key={card.id}>
              <CardComponent
                imgUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default RootPage;
