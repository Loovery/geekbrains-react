/**
 * Created by Korepanov Grigorii on 28.10.2019
 * grigoriikorepanov@gmail.com
 * t.me/loovery
 */

// eslint-disable-next-line no-bitwise,no-mixed-operators
export default () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));