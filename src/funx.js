export function checkDonkey() {
  if (navigator.userAgent.match(/Trident|Net/i)) {
    return true;
  }
  return false;
}
