import React, { useState, useRef, useEffect } from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import Card from "../Card/Card";

function CardList() {
  const [pageNum, setPageNum] = useState(1);
  const [element, setElement] = useState(null);

  const { users } = useFetchUsers(pageNum);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((prev) => prev + 1);
      }
    })
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <div>
      {users?.map((el, index) => (
        <Card
          key={index}
          cell={el.cell}
          fname={el.fname}
          lname={el.lname}
          picture={el.picture}
        />
      ))}
      <span ref={setElement}>Loading</span>
    </div>
  );
}

export default CardList;
