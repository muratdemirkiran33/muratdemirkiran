import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/ProjectDetails';

const ProjectPage = () => {
    const { slug } = useParams<{ slug: string }>();

    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return <ProjectDetails project={project} />;
};

export default ProjectPage;
