import { useCallback, useEffect, useState } from "react";

const useInfiniteScroll = (lastElementRef) => {
  const [numberOfCountriesInView, setNumberOfCountriesInView] = useState(2);
  console.log("scrolling");

  const addSections = useCallback(() => {
    if (lastElementRef.current) {
      const bounding = lastElementRef.current.getBoundingClientRect();
      const condition =
        bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);
      condition && setNumberOfCountriesInView((prev) => prev + 1);
    }
  }, [lastElementRef]);

  useEffect(() => {
    const handleScroll = () => {
      addSections();
    };
    console.log("scrolling");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [addSections]);

  return numberOfCountriesInView;
};

export default useInfiniteScroll;
