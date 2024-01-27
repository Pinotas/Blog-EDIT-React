import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

interface CardDets {
  imgUrl: string;
  title: string;
  description: string;
  createdAt: string;
}

export function CardPage({ imgUrl, title, description, createdAt }: CardDets) {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={imgUrl} style={{ borderRadius: "10px" }} />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardSubtitle>{createdAt}</CardSubtitle>
      </CardBody>
    </Card>
  );
}
