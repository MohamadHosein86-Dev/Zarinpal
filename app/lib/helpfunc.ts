export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("fa-IR").format(amount) + " تومان";
};
export function toggleMobileNavbar() {
    document.querySelector('.navigation')?.classList.toggle('menu-active')
    document.querySelector('.mobile-overlay')?.classList.toggle('show')
}