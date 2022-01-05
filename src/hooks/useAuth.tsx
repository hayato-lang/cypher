import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useLoginUser } from "../hooks/useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const {  ShowMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
    .get<Array<User>>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        setLoginUser(res.data)
        ShowMessage({ title: "ログインしました", status: "success" });
        history.push("/home");
      } else {
        ShowMessage({ title: "ユーザーが見つかりません", status: "error" })
        setLoading(false);
      }
    })
    .catch(() => 
    {ShowMessage({  title: "ログインできません", status: "error" })
    setLoading(false)
  })
  }, [history, ShowMessage, setLoginUser])
  return { login, loading  };
}