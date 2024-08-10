import {useEffect, useState} from 'react';

export type User = {
  id: string;
  name: string;
  surname: string;
  number: string;
};

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://demo8124496.mockable.io/users');
        const data = await res.json();
        setUsers(data.contacts);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {users, loading, err};
};
