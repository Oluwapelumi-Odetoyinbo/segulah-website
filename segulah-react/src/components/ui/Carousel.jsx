import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * @typedef {import('embla-carousel').EmblaCarouselType} CarouselApi
 * Use setApi prop to receive the carousel instance. API exposes scrollSnapList(), selectedScrollSnap(), on("select", cb).
 */

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel');
  }
  return context;
}

const Carousel = React.forwardRef(
  ({ className, opts, orientation = 'horizontal', plugins, setApi, children, ...props }, ref) => {
    const [carouselRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const scrollPrev = React.useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

    const onSelect = React.useCallback((emblaApi) => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!emblaApi) return;
      onSelect(emblaApi);
      setApi?.(emblaApi);
      emblaApi.on('reInit', onSelect).on('select', onSelect);
      return () => {
        emblaApi.off('reInit', onSelect).off('select', onSelect);
      };
    }, [emblaApi, onSelect, setApi]);

    const childArray = React.Children.toArray(children);
    const content = childArray.find((c) => React.isValidElement(c) && c.type?.displayName === 'CarouselContent');
    const controls = childArray.filter((c) => React.isValidElement(c) && c.type?.displayName !== 'CarouselContent');

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          emblaApi,
          canScrollPrev,
          canScrollNext,
          scrollPrev,
          scrollNext,
          orientation,
        }}
      >
        <div
          ref={ref}
          className={`relative w-full ${className ?? ''}`}
          {...props}
        >
          <div ref={carouselRef} className="overflow-hidden">
            {content}
          </div>
          {controls}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      className="flex"
      style={{
        marginLeft: orientation === 'horizontal' ? '-1rem' : undefined,
        marginTop: orientation === 'vertical' ? '-1rem' : undefined,
      }}
      {...props}
    >
      {React.Children.map(props.children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              style: {
                ...child.props.style,
                minWidth: orientation === 'horizontal' ? '0' : '100%',
                paddingLeft: orientation === 'horizontal' ? '1rem' : undefined,
                paddingTop: orientation === 'vertical' ? '1rem' : undefined,
              },
            })
          : child
      )}
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`shrink-0 ${orientation === 'horizontal' ? 'basis-full sm:basis-1/2 lg:basis-1/3' : ''} ${className ?? ''}`}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-50 hover:text-mlm-green-500 disabled:pointer-events-none disabled:opacity-50 ${className ?? ''}`}
      aria-label="Previous slide"
      {...props}
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-50 hover:text-mlm-green-500 disabled:pointer-events-none disabled:opacity-50 ${className ?? ''}`}
      aria-label="Next slide"
      {...props}
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
});
CarouselNext.displayName = 'CarouselNext';

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
};
