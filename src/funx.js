import { navigateTo } from "yrv";

export function checkDonkey() {
  if (navigator.userAgent.match(/Trident|Net/i)) {
    return true;
  }
  return false;
}

export function redirectTo(url) {
  const ie11 = checkDonkey();
  if (ie11) {
    window.location.replace(url);
  } else {
    navigateTo(url, { replace: true });
  }
}
