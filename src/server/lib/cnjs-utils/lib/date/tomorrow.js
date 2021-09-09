function tomorrow(){
  const today = new Date(Date.now());
  const tomorrow = new Date();

  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(2, 0, 0, 0);

  return tomorrow;
}

module.exports = tomorrow;