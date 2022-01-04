/* eslint-disable react-hooks/exhaustive-deps */

import { Wrap, WrapItem, Center, Spinner } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../../types/UserCard";

export const ShowUser: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
    {loading ? (
      <Center>
        <Spinner/>
      </Center>
    ) : (
        <Wrap p={{ base: 4, md: 10 }} mx="auto">
            {users.map((user) => (
              <WrapItem key={user.id}>
                 <UserCard 
                   imageUrl="https://source.unsplash.com/random"
                   username={user.username}
                   name={user.name}
                 />
              </WrapItem>
            ))}
        </Wrap>
    )}
    </>
  );
});
