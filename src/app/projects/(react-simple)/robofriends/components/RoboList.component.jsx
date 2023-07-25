import Card from './Card.component';
import { robots } from '../data/robots';

const RoboList = () => {
  return (
    <div className="min-h-[50vh] w-[80vw] border-black border-[1px]">
      <h1 className="text-center text-3xl">RoboList</h1>
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
    </div>
  );
};

export default RoboList;
