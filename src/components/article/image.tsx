import { cn } from '@/utils/cn'

function Image({
  alt,
  className,
  height,
  src,
  width,
}: {
  alt: string
  className?: string
  height?: number
  src: string
  width?: number
}) {
  return (
    <img
      alt={alt}
      className={cn('mx-auto lg:aspect-[1/1] lg:w-full', className)}
      height={width || 500}
      src={src}
      width={height || 500}
    />
  )
}

export default Image
