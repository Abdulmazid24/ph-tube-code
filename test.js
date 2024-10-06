// const isVerified = true;
// // if (isVerified === true) {
// //   console.log('user is verified');
// // } else {
// //   console.log('user is not verified');
// // }

// console.log(
//   `${isVerified === true ? 'user is verified' : 'user is not verified'}`
// );

// function gethours(second) {
//   const min = second / 60;
//   const sec = second % 60;
//   console.log(min, sec);
// }
// const result = gethours(500);
// console.log(parseInt(result));
function getTimesString(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  return `${hour} hours ${minute} min ${remainingSecond} second ago`;
}
console.log(getTimesString(8320));
