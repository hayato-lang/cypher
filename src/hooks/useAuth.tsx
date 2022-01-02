import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessages";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const {  ShowMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<Array<User>>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        ShowMessage({ title: "ログインしました", status: "success" });
        history.push("/home");
      } else {
        ShowMessage({  title: "ユーザーが見つかりません", status: "error" });
      }
    })
    .catch(() => ShowMessage({  title: "ログインできません", status: "error" }))
    .finally(() => setLoading(false));
  }, [history, ShowMessage])
  return { login, loading };
}