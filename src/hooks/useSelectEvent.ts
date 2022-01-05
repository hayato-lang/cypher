import { useCallback, useState } from "react"
import { Event } from "../types/api/event";

type Props = {
  id: number;
  events: Array<Event>;
  onOpen: () => void;
}
export const useSelectEvent = () => {
  const [selectEvent, setSelectEvent] = useState<Event | null>(null);

  const onSelectEvent = useCallback((props: Props) => {
    const { id, events, onOpen } = props;
    const targetEvent = events.find((event) => event.id === id)
    setSelectEvent(targetEvent!);
    onOpen();
  }, []);
  return { selectEvent, onSelectEvent }
}