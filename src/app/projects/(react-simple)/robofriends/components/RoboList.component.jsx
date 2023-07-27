import Card from './Card.component';

const RoboList = ({ query, robots, handleClick }) => {
  return (
    <>
      <section className="min-h-[50vh] w-[80vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {robots.map((robot, idx) => {
          if (robot.name.toLowerCase().includes(query.toLowerCase())) {
            return (
              <Card
                key={idx}
                id={robot.id}
                name={robot.name}
                email={robot.email}
                height={200}
                width={200}
                handleClick={handleClick}
              />
            );
          }
        })}
      </section>
    </>
  );
};

export default RoboList;
