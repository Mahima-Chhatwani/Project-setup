import { useState } from "react";
import { Switch } from "@/components/ui/Switch";

export default function Integration() {
  const [calendarEnabled, setCalendarEnabled] = useState(true);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Integrations</h2>

      <div className="border rounded-lg p-4 flex items-center justify-between shadow-sm">
        {/* Left Side: Icon + Text */}
        <div className="flex items-center space-x-4">
          <img
            src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_16_2x.png"
            alt="Google Calendar"
            className="w-10 h-10"
          />
          <div>
            <p className="font-medium">Google Calendar</p>
            <p className="text-sm text-muted-foreground">
              Powerful & free service to organize your schedule and coordinate events
            </p>
          </div>
        </div>

        {/* Right Side: Toggle Switch */}
        <Switch checked={calendarEnabled} onCheckedChange={() => setCalendarEnabled(!calendarEnabled)} />
      </div>
    </div>
  );
}