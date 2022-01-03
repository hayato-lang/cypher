import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../../types/api/UserCard";

export const ShowUser: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <UserCard 
          imageUrl="https://source.unsplash.com/random"
          storeTitle="Club Kobe"
          access="兵庫県神戸市北区2-11"
         />
      </WrapItem>
    </Wrap>
  );
});