import Modal from './Modal.component';
import RoboImage from './RoboImage.component';
import X from './x.button';

const RoboModal = ({ id, name, email, description, handleExit }) => {
  const text = 'text-lg';
  const mdText = 'md:text-xl';
  const lgText = 'lg:text-2xl';
  return (
    <div>
      <X />
      <Modal isSelected={true} handleExit={handleExit}>
        <div className="flex flex-col lg:flex-row justify-center items-center h-full">
          <section className="flex flex-col justify-evenly mb-20 lg:mb-0">
            <RoboImage id={id} width={300} height={400} isModalOpen={true} />
          </section>
          <section
            className={`grid grid-cols-2 text-left justify-evenly w-[80%] lg:w-[60%] ${text} ${mdText} ${lgText}`}
          >
            <h2 className="font-bold">Name: </h2>
            <h3>{name}</h3>

            <h2 className="font-bold  text-left">Email: </h2>
            <p className="text-ellipsis">{email}</p>

            <h2 className="font-bold text-left">Description: </h2>
            <p>{description}</p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default RoboModal;
