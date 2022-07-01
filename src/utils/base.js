export const baseURL = 'https://tr-billing.herokuapp.com'
export const billing_UID_GEN = async (length, id) => {
    /**
     * @param  {String} s UID Gen Unique
     */
    for (var s = ''; s.length < length; s += `${id}abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01 ${Date.now()}`.charAt(Math.random() * 62 | 0));
    return s;
}