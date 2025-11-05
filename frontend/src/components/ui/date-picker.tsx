import { useState } from "react";
import {
  DatePicker,
  DateInput,
  DateSegment,
  Popover,
  Dialog,
  Button
} from "react-aria-components";
import { Calendar } from "react-aria-components";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function MyDatePicker() {
  let [value, setValue] = useState(today(getLocalTimeZone()));

  return (
    <div className="flex flex-col gap-2">
      <DatePicker value={value} onChange={setValue}>
        <DateInput className="border rounded-md px-2 py-1 bg-white dark:bg-neutral-900">
          {segment => (
            <DateSegment
              segment={segment}
              className="px-0.5 text-sm focus:outline-none"
            />
          )}
        </DateInput>
        <Popover>
          <Dialog className="bg-white dark:bg-neutral-900 border rounded-md shadow-lg p-2">
            <Calendar />
          </Dialog>
        </Popover>
      </DatePicker>

      <p className="text-sm text-muted-foreground">Selecionado: {value.toString()}</p>
    </div>
  );
}
