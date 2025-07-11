import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/Switch";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

const Security = () => {
  return (
    <div className="space-y-6 px-6 py-4">
      <h2 className="text-2xl font-bold">Security</h2>

      {/* Google Authenticator */}
      <Card className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardContent className="md:col-span-1">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-semibold">Google Authenticator</h3>
              <p className="text-sm text-muted-foreground">
                Adds a second step of verification when you sign in.
              </p>
            </div>
            <Switch checked />
          </div>
          <p className="text-green-600 font-medium mt-2">Connected</p>
        </CardContent>

        {/* Password */}
        <CardContent>
          <h3 className="text-md font-semibold">Password</h3>
          <p className="text-sm text-muted-foreground">Last Changed 15 Oct 2023, 09:00 AM</p>
          <Button className="mt-3">Change</Button>
        </CardContent>

        {/* Two Factor */}
        <CardContent>
          <h3 className="text-md font-semibold">Two Factor</h3>
          <p className="text-sm text-muted-foreground">
            Receive codes via SMS or email every time you log in.
          </p>
          <div className="flex items-center justify-between mt-3">
            <Switch checked />
            <Button variant="destructive">Delete</Button>
          </div>
        </CardContent>
      </Card>

      {/* Phone + Email + Device */}
      <Card className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardContent>
          <h3 className="text-md font-semibold">Phone Number Verification</h3>
          <p className="text-green-600 text-sm mt-1">Verified Mobile Number: 7261937185</p>
          <div className="flex gap-2 mt-2">
            <Button size="sm">Change</Button>
            <Button size="sm" variant="destructive">Remove</Button>
          </div>
        </CardContent>

        <CardContent>
          <h3 className="text-md font-semibold">Email Verification</h3>
          <p className="text-green-600 text-sm mt-1">Verified Email: info@example.com</p>
          <div className="flex gap-2 mt-2">
            <Button size="sm">Change</Button>
            <Button size="sm" variant="destructive">Remove</Button>
          </div>
        </CardContent>

        <CardContent>
          <h3 className="text-md font-semibold">Device Management</h3>
          <p className="text-sm text-muted-foreground">Last Changed 18 Oct 2023, 11:15 AM</p>
          <Button className="mt-2">Manage</Button>
        </CardContent>
      </Card>

      {/* Activity + Deactivate + Delete */}
      <Card className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardContent>
          <h3 className="text-md font-semibold">Account Activity</h3>
          <p className="text-sm text-muted-foreground">Last Changed 04 Nov 2023, 04:30 PM</p>
          <Button className="mt-2">View</Button>
        </CardContent>

        <CardContent>
          <h3 className="text-md font-semibold">Deactivate Account</h3>
          <p className="text-sm text-muted-foreground">Last Changed 16 Nov 2023, 02:00 PM</p>
          <Button variant="outline" className="mt-2">Deactivate</Button>
        </CardContent>

        <CardContent>
          <h3 className="text-md font-semibold">Delete Account</h3>
          <p className="text-sm text-muted-foreground">Last Changed 30 Dec 2023, 08:40 PM</p>
          <Button variant="destructive" className="mt-2">Delete</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Security;