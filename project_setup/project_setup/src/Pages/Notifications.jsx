import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/Switch";

export default function Notifications() {
  const [notify, setNotify] = useState({
    offers: true,
    bookings: true,
    newCar: true,
  });

  const [toggles, setToggles] = useState({
    mobile: true,
    desktop: true,
    email: true,
  });

  const handleNotifyChange = (field) => {
    setNotify({ ...notify, [field]: !notify[field] });
  };

  const handleToggleChange = (field) => {
    setToggles({ ...toggles, [field]: !toggles[field] });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Notifications</h2>

      {/* Notify me when... */}
      <div className="space-y-2 mb-8">
        <Label className="block text-base font-medium mb-2">Notify me when…</Label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notify.offers}
              onChange={() => handleNotifyChange("offers")}
              className="w-4 h-4"
            />
            <span>Special Offers & Discounts</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notify.bookings}
              onChange={() => handleNotifyChange("bookings")}
              className="w-4 h-4"
            />
            <span>Booking Confirmations</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notify.newCar}
              onChange={() => handleNotifyChange("newCar")}
              className="w-4 h-4"
            />
            <span>When new car added</span>
          </label>
        </div>
      </div>

      {/* Push notifications */}
      <div className="space-y-6">
        {/* Mobile */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Mobile Push notifications</p>
            <p className="text-sm text-muted-foreground">
              Receive push notification when you allow the option
            </p>
          </div>
          <Switch checked={toggles.mobile} onCheckedChange={() => handleToggleChange("mobile")} />
        </div>

        {/* Desktop */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Desktop notifications</p>
            <p className="text-sm text-muted-foreground">
              Receive desktop notification when you allow the option
            </p>
          </div>
          <Switch checked={toggles.desktop} onCheckedChange={() => handleToggleChange("desktop")} />
        </div>

        {/* Email */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Email notifications</p>
            <p className="text-sm text-muted-foreground">
              Receive notifications through mails when you allow the option
            </p>
          </div>
          <Switch checked={toggles.email} onCheckedChange={() => handleToggleChange("email")} />
        </div>
      </div>
    </div>
  );
}