import {useEffect, useState} from 'react';
import {IUser} from '../types';
import {MOCK_USERS} from '../constants/mock';

/**
 * A custom hook to get users from the mock data.
 */
export const useGetUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    setUsers(MOCK_USERS);
  }, [setUsers]);

  return {users};
};
