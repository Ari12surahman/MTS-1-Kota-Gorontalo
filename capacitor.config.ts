import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mutabaah.digital',
  appName: "Mutaba'ah Digital",
  webDir: 'www',
  server: {
    // Agar lebih stabil, kita arahkan server langsung ke link Apps Script kamu
    url: 'https://script.google.com/macros/s/AKfycbwtC2ta65M1sfv0ujHIyhpK5SoM_Fo73oRXEUrrXS4zR4vkSNn8OnKafFhc7KU-V-J5/exec',
    cleartext: true
  }
};

export default config;
