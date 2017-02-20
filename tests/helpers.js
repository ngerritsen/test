/**
 * @param {Window}  window
 * @param {Element} element
 * @param {string}  type
 */
export function simulate(window, element, type) {
  const event = window.document.createEvent('HTMLEvents');

  event.initEvent(type, true, true);
  element.dispatchEvent(event);
}
