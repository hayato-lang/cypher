/* eslint-disable react-hooks/exhaustive-deps */

import { 
  Wrap, 
  WrapItem, 
  Center, 
  Spinner, 
  useDisclosure, 
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const ShowUser: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);

  const onClickOpen = useCallback(() => onOpen(), []);
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
                   onClick={onClickOpen}
                 />
              </WrapItem>
            ))}
        </Wrap>
    )}
    <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
