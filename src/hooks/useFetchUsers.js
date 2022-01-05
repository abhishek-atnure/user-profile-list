import { useState, useEffect } from "react";

function useFetchUsers(pageNumber) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchRandomPerson = async () => {
      const response = await fetch(
        `https://randomuser.me/api/?page=${pageNumber}&results=10`
      );
      const data = await response.json();
      setUsers((prev) => [
        ...prev,
        ...data.results.map((el) => {
          return {
            cell: el.cell,
            fname: el.name.first,
            lname: el.name.last,
            picture: el.picture.large,
          };
        }),
      ]);
      setLoading(false);
    };
    fetchRandomPerson();
  }, [pageNumber]);

  return { loading, users };
}

export default useFetchUsers;
