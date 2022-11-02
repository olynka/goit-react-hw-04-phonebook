import { UL } from "./ConstListStyled";
import { Button,List,P} from "./ConstListStyled";
export default function ContactList({items,onDeleteContact}) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <List key={id}>
      <P>{name} : {number}</P>
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
      </List>
    );
  });
  return <UL>{elements}</UL>;
}