import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fill?: boolean;
    priority?: boolean;
    placeholder?: string;
    blurDataURL?: string;
    unoptimized?: boolean;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(({ src, alt, fill, className, priority, placeholder, blurDataURL, unoptimized, ...props }, ref) => {
    const style: React.CSSProperties = fill
        ? { position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'cover' }
        : {};

    const combinedStyle = { ...style, ...props.style };

    return <img ref={ref} src={src as string} alt={alt || ""} className={className} style={combinedStyle} {...props} />;
});

Image.displayName = 'Image';

export default Image;
