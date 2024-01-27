import { CardPage } from "../../components/postDetails";
import { NavBarF } from "../../components/navBar";
import { Col, Container, Row } from "reactstrap";

const cardDets = [
  {
    id: "1291dec2-7836-41d2-a80c-37bea30316ba",
    title: "Meu primeiro post",
    imageUrl: "https://picsum.photos/200/300",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: "2023-01-21T00:00:00.000Z",
  },
];

function PostPage() {
  return (
    <div>
      <div>
        <NavBarF></NavBarF>
      </div>
      <div>
        <Container>
          <Row xs="4">
            {cardDets.map((card) => (
              <Col className="bg-light border" key={card.id}>
                <CardPage
                  imgUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  createdAt={card.createdAt}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default PostPage;
