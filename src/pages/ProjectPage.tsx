import { useParams, Navigate } from 'react-router-dom';
import { getProjects } from '@/lib/data';
import ProjectDetails from '@/components/ProjectDetails';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();

    const project = getProjects(language).find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return <ProjectDetails project={project} />;
};

export default ProjectPage;
