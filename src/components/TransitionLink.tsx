
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import type { ComponentProps, MouseEvent } from 'react';

interface Props extends Omit<ComponentProps<typeof Link>, 'to'> {
    href?: string;
    to?: string;
    back?: boolean;
}

gsap.registerPlugin(useGSAP);

const TransitionLink = ({
    href,
    to,
    onClick,
    children,
    back = false,
    ...rest
}: Props) => {
    const navigate = useNavigate();
    const dest = to || href || "";

    const { contextSafe } = useGSAP(() => { });

    const handleLinkClick = contextSafe(
        (e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();

            const finishNavigation = () => {
                if (back) {
                    navigate(-1);
                } else if (dest) {
                    navigate(dest.toString());
                } else if (onClick) {
                    onClick(e);
                }
            };

            const transition = document.querySelector('.page-transition');
            if (!transition) {
                finishNavigation();
                return;
            }

            const transitionInner = document.querySelector(
                '.page-transition--inner',
            );

            gsap.set(transition, { yPercent: 100 });
            if (transitionInner) {
                gsap.set(transitionInner, { yPercent: 100 });
            }

            gsap.to(transition, {
                yPercent: 0,
                duration: 0.3,
                onComplete: finishNavigation,
            });
        },
    );

    return (
        <Link to={dest} {...rest} onClick={handleLinkClick}>
            {children}
        </Link>
    );
};

export default TransitionLink;
