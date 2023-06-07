// code your solution here
const saturdayFun = (activity) => {
  if (!activity) {
    return 'This Saturday, I want to roller-skate!';
  }
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = (activity) => {
  if (!activity) {
    return 'This Monday, I will go to the office.';
  }
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = (textFlair) => {
  return function (adjective) {
    if (!adjective) {
      return `You are ${textFlair}special${textFlair}!`;
    }
    return `You are ${textFlair}${adjective}${textFlair}!`;
  };
};
