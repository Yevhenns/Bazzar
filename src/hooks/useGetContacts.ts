import {useEffect, useState} from 'react';

export type Contact = {
  id: string;
  name: string;
  surname: string;
  number: string;
};

export const useGetContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://demo8124496.mockable.io/contacts');
        const data = await res.json();
        setContacts(data.contacts);
      } catch (error: any) {
        return error.message;
      }
    };
    fetchData();
  }, []);

  return contacts;
};
