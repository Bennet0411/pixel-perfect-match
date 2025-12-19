export const translations = {
  de: {
    // Main Menu
    title: 'ÄONIEN',
    subtitle: 'Ein interaktives Fantasy-Abenteuer',
    continue: 'Weiterspielen',
    newGame: 'Neues Spiel',
    saves: 'Spielstände',
    settings: 'Einstellungen',
    exit: 'Beenden',
    noSaveFound: 'Kein gespeicherter Spielstand gefunden.',
    savesNotImplemented: 'Spielstände werden noch implementiert.',
    
    // Settings
    settingsTitle: 'Einstellungen',
    soundVolume: 'Lautstärke (Sounds)',
    musicVolume: 'Lautstärke (Musik)',
    language: 'Sprache',
    german: 'Deutsch',
    english: 'Englisch',
    fontSize: 'Schriftgröße (Spiel)',
    verySmall: 'Sehr klein',
    small: 'Klein',
    medium: 'Mittel',
    large: 'Groß',
    veryLarge: 'Sehr groß',
    bloodCensored: 'Blut zensieren',
    bloodCensoredDesc: 'Gewaltdarstellungen werden abgemildert',
    
    // Character Select
    selectCharacter: 'Wähle deinen Charakter',
    back: 'Zurück',
    knight: 'Ritter',
    mage: 'Magier',
    wisp: 'Irrlicht',
    knightDesc: 'Ein tapferer Krieger mit unerschütterlichem Mut',
    mageDesc: 'Ein weiser Zauberer mit arkanen Kräften',
    wispDesc: 'Ein mystisches Wesen aus reiner Energie',
  },
  en: {
    // Main Menu
    title: 'ÄONIEN',
    subtitle: 'An interactive fantasy adventure',
    continue: 'Continue',
    newGame: 'New Game',
    saves: 'Saves',
    settings: 'Settings',
    exit: 'Exit',
    noSaveFound: 'No saved game found.',
    savesNotImplemented: 'Saves are not yet implemented.',
    
    // Settings
    settingsTitle: 'Settings',
    soundVolume: 'Sound Volume',
    musicVolume: 'Music Volume',
    language: 'Language',
    german: 'German',
    english: 'English',
    fontSize: 'Font Size (Game)',
    verySmall: 'Very small',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    veryLarge: 'Very large',
    bloodCensored: 'Censor Blood',
    bloodCensoredDesc: 'Violence is toned down',
    
    // Character Select
    selectCharacter: 'Choose your character',
    back: 'Back',
    knight: 'Knight',
    mage: 'Mage',
    wisp: 'Wisp',
    knightDesc: 'A brave warrior with unwavering courage',
    mageDesc: 'A wise sorcerer with arcane powers',
    wispDesc: 'A mystical being of pure energy',
  },
} as const;

export type TranslationKey = keyof typeof translations.de;
