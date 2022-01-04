/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios"
import { useCallback, useState } from "react"
import { Event } from "../types/api/event";
import { useMessage } from "./useMessage";

export const useAllEvents = () => {
  const { ShowMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Array<Event>>([]);
  const getEvents = useCallback(() => {
    setLoading(true)
    axios.get<Array<Event>>("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setEvents(res.data)
    })
    .catch(() => {
      ShowMessage({ title: "イベントの取得に失敗しました。", status: "error" })
    })
    .finally(() => setLoading(false))
  }, [])
  return { getEvents, loading, events }
}