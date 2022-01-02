import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";

export const useAuth = (id: string) => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id) => {
    axios.get<Array<User>>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        history.push("/home");
      } else {
        alert("ユーザーが見つかりません")
      }
    })
    .catch(() => alert("ログインできません"))
  }, [history]);
  return { login }
}