import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/Select";

export default function Preferences() {
  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Preferences</h2>

      <div className="space-y-6">
        {/* Language Selector */}
        <div className="space-y-1">
          <Label htmlFor="language">Language</Label>
          <p className="text-sm text-muted-foreground">Select display language</p>
          <Select>
            <SelectTrigger
              id="language"
              className="w-full mt-1"
              onClick={() => {
                setLangOpen(!langOpen);
                setRegionOpen(false);
              }}
            >
              <SelectValue placeholder="Select language" value={language} />
            </SelectTrigger>
            <SelectContent open={langOpen}>
              <SelectItem value="english" onSelect={setLanguage}>English</SelectItem>
              <SelectItem value="hindi" onSelect={setLanguage}>Hindi</SelectItem>
              <SelectItem value="french" onSelect={setLanguage}>French</SelectItem>
              <SelectItem value="german" onSelect={setLanguage}>German</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Region Selector */}
        <div className="space-y-1">
          <Label htmlFor="region">Region / Locale</Label>
          <p className="text-sm text-muted-foreground">Select region</p>
          <Select>
            <SelectTrigger
              id="region"
              className="w-full mt-1"
              onClick={() => {
                setRegionOpen(!regionOpen);
                setLangOpen(false);
              }}
            >
              <SelectValue placeholder="Select region" value={region} />
            </SelectTrigger>
            <SelectContent open={regionOpen}>
              <SelectItem value="us" onSelect={setRegion}>United States (English)</SelectItem>
              <SelectItem value="in" onSelect={setRegion}>India (English)</SelectItem>
              <SelectItem value="fr" onSelect={setRegion}>France (Français)</SelectItem>
              <SelectItem value="de" onSelect={setRegion}>Germany (Deutsch)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}