import Link from 'next/link';

const ProjectItem = ({ project, link }) => {
  return (
    <li>
      <Link href={link}>
        <h4 className="ubuntu px-7 hover:text-blue-700">
          {project}
        </h4>
      </Link>
    </li>
  );
};

export default ProjectItem;
