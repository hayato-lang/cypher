/* eslint-disable react-hooks/exhaustive-deps */

import { Wrap, WrapItem, Center, Spinner } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../../types/api/UserCard";

export const ShowUser: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        <Center/>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          <WrapItem>
            <UserCard 
              imageUrl="https://source.unsplash.com/random"
              storeTitle="Club Kobe"
              access="兵庫県神戸市北区2-11"
            />
          </WrapItem>
        </Wrap>
      )}
    </>
  )
});



