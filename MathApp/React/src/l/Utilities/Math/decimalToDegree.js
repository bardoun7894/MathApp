import IsEmpty from '../IsEmpty'

const zeroOrDefault = (num, def) => {
    if(IsEmpty(num)) return def
    return num
}
export default function decimalToDegree(degree) {
  let arr = [];

  let deg = zeroOrDefault(degree - parseFloat("." + (degree + "").split(".")[1]), degree)
  arr.push(deg);

  let rem = zeroOrDefault(parseFloat("." + (degree + "").split(".")[1]) * 60, 0);
  let min = zeroOrDefault(rem - parseFloat("." + (rem + "").split(".")[1]), rem)
  arr.push(min);

  rem = zeroOrDefault(parseFloat("." + (rem + "").split(".")[1]) * 60, 0);
  let sec = zeroOrDefault(rem - parseFloat("." + (rem + "").split(".")[1]), rem);
  arr.push(sec);

  return arr;
};