import Card from './Card.component';
import { robots } from '../data/robots';

const CardList = () => {
  return (
    <section>
      {robots.map((robot, idx) => (
        <Card
          key={idx}
          id={robot.id}
          name={robot.name}
          email={robot.email}
          height={200}
          width={200}
        />
      ))}
    </section>
  );
};

export default CardList;
