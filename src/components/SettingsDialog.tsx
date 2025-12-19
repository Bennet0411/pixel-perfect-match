import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/contexts/SettingsContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Volume2, Music, Languages, Type, Droplets } from "lucide-react";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  const { settings, updateSettings } = useSettings();
  const { t } = useTranslation();

  const fontSizeLabels = {
    1: t('verySmall'),
    2: t('small'),
    3: t('medium'),
    4: t('large'),
    5: t('veryLarge'),
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-fantasy-dark/95 border-2 border-fantasy-gold/50 text-fantasy-light max-w-md">
        <DialogHeader>
          <DialogTitle className="font-cinzel text-2xl text-fantasy-gold text-center">
            {t('settingsTitle')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Sound Volume */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-fantasy-gold" />
              <Label className="font-cinzel text-fantasy-light">{t('soundVolume')}: {settings.soundVolume}%</Label>
            </div>
            <Slider
              value={[settings.soundVolume]}
              onValueChange={(value) => updateSettings({ soundVolume: value[0] })}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          {/* Music Volume */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-fantasy-gold" />
              <Label className="font-cinzel text-fantasy-light">{t('musicVolume')}: {settings.musicVolume}%</Label>
            </div>
            <Slider
              value={[settings.musicVolume]}
              onValueChange={(value) => updateSettings({ musicVolume: value[0] })}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          {/* Language */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5 text-fantasy-gold" />
              <Label className="font-cinzel text-fantasy-light">{t('language')}</Label>
            </div>
            <RadioGroup
              value={settings.language}
              onValueChange={(value) => updateSettings({ language: value as 'de' | 'en' })}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="de" id="lang-de" className="border-fantasy-gold text-fantasy-gold" />
                <Label htmlFor="lang-de" className="text-fantasy-light cursor-pointer">{t('german')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="en" id="lang-en" className="border-fantasy-gold text-fantasy-gold" />
                <Label htmlFor="lang-en" className="text-fantasy-light cursor-pointer">{t('english')}</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Font Size */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Type className="w-5 h-5 text-fantasy-gold" />
              <Label className="font-cinzel text-fantasy-light">
                {t('fontSize')}: {fontSizeLabels[settings.fontSize]}
              </Label>
            </div>
            <RadioGroup
              value={settings.fontSize.toString()}
              onValueChange={(value) => updateSettings({ fontSize: parseInt(value) as 1 | 2 | 3 | 4 | 5 })}
              className="flex gap-2 flex-wrap"
            >
              {[1, 2, 3, 4, 5].map((size) => (
                <div key={size} className="flex items-center space-x-1">
                  <RadioGroupItem
                    value={size.toString()}
                    id={`size-${size}`}
                    className="border-fantasy-gold text-fantasy-gold"
                  />
                  <Label htmlFor={`size-${size}`} className="text-fantasy-light cursor-pointer text-sm">
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Blood Censorship */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-fantasy-gold" />
              <Label className="font-cinzel text-fantasy-light">{t('bloodCensored')}</Label>
            </div>
            <Switch
              checked={settings.bloodCensored}
              onCheckedChange={(checked) => updateSettings({ bloodCensored: checked })}
              className="data-[state=checked]:bg-fantasy-gold"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
